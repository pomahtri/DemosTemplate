import $ from '../../core/renderer';
import { isDefined } from '../../core/utils/type';
import Widget from '../widget/ui.widget';
import registerComponent from '../../core/component_registrator';
import { compileGetter, compileSetter } from '../../core/utils/data';
import { GanttView } from './ui.gantt.view';
import { GanttToolbar, GanttContextMenuBar } from './ui.gantt.bars';
import dxTreeList from '../tree_list';
import { extend } from '../../core/utils/extend';
import { getBoundingRect } from '../../core/utils/position';
import { hasWindow, getWindow } from '../../core/utils/window';
import DataOption from './ui.gantt.data.option';
import SplitterControl from '../splitter';
import { GanttDialog } from './ui.gantt.dialogs';
import LoadPanel from '../load_panel';
import { getPublicElement } from '../../core/element';
import { GanttDataCache } from './ui.gantt.cache';
import { GanttExportHelper } from './ui.gantt.export_helper';
var window = getWindow(); // STYLE gantt

var GANTT_CLASS = 'dx-gantt';
var GANTT_VIEW_CLASS = 'dx-gantt-view';
var GANTT_COLLAPSABLE_ROW = 'dx-gantt-collapsable-row';
var GANTT_TREE_LIST_WRAPPER = 'dx-gantt-treelist-wrapper';
var GANTT_TOOLBAR_WRAPPER = 'dx-gantt-toolbar-wrapper';
var GANTT_MAIN_WRAPPER = 'dx-gantt-main-wrapper';
var GANTT_TASKS = 'tasks';
var GANTT_DEPENDENCIES = 'dependencies';
var GANTT_RESOURCES = 'resources';
var GANTT_RESOURCE_ASSIGNMENTS = 'resourceAssignments';
var GANTT_NEW_TASK_CACHE_KEY = 'gantt_new_task_key';
var GANTT_DEFAULT_ROW_HEIGHT = 34;
var GANTT_MAPPED_FIELD_REGEX = /(\w*)Expr/;

class Gantt extends Widget {
  _init() {
    super._init();

    this._cache = new GanttDataCache();
    this._isGanttRendered = false;
  }

  _initMarkup() {
    super._initMarkup();

    this.$element().addClass(GANTT_CLASS);
    this._$toolbarWrapper = $('<div>').addClass(GANTT_TOOLBAR_WRAPPER).appendTo(this.$element());
    this._$toolbar = $('<div>').appendTo(this._$toolbarWrapper);
    this._$mainWrapper = $('<div>').addClass(GANTT_MAIN_WRAPPER).appendTo(this.$element());
    this._$treeListWrapper = $('<div>').addClass(GANTT_TREE_LIST_WRAPPER).appendTo(this._$mainWrapper);
    this._$treeList = $('<div>').appendTo(this._$treeListWrapper);
    this._$splitter = $('<div>').appendTo(this._$mainWrapper);
    this._$ganttView = $('<div>').addClass(GANTT_VIEW_CLASS).appendTo(this._$mainWrapper);
    this._$dialog = $('<div>').appendTo(this.$element());
    this._$loadPanel = $('<div>').appendTo(this.$element());
    this._$contextMenu = $('<div>').appendTo(this.$element());

    this._refreshDataSource(GANTT_TASKS);

    this._refreshDataSource(GANTT_DEPENDENCIES);

    this._refreshDataSource(GANTT_RESOURCES);

    this._refreshDataSource(GANTT_RESOURCE_ASSIGNMENTS);
  }

  _refresh() {
    this._isGanttRendered = false;

    super._refresh();
  }

  _renderContent() {
    this._isMainElementVisible = this.$element().is(':visible');

    if (this._isMainElementVisible && !this._isGanttRendered) {
      this._isGanttRendered = true;

      this._renderBars();

      this._renderTreeList();

      this._renderSplitter();
    }
  }

  _renderTreeList() {
    var {
      keyExpr,
      parentIdExpr
    } = this.option(GANTT_TASKS);
    this._treeList = this._createComponent(this._$treeList, dxTreeList, {
      dataSource: this._tasksRaw,
      keyExpr: keyExpr,
      parentIdExpr: parentIdExpr,
      columns: this._getTreeListColumns(),
      columnResizingMode: 'nextColumn',
      height: this._getTreeListHeight(),
      width: this.option('taskListWidth'),
      selection: {
        mode: this._getSelectionMode(this.option('allowSelection'))
      },
      selectedRowKeys: this._getArrayFromOneElement(this.option('selectedRowKey')),
      sorting: {
        mode: 'none'
      },
      scrolling: {
        showScrollbar: 'onHover',
        mode: 'virtual'
      },
      allowColumnResizing: true,
      autoExpandAll: true,
      showRowLines: this.option('showRowLines'),
      rootValue: this.option('rootValue'),
      onContentReady: e => {
        this._onTreeListContentReady(e);
      },
      onSelectionChanged: e => {
        this._onTreeListSelectionChanged(e);
      },
      onRowCollapsed: e => {
        this._onTreeListRowCollapsed(e);
      },
      onRowExpanded: e => {
        this._onTreeListRowExpanded(e);
      },
      onRowPrepared: e => {
        this._onTreeListRowPrepared(e);
      },
      onContextMenuPreparing: e => {
        this._onTreeListContextMenuPreparing(e);
      },
      onRowClick: e => {
        this._onTreeListRowClick(e);
      },
      onRowDblClick: e => {
        this._onTreeListRowDblClick(e);
      }
    });
  }

  _renderSplitter() {
    this._splitter = this._createComponent(this._$splitter, SplitterControl, {
      container: this.$element(),
      leftElement: this._$treeListWrapper,
      rightElement: this._$ganttView,
      onApplyPanelSize: this._onApplyPanelSize.bind(this)
    });

    this._splitter.option('initialLeftPanelWidth', this.option('taskListWidth'));
  }

  _renderBars() {
    this._bars = [];
    this._toolbar = new GanttToolbar(this._$toolbar, this);

    this._updateToolbarContent();

    this._bars.push(this._toolbar);

    this._contextMenuBar = new GanttContextMenuBar(this._$contextMenu, this);

    this._updateContextMenu();

    this._bars.push(this._contextMenuBar);
  }

  _initGanttView() {
    if (this._ganttView) {
      return;
    }

    this._ganttView = this._createComponent(this._$ganttView, GanttView, {
      width: '100%',
      height: this._treeList._$element.get(0).offsetHeight,
      rowHeight: this._getTreeListRowHeight(),
      headerHeight: this._getTreeListHeaderHeight(),
      tasks: this._tasks,
      dependencies: this._dependencies,
      resources: this._resources,
      resourceAssignments: this._resourceAssignments,
      allowSelection: this.option('allowSelection'),
      selectedRowKey: this.option('selectedRowKey'),
      showResources: this.option('showResources'),
      taskTitlePosition: this.option('taskTitlePosition'),
      firstDayOfWeek: this.option('firstDayOfWeek'),
      showRowLines: this.option('showRowLines'),
      scaleType: this.option('scaleType'),
      editing: this.option('editing'),
      validation: this.option('validation'),
      stripLines: this.option('stripLines'),
      bars: this._bars,
      mainElement: this.$element(),
      onSelectionChanged: this._onGanttViewSelectionChanged.bind(this),
      onScroll: this._onGanttViewScroll.bind(this),
      onDialogShowing: this._showDialog.bind(this),
      onPopupMenuShowing: this._showPopupMenu.bind(this),
      onExpandAll: this._expandAll.bind(this),
      onCollapseAll: this._collapseAll.bind(this),
      modelChangesListener: this._createModelChangesListener(),
      exportHelper: this._getExportHelper(),
      taskTooltipContentTemplate: this._getTaskTooltipContentTemplateFunc(this.option('taskTooltipContentTemplate')),
      taskProgressTooltipContentTemplate: this._getTaskProgressTooltipContentTemplateFunc(this.option('taskProgressTooltipContentTemplate')),
      taskTimeTooltipContentTemplate: this._getTaskTimeTooltipContentTemplateFunc(this.option('taskTimeTooltipContentTemplate')),
      taskContentTemplate: this._getTaskContentTemplateFunc(this.option('taskContentTemplate')),
      onTaskClick: e => {
        this._onTreeListRowClick(e);
      },
      onTaskDblClick: e => {
        this._onTreeListRowDblClick(e);
      },
      onAdjustControl: () => {
        this._onAdjustControl();
      }
    });

    this._fireContentReadyAction();
  }

  _onAdjustControl() {
    var elementHeight = this._$element.height();

    this._updateGanttWidth();

    this._setGanttHeight(elementHeight);
  }

  _onApplyPanelSize(e) {
    this._setInnerElementsWidth(e);

    this._updateGanttRowHeights();
  }

  _updateGanttRowHeights() {
    var rowHeight = this._getTreeListRowHeight();

    if (this._getGanttViewOption('rowHeight') !== rowHeight) {
      var _this$_ganttView;

      this._setGanttViewOption('rowHeight', rowHeight);

      (_this$_ganttView = this._ganttView) === null || _this$_ganttView === void 0 ? void 0 : _this$_ganttView._ganttViewCore.updateRowHeights(rowHeight);
    }
  }

  _onTreeListContentReady(e) {
    if (e.component.getDataSource()) {
      this._initGanttView();

      this._initScrollSync(e.component);
    }
  }

  _onTreeListRowPrepared(e) {
    if (e.rowType === 'data' && e.node.children.length > 0) {
      $(e.rowElement).addClass(GANTT_COLLAPSABLE_ROW);
    }
  }

  _onTreeListContextMenuPreparing(e) {
    var _e$row, _e$row2;

    if (((_e$row = e.row) === null || _e$row === void 0 ? void 0 : _e$row.rowType) === 'data') {
      this._setTreeListOption('selectedRowKeys', [e.row.data[this.option('tasks.keyExpr')]]);
    }

    e.items = [];
    var info = {
      cancel: false,
      event: e.event,
      type: 'task',
      key: (_e$row2 = e.row) === null || _e$row2 === void 0 ? void 0 : _e$row2.key,
      position: {
        x: e.event.pageX,
        y: e.event.pageY
      }
    };

    this._showPopupMenu(info);
  }

  _onTreeListRowClick(e) {
    this._raiseTaskClickAction(e.key, e.event);
  }

  _onTreeListRowDblClick(e) {
    if (this._raiseTaskDblClickAction(e.key, e.event)) {
      this._ganttView._ganttViewCore.showTaskEditDialog();
    }
  }

  _onTreeListSelectionChanged(e) {
    var selectedRowKey = e.currentSelectedRowKeys[0];

    this._setGanttViewOption('selectedRowKey', selectedRowKey);

    this._setOptionWithoutOptionChange('selectedRowKey', selectedRowKey);

    this._raiseSelectionChangedAction(selectedRowKey);
  }

  _onTreeListRowCollapsed(e) {
    this._ganttView.changeTaskExpanded(e.key, false);

    this._adjustHeight();
  }

  _onTreeListRowExpanded(e) {
    this._ganttView.changeTaskExpanded(e.key, true);

    this._adjustHeight();
  }

  _adjustHeight() {
    if (!this._hasHeight) {
      this._setGanttViewOption('height', 0);

      this._setGanttViewOption('height', this._treeList._$element.get(0).offsetHeight);
    }
  }

  _getTreeListHeight() {
    if (this._$treeList.height()) {
      return this._$treeList.height();
    }

    this._hasHeight = isDefined(this.option('height')) && this.option('height') !== '';
    return this._hasHeight ? '100%' : '';
  }

  _getTreeListColumns() {
    var columns = this.option('columns');

    if (columns) {
      for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var isKeyColumn = column.dataField === this.option("".concat(GANTT_TASKS, ".keyExpr")) || column.dataField === this.option("".concat(GANTT_TASKS, ".parentIdExpr"));

        if (isKeyColumn && !column.dataType) {
          column.dataType = 'object';
        }
      }
    }

    return columns;
  }

  _onGanttViewSelectionChanged(e) {
    this._setTreeListOption('selectedRowKeys', this._getArrayFromOneElement(e.id));
  }

  _onGanttViewScroll(e) {
    var treeListScrollable = this._treeList.getScrollable();

    if (treeListScrollable) {
      var diff = e.scrollTop - treeListScrollable.scrollTop();

      if (diff !== 0) {
        treeListScrollable.scrollBy({
          left: 0,
          top: diff
        });
      }
    }
  }

  _onTreeListScroll(treeListScrollView) {
    var ganttViewTaskAreaContainer = this._ganttView.getTaskAreaContainer();

    if (ganttViewTaskAreaContainer.scrollTop !== treeListScrollView.component.scrollTop()) {
      ganttViewTaskAreaContainer.scrollTop = treeListScrollView.component.scrollTop();
    }
  }

  _expandAll() {
    this._treeList.forEachNode(node => {
      if (node.children && node.children.length) {
        this._treeList.expandRow(node.key);

        this._ganttView.changeTaskExpanded(node.key, true);
      }
    });
  }

  _collapseAll() {
    this._treeList.forEachNode(node => {
      if (node.children && node.children.length) {
        this._treeList.collapseRow(node.key);

        this._ganttView.changeTaskExpanded(node.key, false);
      }
    });
  }

  _initScrollSync(treeList) {
    var treeListScrollable = treeList.getScrollable();

    if (treeListScrollable) {
      treeListScrollable.off('scroll');
      treeListScrollable.on('scroll', e => {
        this._onTreeListScroll(e);
      });
    }
  }

  _getTreeListRowHeight() {
    var $row = this._treeList._$element.find('.dx-data-row');

    var height = $row.length ? getBoundingRect($row.last().get(0)).height : GANTT_DEFAULT_ROW_HEIGHT;

    if (!height) {
      height = GANTT_DEFAULT_ROW_HEIGHT;
    }

    this._correctRowsViewRowHeight(height);

    return height;
  }

  _correctRowsViewRowHeight(height) {
    var view = this._treeList._views && this._treeList._views['rowsView'];

    if ((view === null || view === void 0 ? void 0 : view._rowHeight) !== height) {
      view._rowHeight = height;
    }
  }

  _getTreeListHeaderHeight() {
    return getBoundingRect(this._treeList._$element.find('.dx-treelist-headers').get(0)).height;
  }

  _setInnerElementsWidth(widths) {
    if (!hasWindow()) {
      return;
    }

    if (!widths) {
      widths = this._getPanelsWidthByOption();
    }

    this._setTreeListDimension('width', widths.leftPanelWidth);

    this._setGanttViewDimension('width', widths.rightPanelWidth);
  }

  _setTreeListDimension(dimension, value) {
    this._$treeListWrapper[dimension](value);

    this._setTreeListOption(dimension, this._$treeListWrapper[dimension]());
  }

  _setGanttViewDimension(dimension, value) {
    this._$ganttView[dimension](value);

    this._setGanttViewOption(dimension, this._$ganttView[dimension]());
  }

  _updateGanttWidth() {
    this._splitter._dimensionChanged();
  }

  _setGanttHeight(height) {
    var _this$_ganttView2;

    var toolbarHeightOffset = this._$toolbarWrapper.get(0).offsetHeight;

    var mainWrapperHeight = height - toolbarHeightOffset;

    this._setTreeListDimension('height', mainWrapperHeight);

    this._setGanttViewDimension('height', mainWrapperHeight);

    (_this$_ganttView2 = this._ganttView) === null || _this$_ganttView2 === void 0 ? void 0 : _this$_ganttView2._ganttViewCore.resetAndUpdate();
  }

  _getPanelsWidthByOption() {
    return {
      leftPanelWidth: this.option('taskListWidth'),
      rightPanelWidth: this._$element.width() - this.option('taskListWidth')
    };
  }

  _setGanttViewOption(optionName, value) {
    this._ganttView && this._ganttView.option(optionName, value);
  }

  _getGanttViewOption(optionName, value) {
    var _this$_ganttView3;

    return (_this$_ganttView3 = this._ganttView) === null || _this$_ganttView3 === void 0 ? void 0 : _this$_ganttView3.option(optionName);
  }

  _setTreeListOption(optionName, value) {
    this._treeList && this._treeList.option(optionName, value);
  }

  _refreshDataSource(name) {
    var dataOption = this["_".concat(name, "Option")];

    if (dataOption) {
      dataOption._disposeDataSource();

      delete this["_".concat(name, "Option")];
      delete this["_".concat(name)];
    }

    if (this.option("".concat(name, ".dataSource"))) {
      dataOption = new DataOption(name, this._getLoadPanel(), (name, data) => {
        this._dataSourceChanged(name, data);
      });
      dataOption.option('dataSource', this._getSpecificDataSourceOption(name));

      dataOption._refreshDataSource();

      this["_".concat(name, "Option")] = dataOption;
    }
  }

  _getSpecificDataSourceOption(name) {
    var dataSource = this.option("".concat(name, ".dataSource"));

    if (Array.isArray(dataSource)) {
      return {
        store: {
          type: 'array',
          data: dataSource,
          key: this.option("".concat(name, ".keyExpr"))
        }
      };
    }

    return dataSource;
  }

  _compileGettersByOption(optionName) {
    var getters = {};
    var optionValue = this.option(optionName);

    for (var field in optionValue) {
      var exprMatches = field.match(/(\w*)Expr/);

      if (exprMatches) {
        getters[exprMatches[1]] = compileGetter(optionValue[exprMatches[0]]);
      }
    }

    return getters;
  }

  _compileSettersByOption(optionName) {
    var setters = {};
    var optionValue = this.option(optionName);

    for (var field in optionValue) {
      var exprMatches = field.match(/(\w*)Expr/);

      if (exprMatches) {
        setters[exprMatches[1]] = compileSetter(optionValue[exprMatches[0]]);
      }
    }

    return setters;
  }

  _getStoreObject(optionName, modelObject) {
    var setters = this._compileSettersByOption(optionName);

    return Object.keys(setters).reduce((previous, key) => {
      if (key !== 'key') {
        setters[key](previous, modelObject[key]);
      }

      return previous;
    }, {});
  }

  _prepareSetterMapHandler(setters) {
    return data => {
      return Object.keys(setters).reduce((previous, key) => {
        var resultKey = key === 'key' ? 'id' : key;
        setters[key](previous, data[resultKey]);
        return previous;
      }, {});
    };
  }

  _prepareMapHandler(getters) {
    return data => {
      return Object.keys(getters).reduce((previous, key) => {
        var resultKey = key === 'key' ? 'id' : key;
        previous[resultKey] = getters[key](data);
        return previous;
      }, {});
    };
  }

  _dataSourceChanged(dataSourceName, data) {
    var getters = this._compileGettersByOption(dataSourceName);

    var mappedData = data.map(this._prepareMapHandler(getters));
    this["_".concat(dataSourceName)] = mappedData;

    this._setGanttViewOption(dataSourceName, mappedData);

    if (dataSourceName === GANTT_TASKS) {
      this._tasksRaw = data;
      var expandedRowKeys = data.map(t => t[this.option('tasks.parentIdExpr')]).filter((value, index, self) => value && self.indexOf(value) === index);

      this._setTreeListOption('expandedRowKeys', expandedRowKeys);

      this._setTreeListOption('dataSource', data);
    }
  }

  _createModelChangesListener() {
    return {
      // IModelChangesListener
      NotifyTaskCreated: (task, callback, errorCallback) => {
        this._onRecordInserted(GANTT_TASKS, task, callback);
      },
      NotifyTaskRemoved: (taskId, errorCallback, task) => {
        this._onRecordRemoved(GANTT_TASKS, taskId, task);
      },
      NotifyTaskTitleChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'title', newValue);
      },
      NotifyTaskDescriptionChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'description', newValue);
      },
      NotifyTaskStartChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'start', newValue);
      },
      NotifyTaskEndChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'end', newValue);
      },
      NotifyTaskProgressChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'progress', newValue);
      },
      NotifyTaskColorChanged: (taskId, newValue, errorCallback) => {
        this._onRecordUpdated(GANTT_TASKS, taskId, 'color', newValue);
      },
      NotifyParentTaskUpdated: (task, errorCallback) => {
        this._onParentTaskUpdated(task);
      },
      NotifyDependencyInserted: (dependency, callback, errorCallback) => {
        this._onRecordInserted(GANTT_DEPENDENCIES, dependency, callback);
      },
      NotifyDependencyRemoved: (dependencyId, errorCallback, dependency) => {
        this._onRecordRemoved(GANTT_DEPENDENCIES, dependencyId, dependency);
      },
      NotifyResourceCreated: (resource, callback, errorCallback) => {
        this._onRecordInserted(GANTT_RESOURCES, resource, callback);
      },
      NotifyResourceRemoved: (resourceId, errorCallback, resource) => {
        this._onRecordRemoved(GANTT_RESOURCES, resourceId, resource);
      },
      NotifyResourceAssigned: (assignment, callback, errorCallback) => {
        this._onRecordInserted(GANTT_RESOURCE_ASSIGNMENTS, assignment, callback);
      },
      NotifyResourceUnassigned: (assignmentId, errorCallback, assignment) => {
        this._onRecordRemoved(GANTT_RESOURCE_ASSIGNMENTS, assignmentId, assignment);
      },
      NotifyParentDataRecalculated: data => {
        this._onParentTasksRecalculated(data);
      },
      NotifyTaskCreating: args => {
        this._raiseInsertingAction(GANTT_TASKS, args);
      },
      NotifyTaskRemoving: args => {
        this._raiseDeletingAction(GANTT_TASKS, args);
      },
      NotifyTaskUpdating: args => {
        this._raiseUpdatingAction(GANTT_TASKS, args);
      },
      NotifyTaskMoving: args => {
        this._raiseUpdatingAction(GANTT_TASKS, args, this._getTaskMovingAction());
      },
      NotifyTaskEditDialogShowing: args => {
        this._raiseTaskEditDialogShowingAction(args);
      },
      NotifyResourceManagerDialogShowing: args => {
        this._raiseResourceManagerDialogShowingAction(args);
      },
      NotifyDependencyInserting: args => {
        this._raiseInsertingAction(GANTT_DEPENDENCIES, args);
      },
      NotifyDependencyRemoving: args => {
        this._raiseDeletingAction(GANTT_DEPENDENCIES, args);
      },
      NotifyResourceCreating: args => {
        this._raiseInsertingAction(GANTT_RESOURCES, args);
      },
      NotifyResourceRemoving: args => {
        this._raiseDeletingAction(GANTT_RESOURCES, args);
      },
      NotifyResourceAssigning: args => {
        this._raiseInsertingAction(GANTT_RESOURCE_ASSIGNMENTS, args);
      },
      // eslint-disable-next-line spellcheck/spell-checker
      NotifyResourceUnassigning: args => {
        this._raiseDeletingAction(GANTT_RESOURCE_ASSIGNMENTS, args);
      }
    };
  }

  _onRecordInserted(optionName, record, callback) {
    var dataOption = this["_".concat(optionName, "Option")];

    if (dataOption) {
      var data = this._getStoreObject(optionName, record);

      if (optionName === GANTT_TASKS) {
        this._addCustomFieldsDataFromCache(GANTT_NEW_TASK_CACHE_KEY, data);
      }

      dataOption.insert(data, response => {
        var keyGetter = compileGetter(this.option("".concat(optionName, ".keyExpr")));
        var insertedId = keyGetter(response);
        callback(insertedId);

        if (optionName === GANTT_TASKS) {
          this._updateTreeListDataSource();

          var parentId = record.parentId;

          if (parentId !== undefined) {
            var expandedRowKeys = this._treeList.option('expandedRowKeys');

            if (expandedRowKeys.indexOf(parentId) === -1) {
              expandedRowKeys.push(parentId);

              this._treeList.option('expandedRowKeys', expandedRowKeys);
            }
          }

          this._selectTreeListRows(this._getArrayFromOneElement(insertedId));

          this._setTreeListOption('focusedRowKey', insertedId);

          setTimeout(() => {
            this._updateGanttRowHeights();
          }, 300);
        }

        dataOption._reloadDataSource();

        this._raiseInsertedAction(optionName, data, insertedId);
      });
    }
  }

  _onRecordRemoved(optionName, key, data) {
    var dataOption = this["_".concat(optionName, "Option")];

    if (dataOption) {
      dataOption.remove(key, () => {
        if (optionName === GANTT_TASKS) {
          this._updateTreeListDataSource();
        }

        dataOption._reloadDataSource();

        this._raiseDeletedAction(optionName, key, this._convertCoreToMappedData(optionName, data));
      });
    }
  }

  _onRecordUpdated(optionName, key, fieldName, value) {
    var dataOption = this["_".concat(optionName, "Option")];
    var isTaskUpdated = optionName === GANTT_TASKS;

    if (dataOption) {
      var setter = compileSetter(this.option("".concat(optionName, ".").concat(fieldName, "Expr")));
      var data = {};
      setter(data, value);

      var hasCustomFieldsData = isTaskUpdated && this._cache.hasData(key);

      if (hasCustomFieldsData) {
        this._addCustomFieldsDataFromCache(key, data);
      }

      dataOption.update(key, data, () => {
        if (isTaskUpdated) {
          this._updateTreeListDataSource();
        }

        dataOption._reloadDataSource();

        this._raiseUpdatedAction(optionName, data, key);
      });
    }
  }

  _onParentTaskUpdated(data) {
    var mappedData = this.getTaskDataByCoreData(data);

    this._raiseUpdatedAction(GANTT_TASKS, mappedData, data.id);
  }

  _onParentTasksRecalculated(data) {
    var setters = this._compileSettersByOption(GANTT_TASKS);

    var treeDataSource = this._appendCustomFields(data.map(this._prepareSetterMapHandler(setters)));

    this._setTreeListOption('dataSource', treeDataSource);
  }

  _appendCustomFields(data) {
    var modelData = this._tasksOption && this._tasksOption._getItems();

    var keyGetter = this._getTaskKeyGetter();

    var invertedData = this.getInvertedData(modelData, keyGetter);
    return data.reduce((previous, item) => {
      var key = keyGetter(item);
      var modelItem = invertedData[key];

      if (!modelItem) {
        previous.push(item);
      } else {
        var updatedItem = {};

        for (var field in modelItem) {
          updatedItem[field] = Object.prototype.hasOwnProperty.call(item, field) ? item[field] : modelItem[field];
        }

        previous.push(updatedItem);
      }

      return previous;
    }, []);
  }

  _getTaskKeyGetter() {
    return compileGetter(this.option("".concat(GANTT_TASKS, ".keyExpr")));
  }

  getInvertedData(data, keyGetter) {
    var inverted = {};

    if (data) {
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var key = keyGetter(dataItem);
        inverted[key] = dataItem;
      }
    }

    return inverted;
  }

  _updateTreeListDataSource() {
    if (!this._skipUpdateTreeListDataSource()) {
      var dataSource = this.option('tasks.dataSource');
      var storeArray = this._tasksOption._getStore()._array || dataSource.items && dataSource.items();

      this._setTreeListOption('dataSource', storeArray ? storeArray : dataSource);
    }
  }

  _skipUpdateTreeListDataSource() {
    return this.option('validation.autoUpdateParentTasks');
  }

  _selectTreeListRows(keys) {
    this._setTreeListOption('selectedRowKeys', keys);
  } // custom fields cache updating


  _addCustomFieldsDataFromCache(key, data) {
    this._cache.pullDataFromCache(key, data);
  }

  _saveCustomFieldsDataToCache(key, data) {
    var forceUpdateOnKeyExpire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var customFieldsData = this._getCustomFieldsData(data);

    if (Object.keys(customFieldsData).length > 0) {
      var updateCallback = (key, data) => {
        var dataOption = this["_".concat(GANTT_TASKS, "Option")];

        if (dataOption && data) {
          dataOption.update(key, data, (data, key) => {
            var updatedCustomFields = {};

            this._addCustomFieldsData(key, updatedCustomFields);

            this._updateTreeListDataSource();

            dataOption._refreshDataSource();

            var selectedRowKey = this.option('selectedRowKey');

            this._ganttView._selectTask(selectedRowKey);

            this._raiseUpdatedAction(GANTT_TASKS, updatedCustomFields, key);
          });
        }
      };

      this._cache.saveData(key, customFieldsData, forceUpdateOnKeyExpire ? updateCallback : null);
    }
  } // end custom fields cache updating


  _getLoadPanel() {
    if (!this._loadPanel) {
      this._loadPanel = this._createComponent(this._$loadPanel, LoadPanel, {
        position: {
          of: this.$element()
        }
      });
    }

    return this._loadPanel;
  }

  _createSelectionChangedAction() {
    this._selectionChangedAction = this._createActionByOption('onSelectionChanged');
  }

  _createTaskClickAction() {
    this._taskClickAction = this._createActionByOption('onTaskClick');
  }

  _createTaskDblClickAction() {
    this._taskDblClickAction = this._createActionByOption('onTaskDblClick');
  }

  _createCustomCommandAction() {
    this._customCommandAction = this._createActionByOption('onCustomCommand');
  }

  _createContextMenuPreparingAction() {
    this._contextMenuPreparingAction = this._createActionByOption('onContextMenuPreparing');
  }

  _raiseSelectionChangedAction(selectedRowKey) {
    if (!this._selectionChangedAction) {
      this._createSelectionChangedAction();
    }

    this._selectionChangedAction({
      selectedRowKey: selectedRowKey
    });
  }

  _raiseCustomCommand(commandName) {
    if (!this._customCommandAction) {
      this._createCustomCommandAction();
    }

    this._customCommandAction({
      name: commandName
    });
  }

  _raiseContextMenuPreparing(options) {
    if (!this._contextMenuPreparingAction) {
      this._createContextMenuPreparingAction();
    }

    this._contextMenuPreparingAction(options);
  }

  _raiseInsertingAction(optionName, coreArgs) {
    var action = this._getInsertingAction(optionName);

    if (action) {
      var args = {
        cancel: false,
        values: this._convertCoreToMappedData(optionName, coreArgs.values)
      };
      action(args);
      coreArgs.cancel = args.cancel;
      coreArgs.values = this._convertMappedToCoreData(optionName, args.values);

      if (optionName === GANTT_TASKS) {
        this._saveCustomFieldsDataToCache(GANTT_NEW_TASK_CACHE_KEY, args.values);
      }
    }
  }

  _raiseInsertedAction(optionName, data, key) {
    var action = this._getInsertedAction(optionName);

    if (action) {
      var args = {
        values: data,
        key: key
      };
      action(args);
    }
  }

  _raiseDeletingAction(optionName, coreArgs) {
    var action = this._getDeletingAction(optionName);

    if (action) {
      var args = {
        cancel: false,
        key: coreArgs.key,
        values: this._convertCoreToMappedData(optionName, coreArgs.values)
      };
      action(args);
      coreArgs.cancel = args.cancel;
    }
  }

  _raiseDeletedAction(optionName, key, data) {
    var action = this._getDeletedAction(optionName);

    if (action) {
      var args = {
        key: key,
        values: data
      };
      action(args);
    }
  }

  _raiseUpdatingAction(optionName, coreArgs, action) {
    action = action || this._getUpdatingAction(optionName);

    if (action) {
      var args = {
        cancel: false,
        key: coreArgs.key,
        newValues: this._convertCoreToMappedData(optionName, coreArgs.newValues),
        values: this._convertCoreToMappedData(optionName, coreArgs.values)
      };
      action(args);
      coreArgs.cancel = args.cancel;
      coreArgs.newValues = this._convertMappedToCoreData(optionName, args.newValues);

      if (optionName === GANTT_TASKS) {
        var forceUpdateOnKeyExpire = !Object.keys(coreArgs.newValues).length;

        this._saveCustomFieldsDataToCache(args.key, args.newValues, forceUpdateOnKeyExpire);
      }
    }
  }

  _raiseUpdatedAction(optionName, data, key) {
    var action = this._getUpdatedAction(optionName);

    if (action) {
      var args = {
        values: data,
        key: key
      };
      action(args);
    }
  }

  _raiseTaskEditDialogShowingAction(coreArgs) {
    var action = this._getTaskEditDialogShowingAction();

    if (action) {
      var args = {
        cancel: false,
        key: coreArgs.key,
        values: this._convertCoreToMappedData(GANTT_TASKS, coreArgs.values),
        readOnlyFields: this._convertCoreToMappedFields(GANTT_TASKS, coreArgs.readOnlyFields),
        hiddenFields: this._convertCoreToMappedFields(GANTT_TASKS, coreArgs.hiddenFields)
      };
      action(args);
      coreArgs.cancel = args.cancel;
      coreArgs.values = this._convertMappedToCoreData(GANTT_TASKS, args.values);
      coreArgs.readOnlyFields = this._convertMappedToCoreFields(GANTT_TASKS, args.readOnlyFields);
      coreArgs.hiddenFields = this._convertMappedToCoreFields(GANTT_TASKS, args.hiddenFields);
    }
  }

  _raiseResourceManagerDialogShowingAction(coreArgs) {
    var action = this._getResourceManagerDialogShowingAction();

    if (action) {
      var mappedResources = coreArgs.values.resources.items.map(r => this._convertMappedToCoreData(GANTT_RESOURCES, r));
      var args = {
        cancel: false,
        values: mappedResources
      };
      action(args);
      coreArgs.cancel = args.cancel;
    }
  }

  _raiseTaskClickAction(key, event) {
    if (!this._taskClickAction) {
      this._createTaskClickAction();
    }

    var args = {
      key: key,
      event: event,
      data: this.getTaskData(key)
    };

    this._taskClickAction(args);
  }

  _raiseTaskDblClickAction(key, event) {
    if (!this._taskDblClickAction) {
      this._createTaskDblClickAction();
    }

    var args = {
      cancel: false,
      data: this.getTaskData(key),
      event: event,
      key: key
    };

    this._taskDblClickAction(args);

    return !args.cancel;
  }

  _getInsertingAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskInsertingAction();

      case GANTT_DEPENDENCIES:
        return this._getDependencyInsertingAction();

      case GANTT_RESOURCES:
        return this._getResourceInsertingAction();

      case GANTT_RESOURCE_ASSIGNMENTS:
        return this._getResourceAssigningAction();
    }

    return () => {};
  }

  _getInsertedAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskInsertedAction();

      case GANTT_DEPENDENCIES:
        return this._getDependencyInsertedAction();

      case GANTT_RESOURCES:
        return this._getResourceInsertedAction();

      case GANTT_RESOURCE_ASSIGNMENTS:
        return this._getResourceAssignedAction();
    }

    return () => {};
  }

  _getDeletingAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskDeletingAction();

      case GANTT_DEPENDENCIES:
        return this._getDependencyDeletingAction();

      case GANTT_RESOURCES:
        return this._getResourceDeletingAction();

      case GANTT_RESOURCE_ASSIGNMENTS:
        // eslint-disable-next-line spellcheck/spell-checker
        return this._getResourceUnassigningAction();
    }

    return () => {};
  }

  _getDeletedAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskDeletedAction();

      case GANTT_DEPENDENCIES:
        return this._getDependencyDeletedAction();

      case GANTT_RESOURCES:
        return this._getResourceDeletedAction();

      case GANTT_RESOURCE_ASSIGNMENTS:
        // eslint-disable-next-line spellcheck/spell-checker
        return this._getResourceUnassignedAction();
    }

    return () => {};
  }

  _getUpdatingAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskUpdatingAction();
    }

    return () => {};
  }

  _getUpdatedAction(optionName) {
    switch (optionName) {
      case GANTT_TASKS:
        return this._getTaskUpdatedAction();
    }

    return () => {};
  }

  _getTaskInsertingAction() {
    if (!this._taskInsertingAction) {
      this._createTaskInsertingAction();
    }

    return this._taskInsertingAction;
  }

  _getTaskInsertedAction() {
    if (!this._taskInsertedAction) {
      this._createTaskInsertedAction();
    }

    return this._taskInsertedAction;
  }

  _getTaskDeletingAction() {
    if (!this._taskDeletingAction) {
      this._createTaskDeletingAction();
    }

    return this._taskDeletingAction;
  }

  _getTaskDeletedAction() {
    if (!this._taskDeletedAction) {
      this._createTaskDeletedAction();
    }

    return this._taskDeletedAction;
  }

  _getTaskUpdatingAction() {
    if (!this._taskUpdatingAction) {
      this._createTaskUpdatingAction();
    }

    return this._taskUpdatingAction;
  }

  _getTaskUpdatedAction() {
    if (!this._taskUpdatedAction) {
      this._createTaskUpdatedAction();
    }

    return this._taskUpdatedAction;
  }

  _getTaskMovingAction() {
    if (!this._taskMovingAction) {
      this._createTaskMovingAction();
    }

    return this._taskMovingAction;
  }

  _getTaskEditDialogShowingAction() {
    if (!this._taskEditDialogShowingAction) {
      this._createTaskEditDialogShowingAction();
    }

    return this._taskEditDialogShowingAction;
  }

  _getResourceManagerDialogShowingAction() {
    if (!this._resourceManagerDialogShowingAction) {
      this._createResourceManagerDialogShowingAction();
    }

    return this._resourceManagerDialogShowingAction;
  }

  _getDependencyInsertingAction() {
    if (!this._dependencyInsertingAction) {
      this._createDependencyInsertingAction();
    }

    return this._dependencyInsertingAction;
  }

  _getDependencyInsertedAction() {
    if (!this._dependencyInsertedAction) {
      this._createDependencyInsertedAction();
    }

    return this._dependencyInsertedAction;
  }

  _getDependencyDeletingAction() {
    if (!this._dependencyDeletingAction) {
      this._createDependencyDeletingAction();
    }

    return this._dependencyDeletingAction;
  }

  _getDependencyDeletedAction() {
    if (!this._dependencyDeletedAction) {
      this._createDependencyDeletedAction();
    }

    return this._dependencyDeletedAction;
  }

  _getResourceInsertingAction() {
    if (!this._resourceInsertingAction) {
      this._createResourceInsertingAction();
    }

    return this._resourceInsertingAction;
  }

  _getResourceInsertedAction() {
    if (!this._resourceInsertedAction) {
      this._createResourceInsertedAction();
    }

    return this._resourceInsertedAction;
  }

  _getResourceDeletingAction() {
    if (!this._resourceDeletingAction) {
      this._createResourceDeletingAction();
    }

    return this._resourceDeletingAction;
  }

  _getResourceDeletedAction() {
    if (!this._resourceDeletedAction) {
      this._createResourceDeletedAction();
    }

    return this._resourceDeletedAction;
  }

  _getResourceAssigningAction() {
    if (!this._resourceAssigningAction) {
      this._createResourceAssigningAction();
    }

    return this._resourceAssigningAction;
  }

  _getResourceAssignedAction() {
    if (!this._resourceAssignedAction) {
      this._createResourceAssignedAction();
    }

    return this._resourceAssignedAction;
  }
  /* eslint-disable */


  _getResourceUnassigningAction() {
    if (!this._resourceUnassigningAction) {
      this._createResourceUnassigningAction();
    }

    return this._resourceUnassigningAction;
  }
  /* eslint-disable */


  _getResourceUnassignedAction() {
    if (!this._resourceUnassignedAction) {
      this._createResourceUnassignedAction();
    }

    return this._resourceUnassignedAction;
  }

  _createResourceUnassigningAction() {
    this._resourceUnassigningAction = this._createActionByOption('onResourceUnassigning');
  }

  _createResourceUnassignedAction() {
    this._resourceUnassignedAction = this._createActionByOption('onResourceUnassigned');
  }
  /* eslint-enable */


  _createTaskInsertingAction() {
    this._taskInsertingAction = this._createActionByOption('onTaskInserting');
  }

  _createTaskInsertedAction() {
    this._taskInsertedAction = this._createActionByOption('onTaskInserted');
  }

  _createTaskDeletingAction() {
    this._taskDeletingAction = this._createActionByOption('onTaskDeleting');
  }

  _createTaskDeletedAction() {
    this._taskDeletedAction = this._createActionByOption('onTaskDeleted');
  }

  _createTaskUpdatingAction() {
    this._taskUpdatingAction = this._createActionByOption('onTaskUpdating');
  }

  _createTaskUpdatedAction() {
    this._taskUpdatedAction = this._createActionByOption('onTaskUpdated');
  }

  _createTaskMovingAction() {
    this._taskMovingAction = this._createActionByOption('onTaskMoving');
  }

  _createTaskEditDialogShowingAction() {
    this._taskEditDialogShowingAction = this._createActionByOption('onTaskEditDialogShowing');
  }

  _createResourceManagerDialogShowingAction() {
    this._resourceManagerDialogShowingAction = this._createActionByOption('onResourceManagerDialogShowing');
  }

  _createDependencyInsertingAction() {
    this._dependencyInsertingAction = this._createActionByOption('onDependencyInserting');
  }

  _createDependencyInsertedAction() {
    this._dependencyInsertedAction = this._createActionByOption('onDependencyInserted');
  }

  _createDependencyDeletingAction() {
    this._dependencyDeletingAction = this._createActionByOption('onDependencyDeleting');
  }

  _createDependencyDeletedAction() {
    this._dependencyDeletedAction = this._createActionByOption('onDependencyDeleted');
  }

  _createResourceInsertingAction() {
    this._resourceInsertingAction = this._createActionByOption('onResourceInserting');
  }

  _createResourceInsertedAction() {
    this._resourceInsertedAction = this._createActionByOption('onResourceInserted');
  }

  _createResourceDeletingAction() {
    this._resourceDeletingAction = this._createActionByOption('onResourceDeleting');
  }

  _createResourceDeletedAction() {
    this._resourceDeletedAction = this._createActionByOption('onResourceDeleted');
  }

  _createResourceAssigningAction() {
    this._resourceAssigningAction = this._createActionByOption('onResourceAssigning');
  }

  _createResourceAssignedAction() {
    this._resourceAssignedAction = this._createActionByOption('onResourceAssigned');
  }

  _convertCoreToMappedData(optionName, coreData) {
    return Object.keys(coreData).reduce((previous, f) => {
      var mappedField = this._getMappedFieldName(optionName, f);

      if (mappedField) {
        var setter = compileSetter(mappedField);
        setter(previous, coreData[f]);
      }

      return previous;
    }, {});
  }

  _convertMappedToCoreData(optionName, mappedData) {
    var coreData = {};

    if (mappedData) {
      var mappedFields = this.option(optionName);

      for (var field in mappedFields) {
        var exprMatches = field.match(GANTT_MAPPED_FIELD_REGEX);
        var mappedFieldName = exprMatches && mappedFields[exprMatches[0]];

        if (mappedFieldName && mappedData[mappedFieldName] !== undefined) {
          var getter = compileGetter(mappedFieldName);
          var coreFieldName = exprMatches[1];
          coreData[coreFieldName] = getter(mappedData);
        }
      }
    }

    return coreData;
  }

  _getMappedFieldName(optionName, coreField) {
    var coreFieldName = coreField;

    if (coreField === 'id') {
      coreFieldName = 'key';
    }

    return this.option("".concat(optionName, ".").concat(coreFieldName, "Expr"));
  }

  _convertCoreToMappedFields(optionName, fields) {
    return fields.reduce((previous, f) => {
      var mappedField = this._getMappedFieldName(optionName, f);

      if (mappedField) {
        previous.push(mappedField);
      }

      return previous;
    }, []);
  }

  _convertMappedToCoreFields(optionName, fields) {
    var coreFields = [];
    var mappedFields = this.option(optionName);

    for (var field in mappedFields) {
      var exprMatches = field.match(GANTT_MAPPED_FIELD_REGEX);
      var mappedFieldName = exprMatches && mappedFields[exprMatches[0]];

      if (mappedFieldName && fields.indexOf(mappedFieldName) > -1) {
        var coreFieldName = exprMatches[1];
        coreFields.push(coreFieldName);
      }
    }

    return coreFields;
  }

  _getTaskMappedFieldNames() {
    var mappedFields = [];
    var mappedFieldsData = this.option(GANTT_TASKS);

    for (var field in mappedFieldsData) {
      var exprMatches = field.match(GANTT_MAPPED_FIELD_REGEX);
      var mappedFieldName = exprMatches && mappedFieldsData[exprMatches[0]];

      if (mappedFieldName) {
        mappedFields.push(mappedFieldName);
      }
    }

    return mappedFields;
  }

  _getTaskCustomFields() {
    var columns = this.option('columns');
    var columnFields = columns && columns.map(c => c.dataField);

    var mappedFields = this._getTaskMappedFieldNames();

    return columnFields ? columnFields.filter(f => mappedFields.indexOf(f) < 0) : [];
  }

  _getCustomFieldsData(data) {
    return this._getTaskCustomFields().reduce((previous, field) => {
      if (data && data[field] !== undefined) {
        previous[field] = data[field];
      }

      return previous;
    }, {});
  }

  _addCustomFieldsData(key, data) {
    if (data) {
      var modelData = this._tasksOption && this._tasksOption._getItems();

      var keyGetter = compileGetter(this.option("".concat(GANTT_TASKS, ".keyExpr")));
      var modelItem = modelData && modelData.filter(obj => keyGetter(obj) === key)[0];

      var customFields = this._getTaskCustomFields();

      if (modelItem) {
        for (var i = 0; i < customFields.length; i++) {
          var field = customFields[i];

          if (Object.prototype.hasOwnProperty.call(modelItem, field)) {
            data[field] = modelItem[field];
          }
        }
      }
    }
  }

  _getSelectionMode(allowSelection) {
    return allowSelection ? 'single' : 'none';
  }

  _getArrayFromOneElement(element) {
    return element === undefined || element === null ? [] : [element];
  }

  _getToolbarItems() {
    var items = this.option('toolbar.items');
    return items ? items : [];
  }

  _updateToolbarContent() {
    var items = this._getToolbarItems();

    if (items.length) {
      this._$toolbarWrapper.show();
    } else {
      this._$toolbarWrapper.hide();
    }

    this._toolbar && this._toolbar.createItems(items);

    this._updateBarItemsState();
  }

  _updateContextMenu() {
    var contextMenuOptions = this.option('contextMenu');

    if (contextMenuOptions.enabled && this._contextMenuBar) {
      this._contextMenuBar.createItems(contextMenuOptions.items);

      this._updateBarItemsState();
    }
  }

  _updateBarItemsState() {
    this._ganttView && this._ganttView.updateBarItemsState();
  }

  _showDialog(e) {
    if (!this._dialogInstance) {
      this._dialogInstance = new GanttDialog(this, this._$dialog);
    }

    this._dialogInstance.show(e.name, e.parameters, e.callback, e.afterClosing, this.option('editing'));
  }

  _showPopupMenu(info) {
    if (this.option('contextMenu.enabled')) {
      this._ganttView.getBarManager().updateContextMenu();

      var args = {
        cancel: false,
        event: info.event,
        targetType: info.type,
        targetKey: info.key,
        items: extend(true, [], this._contextMenuBar._items),
        data: info.type === 'task' ? this.getTaskData(info.key) : this.getDependencyData(info.key)
      };

      this._raiseContextMenuPreparing(args);

      if (!args.cancel) {
        this._contextMenuBar.show(info.position, args.items);
      }
    }
  }

  _executeCoreCommand(id) {
    this._ganttView.executeCoreCommand(id);
  }

  _clean() {
    var _this$_ganttView4;

    (_this$_ganttView4 = this._ganttView) === null || _this$_ganttView4 === void 0 ? void 0 : _this$_ganttView4._ganttViewCore.cleanMarkup();
    delete this._ganttView;
    delete this._dialogInstance;

    super._clean();
  }

  _getTaskTooltipContentTemplateFunc(taskTooltipContentTemplateOption) {
    var isTooltipShowing = true;

    var template = taskTooltipContentTemplateOption && this._getTemplate(taskTooltipContentTemplateOption);

    var createTemplateFunction = template && ((container, item) => {
      template.render({
        model: this.getTaskDataByCoreData(item),
        container: getPublicElement($(container))
      });
      return isTooltipShowing;
    });

    return createTemplateFunction;
  }

  _getTaskProgressTooltipContentTemplateFunc(taskTooltipContentTemplateOption) {
    var isTooltipShowing = true;

    var template = taskTooltipContentTemplateOption && this._getTemplate(taskTooltipContentTemplateOption);

    var createTemplateFunction = template && ((container, item, callback, posX) => {
      template.render({
        model: item,
        container: getPublicElement($(container)),
        onRendered: () => {
          callback(posX);
        }
      });
      return isTooltipShowing;
    });

    return createTemplateFunction;
  }

  _getTaskTimeTooltipContentTemplateFunc(taskTooltipContentTemplateOption) {
    var isTooltipShowing = true;

    var template = taskTooltipContentTemplateOption && this._getTemplate(taskTooltipContentTemplateOption);

    var createTemplateFunction = template && ((container, item, callback, posX) => {
      template.render({
        model: item,
        container: getPublicElement($(container)),
        onRendered: () => {
          callback(posX);
        }
      });
      return isTooltipShowing;
    });

    return createTemplateFunction;
  }

  _getTaskContentTemplateFunc(taskContentTemplateOption) {
    var isTaskShowing = true;

    var template = taskContentTemplateOption && this._getTemplate(taskContentTemplateOption);

    var createTemplateFunction = template && ((container, item, callback, index) => {
      item.taskData = this.getTaskDataByCoreData(item.taskData);
      template.render({
        model: item,
        container: getPublicElement($(container)),
        onRendered: () => {
          callback(container, index);
        }
      });
      return isTaskShowing;
    });

    return createTemplateFunction;
  }

  _getDefaultOptions() {
    return extend(super._getDefaultOptions(), {
      /**
      * @name dxGanttOptions.rtlEnabled
      * @hidden
      */
      tasks: {
        dataSource: null,
        keyExpr: 'id',
        parentIdExpr: 'parentId',
        startExpr: 'start',
        endExpr: 'end',
        progressExpr: 'progress',
        titleExpr: 'title',
        colorExpr: 'color'
      },
      dependencies: {
        dataSource: null,
        keyExpr: 'id',
        predecessorIdExpr: 'predecessorId',
        successorIdExpr: 'successorId',
        typeExpr: 'type'
      },
      resources: {
        dataSource: null,
        keyExpr: 'id',
        textExpr: 'text',
        colorExpr: 'color'
      },
      resourceAssignments: {
        dataSource: null,
        keyExpr: 'id',
        taskIdExpr: 'taskId',
        resourceIdExpr: 'resourceId'
      },
      columns: undefined,
      taskListWidth: 300,
      showResources: true,
      taskTitlePosition: 'inside',
      firstDayOfWeek: undefined,
      selectedRowKey: undefined,
      onSelectionChanged: null,
      onTaskClick: null,
      onTaskDblClick: null,
      onTaskInserting: null,
      onTaskInserted: null,
      onTaskDeleting: null,
      onTaskDeleted: null,
      onTaskUpdating: null,
      onTaskUpdated: null,
      onTaskMoving: null,
      onTaskEditDialogShowing: null,
      onDependencyInserting: null,
      onDependencyInserted: null,
      onDependencyDeleting: null,
      onDependencyDeleted: null,
      onResourceInserting: null,
      onResourceInserted: null,
      onResourceDeleting: null,
      onResourceDeleted: null,
      onResourceAssigning: null,
      onResourceAssigned: null,
      // eslint-disable-next-line spellcheck/spell-checker
      onResourceUnassigning: null,
      // eslint-disable-next-line spellcheck/spell-checker
      onResourceUnassigned: null,
      onCustomCommand: null,
      onContextMenuPreparing: null,
      allowSelection: true,
      showRowLines: true,
      stripLines: undefined,
      scaleType: 'auto',
      editing: {
        enabled: false,
        allowTaskAdding: true,
        allowTaskDeleting: true,
        allowTaskUpdating: true,
        allowDependencyAdding: true,
        allowDependencyDeleting: true,
        allowResourceAdding: true,
        allowResourceDeleting: true,
        allowResourceUpdating: true,
        allowTaskResourceUpdating: true
      },
      validation: {
        validateDependencies: false,
        autoUpdateParentTasks: false
      },
      toolbar: null,
      contextMenu: {
        enabled: true,
        items: undefined
      },
      taskTooltipContentTemplate: null,
      taskProgressTooltipContentTemplate: null,
      taskTimeTooltipContentTemplate: null,
      taskContentTemplate: null,
      rootValue: 0
    });
  }

  getTaskResources(key) {
    if (!isDefined(key)) {
      return null;
    }

    var coreData = this._ganttView._ganttViewCore.getTaskResources(key);

    return coreData.map(r => this._convertCoreToMappedData(GANTT_RESOURCES, r));
  }

  getVisibleTaskKeys() {
    return this._ganttView._ganttViewCore.getVisibleTaskKeys();
  }

  getVisibleDependencyKeys() {
    return this._ganttView._ganttViewCore.getVisibleDependencyKeys();
  }

  getVisibleResourceKeys() {
    return this._ganttView._ganttViewCore.getVisibleResourceKeys();
  }

  getVisibleResourceAssignmentKeys() {
    return this._ganttView._ganttViewCore.getVisibleResourceAssignmentKeys();
  }

  getTaskData(key) {
    if (!isDefined(key)) {
      return null;
    }

    var coreData = this._ganttView._ganttViewCore.getTaskData(key);

    var mappedData = this.getTaskDataByCoreData(coreData);
    return mappedData;
  }

  getTaskDataByCoreData(coreData) {
    var mappedData = coreData ? this._convertCoreToMappedData(GANTT_TASKS, coreData) : null;

    this._addCustomFieldsData(coreData.id, mappedData);

    return mappedData;
  }

  insertTask(data) {
    this._saveCustomFieldsDataToCache(GANTT_NEW_TASK_CACHE_KEY, data);

    this._ganttView._ganttViewCore.insertTask(this._convertMappedToCoreData(GANTT_TASKS, data));
  }

  deleteTask(key) {
    this._ganttView._ganttViewCore.deleteTask(key);
  }

  updateTask(key, data) {
    this._saveCustomFieldsDataToCache(key, data, true);

    this._ganttView._ganttViewCore.updateTask(key, this._convertMappedToCoreData(GANTT_TASKS, data));
  }

  getDependencyData(key) {
    if (!isDefined(key)) {
      return null;
    }

    var coreData = this._ganttView._ganttViewCore.getDependencyData(key);

    return coreData ? this._convertCoreToMappedData(GANTT_DEPENDENCIES, coreData) : null;
  }

  insertDependency(data) {
    this._ganttView._ganttViewCore.insertDependency(this._convertMappedToCoreData(GANTT_DEPENDENCIES, data));
  }

  deleteDependency(key) {
    this._ganttView._ganttViewCore.deleteDependency(key);
  }

  getResourceData(key) {
    var coreData = this._ganttView._ganttViewCore.getResourceData(key);

    return coreData ? this._convertCoreToMappedData(GANTT_RESOURCES, coreData) : null;
  }

  deleteResource(key) {
    this._ganttView._ganttViewCore.deleteResource(key);
  }

  insertResource(data, taskKeys) {
    this._ganttView._ganttViewCore.insertResource(this._convertMappedToCoreData(GANTT_RESOURCES, data), taskKeys);
  }

  getResourceAssignmentData(key) {
    var coreData = this._ganttView._ganttViewCore.getResourceAssignmentData(key);

    return coreData ? this._convertCoreToMappedData(GANTT_RESOURCE_ASSIGNMENTS, coreData) : null;
  }

  assignResourceToTask(resourceKey, taskKey) {
    this._ganttView._ganttViewCore.assignResourceToTask(resourceKey, taskKey);
  } // eslint-disable-next-line spellcheck/spell-checker


  unassignResourceFromTask(resourceKey, taskKey) {
    // eslint-disable-next-line spellcheck/spell-checker
    this._ganttView._ganttViewCore.unassignResourceFromTask(resourceKey, taskKey);
  }

  updateDimensions() {
    this._onAdjustControl();
  }

  scrollToDate(date) {
    this._ganttView._ganttViewCore.scrollToDate(date);
  }

  showResourceManagerDialog() {
    this._ganttView._ganttViewCore.showResourcesDialog();
  } // export


  exportToPdf(options) {
    var _fullOptions$docCreat, _window$jspdf$jsPDF, _window$jspdf, _fullOptions$format;

    this._exportHelper.reset();

    var fullOptions = extend({}, options);

    if (fullOptions.createDocumentMethod) {
      fullOptions.docCreateMethod = fullOptions.createDocumentMethod;
    }

    (_fullOptions$docCreat = fullOptions.docCreateMethod) !== null && _fullOptions$docCreat !== void 0 ? _fullOptions$docCreat : fullOptions.docCreateMethod = (_window$jspdf$jsPDF = (_window$jspdf = window['jspdf']) === null || _window$jspdf === void 0 ? void 0 : _window$jspdf['jsPDF']) !== null && _window$jspdf$jsPDF !== void 0 ? _window$jspdf$jsPDF : window['jsPDF'];
    (_fullOptions$format = fullOptions.format) !== null && _fullOptions$format !== void 0 ? _fullOptions$format : fullOptions.format = 'a4';
    return new Promise(resolve => {
      var _this$_ganttView5;

      var doc = (_this$_ganttView5 = this._ganttView) === null || _this$_ganttView5 === void 0 ? void 0 : _this$_ganttView5._ganttViewCore.exportToPdf(fullOptions);
      resolve(doc);
    });
  }

  _getExportHelper() {
    var _this$_exportHelper;

    (_this$_exportHelper = this._exportHelper) !== null && _this$_exportHelper !== void 0 ? _this$_exportHelper : this._exportHelper = new GanttExportHelper(this);
    return this._exportHelper;
  }

  _optionChanged(args) {
    switch (args.name) {
      case 'tasks':
        this._refreshDataSource(GANTT_TASKS);

        break;

      case 'dependencies':
        this._refreshDataSource(GANTT_DEPENDENCIES);

        break;

      case 'resources':
        this._refreshDataSource(GANTT_RESOURCES);

        break;

      case 'resourceAssignments':
        this._refreshDataSource(GANTT_RESOURCE_ASSIGNMENTS);

        break;

      case 'columns':
        this._setTreeListOption('columns', this._getTreeListColumns());

        break;

      case 'taskListWidth':
        this._setInnerElementsWidth();

        break;

      case 'showResources':
        this._setGanttViewOption('showResources', args.value);

        break;

      case 'taskTitlePosition':
        this._setGanttViewOption('taskTitlePosition', args.value);

        break;

      case 'firstDayOfWeek':
        this._setGanttViewOption('firstDayOfWeek', args.value);

        break;

      case 'selectedRowKey':
        this._selectTreeListRows(this._getArrayFromOneElement(args.value));

        break;

      case 'onSelectionChanged':
        this._createSelectionChangedAction();

        break;

      case 'onTaskClick':
        this._createTaskClickAction();

        break;

      case 'onTaskDblClick':
        this._createTaskDblClickAction();

        break;

      case 'onTaskInserting':
        this._createTaskInsertingAction();

        break;

      case 'onTaskInserted':
        this._createTaskInsertedAction();

        break;

      case 'onTaskDeleting':
        this._createTaskDeletingAction();

        break;

      case 'onTaskDeleted':
        this._createTaskDeletedAction();

        break;

      case 'onTaskUpdating':
        this._createTaskUpdatingAction();

        break;

      case 'onTaskUpdated':
        this._createTaskUpdatedAction();

        break;

      case 'onTaskMoving':
        this._createTaskMovingAction();

        break;

      case 'onTaskEditDialogShowing':
        this._createTaskEditDialogShowingAction();

        break;

      case 'onResourceManagerDialogShowing':
        this._createResourceManagerDialogShowingAction();

        break;

      case 'onDependencyInserting':
        this._createDependencyInsertingAction();

        break;

      case 'onDependencyInserted':
        this._createDependencyInsertedAction();

        break;

      case 'onDependencyDeleting':
        this._createDependencyDeletingAction();

        break;

      case 'onDependencyDeleted':
        this._createDependencyDeletedAction();

        break;

      case 'onResourceInserting':
        this._createResourceInsertingAction();

        break;

      case 'onResourceInserted':
        this._createResourceInsertedAction();

        break;

      case 'onResourceDeleting':
        this._createResourceDeletingAction();

        break;

      case 'onResourceDeleted':
        this._createResourceDeletedAction();

        break;

      case 'onResourceAssigning':
        this._createResourceAssigningAction();

        break;

      case 'onResourceAssigned':
        this._createResourceAssignedAction();

        break;

      case 'onResourceUnassigning':
        // eslint-disable-next-line spellcheck/spell-checker
        this._createResourceUnassigningAction();

        break;

      case 'onResourceUnassigned':
        // eslint-disable-next-line spellcheck/spell-checker
        this._createResourceUnassignedAction();

        break;

      case 'onCustomCommand':
        this._createCustomCommandAction();

        break;

      case 'onContextMenuPreparing':
        this._createContextMenuPreparingAction();

        break;

      case 'allowSelection':
        this._setTreeListOption('selection.mode', this._getSelectionMode(args.value));

        this._setGanttViewOption('allowSelection', args.value);

        break;

      case 'showRowLines':
        this._setTreeListOption('showRowLines', args.value);

        this._setGanttViewOption('showRowLines', args.value);

        break;

      case 'stripLines':
        this._setGanttViewOption('stripLines', args.value);

        break;

      case 'scaleType':
        this._setGanttViewOption('scaleType', args.value);

        break;

      case 'editing':
        this._setGanttViewOption('editing', this.option(args.name));

        break;

      case 'validation':
        this._setGanttViewOption('validation', this.option(args.name));

        break;

      case 'toolbar':
        this._updateToolbarContent();

        break;

      case 'contextMenu':
        this._updateContextMenu();

        break;

      case 'taskTooltipContentTemplate':
        this._setGanttViewOption('taskTooltipContentTemplate', this._getTaskTooltipContentTemplateFunc(args.value));

        break;

      case 'taskProgressTooltipContentTemplate':
        this._setGanttViewOption('taskProgressTooltipContentTemplate', this._getTaskProgressTooltipContentTemplateFunc(args.value));

        break;

      case 'taskTimeTooltipContentTemplate':
        this._setGanttViewOption('taskTimeTooltipContentTemplate', this._getTaskTimeTooltipContentTemplateFunc(args.value));

        break;

      case 'taskContentTemplate':
        this._setGanttViewOption('taskContentTemplate', this._getTaskContentTemplateFunc(args.value));

        break;

      case 'rootValue':
        this._setTreeListOption('rootValue', args.value);

        break;

      case 'width':
        super._optionChanged(args);

        this._updateGanttWidth();

        break;

      case 'height':
        super._optionChanged(args);

        this._setGanttHeight(this._$element.height());

        break;

      default:
        super._optionChanged(args);

    }
  }

}

registerComponent('dxGantt', Gantt);
export default Gantt;