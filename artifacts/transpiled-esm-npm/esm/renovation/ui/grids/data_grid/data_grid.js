import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["onOptionChanged"],
    _excluded2 = ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "className", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columnWidth", "columns", "commonColumnSettings", "customizeColumns", "customizeExportData", "dataSource", "dateSerializationFormat", "defaultFilterValue", "defaultFocusedColumnIndex", "defaultFocusedRowIndex", "defaultFocusedRowKey", "defaultSelectedRowKeys", "defaultSelectionFilter", "disabled", "editing", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "filterValueChange", "focusStateEnabled", "focusedColumnIndex", "focusedColumnIndexChange", "focusedRowEnabled", "focusedRowIndex", "focusedRowIndexChange", "focusedRowKey", "focusedRowKeyChange", "groupPanel", "grouping", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyExpr", "keyboardNavigation", "loadPanel", "loadingTimeout", "masterDetail", "noDataText", "onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onClick", "onContextMenuPreparing", "onDataErrorOccurred", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExported", "onExporting", "onFileSaving", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitNewRow", "onKeyDown", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSelectionChanged", "onToolbarPreparing", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selectedRowKeysChange", "selection", "selectionFilter", "selectionFilterChange", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "tabIndex", "twoWayBindingEnabled", "useKeyboard", "visible", "width", "wordWrapEnabled"];
import { createComponentVNode } from "inferno";
import { InfernoEffect, InfernoWrapperComponent } from "@devextreme/vdom";
import { DataGridProps } from "./common/data_grid_props";
import "../../../../ui/data_grid/ui.data_grid";
import { Widget } from "../../common/widget";
import { DataGridComponent } from "./datagrid_component";
import { DataGridViews } from "./data_grid_views";
import { getUpdatedOptions } from "./utils/get_updated_options";
var aria = {
  role: "presentation"
};
var rowSelector = ".dx-row";

function normalizeProps(props) {
  var result = {};
  Object.keys(props).forEach(key => {
    if (props[key] !== undefined) {
      result[key] = props[key];
    }
  });
  return result;
}

export var viewFunction = _ref => {
  var {
    instance,
    onDimensionChanged,
    onHoverEnd,
    onHoverStart,
    props: {
      accessKey,
      activeStateEnabled,
      disabled,
      focusStateEnabled,
      height,
      hint,
      hoverStateEnabled,
      rtlEnabled,
      showBorders,
      tabIndex,
      visible,
      width
    },
    restAttributes,
    widgetElementRef
  } = _ref;
  return normalizeProps(createComponentVNode(2, Widget, _extends({
    "rootElementRef": widgetElementRef,
    "accessKey": accessKey,
    "activeStateEnabled": activeStateEnabled,
    "activeStateUnit": rowSelector,
    "aria": aria,
    "disabled": disabled,
    "focusStateEnabled": focusStateEnabled,
    "height": height,
    "hint": hint,
    "hoverStateEnabled": hoverStateEnabled,
    "rtlEnabled": rtlEnabled,
    "tabIndex": tabIndex,
    "visible": visible,
    "width": width,
    "onHoverStart": onHoverStart,
    "onHoverEnd": onHoverEnd,
    "onDimensionChanged": onDimensionChanged
  }, restAttributes, {
    children: createComponentVNode(2, DataGridViews, {
      "instance": instance,
      "showBorders": showBorders
    })
  })));
};
import { createReRenderEffect } from "@devextreme/vdom";
import { createRef as infernoCreateRef } from "inferno";

var getTemplate = TemplateProp => TemplateProp && (TemplateProp.defaultProps ? props => normalizeProps(createComponentVNode(2, TemplateProp, _extends({}, props))) : TemplateProp);

export class DataGrid extends InfernoWrapperComponent {
  constructor(props) {
    super(props);
    this.widgetElementRef = infernoCreateRef();
    this.isTwoWayPropUpdating = false;
    this.state = {
      instance: undefined,
      filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.props.defaultFilterValue,
      focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.props.defaultFocusedColumnIndex,
      focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.props.defaultFocusedRowIndex,
      focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.props.defaultFocusedRowKey,
      selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.props.defaultSelectedRowKeys,
      selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.props.defaultSelectionFilter
    };
    this.getComponentInstance = this.getComponentInstance.bind(this);
    this.beginCustomLoading = this.beginCustomLoading.bind(this);
    this.byKey = this.byKey.bind(this);
    this.cancelEditData = this.cancelEditData.bind(this);
    this.cellValue = this.cellValue.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.clearSorting = this.clearSorting.bind(this);
    this.closeEditCell = this.closeEditCell.bind(this);
    this.collapseAdaptiveDetailRow = this.collapseAdaptiveDetailRow.bind(this);
    this.columnCount = this.columnCount.bind(this);
    this.columnOption = this.columnOption.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.deselectAll = this.deselectAll.bind(this);
    this.deselectRows = this.deselectRows.bind(this);
    this.editCell = this.editCell.bind(this);
    this.editRow = this.editRow.bind(this);
    this.endCustomLoading = this.endCustomLoading.bind(this);
    this.expandAdaptiveDetailRow = this.expandAdaptiveDetailRow.bind(this);
    this.filter = this.filter.bind(this);
    this.focus = this.focus.bind(this);
    this.getCellElement = this.getCellElement.bind(this);
    this.getCombinedFilter = this.getCombinedFilter.bind(this);
    this.getDataSource = this.getDataSource.bind(this);
    this.getKeyByRowIndex = this.getKeyByRowIndex.bind(this);
    this.getRowElement = this.getRowElement.bind(this);
    this.getRowIndexByKey = this.getRowIndexByKey.bind(this);
    this.getScrollable = this.getScrollable.bind(this);
    this.getVisibleColumnIndex = this.getVisibleColumnIndex.bind(this);
    this.hasEditData = this.hasEditData.bind(this);
    this.hideColumnChooser = this.hideColumnChooser.bind(this);
    this.isAdaptiveDetailRowExpanded = this.isAdaptiveDetailRowExpanded.bind(this);
    this.isRowFocused = this.isRowFocused.bind(this);
    this.isRowSelected = this.isRowSelected.bind(this);
    this.keyOf = this.keyOf.bind(this);
    this.navigateToRow = this.navigateToRow.bind(this);
    this.pageCount = this.pageCount.bind(this);
    this.pageIndex = this.pageIndex.bind(this);
    this.pageSize = this.pageSize.bind(this);
    this.refresh = this.refresh.bind(this);
    this.repaintRows = this.repaintRows.bind(this);
    this.saveEditData = this.saveEditData.bind(this);
    this.searchByText = this.searchByText.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.selectRows = this.selectRows.bind(this);
    this.selectRowsByIndexes = this.selectRowsByIndexes.bind(this);
    this.showColumnChooser = this.showColumnChooser.bind(this);
    this.undeleteRow = this.undeleteRow.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.resize = this.resize.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.addRow = this.addRow.bind(this);
    this.clearGrouping = this.clearGrouping.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.collapseRow = this.collapseRow.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.expandRow = this.expandRow.bind(this);
    this.exportToExcel = this.exportToExcel.bind(this);
    this.getSelectedRowKeys = this.getSelectedRowKeys.bind(this);
    this.getSelectedRowsData = this.getSelectedRowsData.bind(this);
    this.getTotalSummaryValue = this.getTotalSummaryValue.bind(this);
    this.getVisibleColumns = this.getVisibleColumns.bind(this);
    this.getVisibleRows = this.getVisibleRows.bind(this);
    this.isRowExpanded = this.isRowExpanded.bind(this);
    this.totalCount = this.totalCount.bind(this);
    this.isScrollbarVisible = this.isScrollbarVisible.bind(this);
    this.getTopVisibleRowData = this.getTopVisibleRowData.bind(this);
    this.getScrollbarWidth = this.getScrollbarWidth.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.dispose = this.dispose.bind(this);
    this.setupInstance = this.setupInstance.bind(this);
    this.instanceOptionChangedHandler = this.instanceOptionChangedHandler.bind(this);
    this.callMethod = this.callMethod.bind(this);
    this.updateTwoWayValue = this.updateTwoWayValue.bind(this);
    this.onHoverStart = this.onHoverStart.bind(this);
    this.onHoverEnd = this.onHoverEnd.bind(this);
    this.onDimensionChanged = this.onDimensionChanged.bind(this);
  }

  createEffects() {
    return [new InfernoEffect(this.updateOptions, [this.state.instance, this.props, this.__state_filterValue, this.__state_focusedColumnIndex, this.__state_focusedRowIndex, this.__state_focusedRowKey, this.__state_selectedRowKeys, this.__state_selectionFilter]), new InfernoEffect(this.dispose, []), new InfernoEffect(this.setupInstance, []), createReRenderEffect()];
  }

  updateEffects() {
    var _this$_effects$;

    (_this$_effects$ = this._effects[0]) === null || _this$_effects$ === void 0 ? void 0 : _this$_effects$.update([this.state.instance, this.props, this.__state_filterValue, this.__state_focusedColumnIndex, this.__state_focusedRowIndex, this.__state_focusedRowKey, this.__state_selectedRowKeys, this.__state_selectionFilter]);
  }

  updateOptions() {
    if (this.state.instance && this.prevProps && !this.isTwoWayPropUpdating) {
      var updatedOptions = getUpdatedOptions(this.prevProps, _extends({}, this.props, {
        filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
        focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
        focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
        focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
        selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
        selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter
      }));
      this.state.instance.beginUpdate();
      updatedOptions.forEach(_ref2 => {
        var {
          path,
          previousValue,
          value
        } = _ref2;

        this.state.instance._options.silent(path, previousValue);

        this.state.instance.option(path, value);
      });
      this.prevProps = _extends({}, this.props, {
        filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
        focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
        focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
        focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
        selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
        selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter
      });
      this.state.instance.endUpdate();
    } else {
      this.prevProps = _extends({}, this.props, {
        filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
        focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
        focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
        focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
        selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
        selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter
      });
    }
  }

  dispose() {
    return () => {
      this.state.instance.dispose();
    };
  }

  setupInstance() {
    var _this$widgetElementRe;

    var element = (_this$widgetElementRe = this.widgetElementRef) === null || _this$widgetElementRe === void 0 ? void 0 : _this$widgetElementRe.current;

    var _this$props$filterVal = _extends({}, _extends({}, this.props, {
      filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
      focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
      focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
      focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
      selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
      selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter
    }), {
      onContentReady: this.restAttributes.onContentReady
    }),
        restProps = _objectWithoutPropertiesLoose(_this$props$filterVal, _excluded);

    var instance = new DataGridComponent(element, normalizeProps(restProps));
    instance.getController("resizing").updateSize(element);
    instance.on("optionChanged", this.instanceOptionChangedHandler.bind(this));
    this.setState(state => _extends({}, state, {
      instance: instance
    }));
  }

  instanceOptionChangedHandler(e) {
    try {
      this.isTwoWayPropUpdating = true;
      this.updateTwoWayValue(e);
    } finally {
      this.isTwoWayPropUpdating = false;
    }
  }

  callMethod(funcName, args) {
    var _this$state$instance;

    var normalizedArgs = [...args].filter(arg => arg !== undefined);
    return (_this$state$instance = this.state.instance) === null || _this$state$instance === void 0 ? void 0 : _this$state$instance[funcName](...normalizedArgs);
  }

  updateTwoWayValue(e) {
    var isValueCorrect = e.value === e.component.option(e.fullName);

    if (e.value !== e.previousValue && isValueCorrect) {
      if (e.name === "editing" && this.props.editing) {
        if (e.fullName === "editing.changes") {
          this.props.editing.changes = e.value;
        }

        if (e.fullName === "editing.editRowKey") {
          this.props.editing.editRowKey = e.value;
        }

        if (e.fullName === "editing.editColumnName") {
          this.props.editing.editColumnName = e.value;
        }
      }

      if (e.fullName === "searchPanel.text" && this.props.searchPanel) {
        this.props.searchPanel.text = e.value;
      }

      if (e.fullName === "focusedRowKey") {
        {
          var __newValue;

          this.setState(state => {
            __newValue = e.value;
            return {
              focusedRowKey: __newValue
            };
          });
          this.props.focusedRowKeyChange(__newValue);
        }
      }

      if (e.fullName === "focusedRowIndex") {
        {
          var _newValue;

          this.setState(state => {
            _newValue = e.value;
            return {
              focusedRowIndex: _newValue
            };
          });
          this.props.focusedRowIndexChange(_newValue);
        }
      }

      if (e.fullName === "focusedColumnIndex") {
        {
          var _newValue2;

          this.setState(state => {
            _newValue2 = e.value;
            return {
              focusedColumnIndex: _newValue2
            };
          });
          this.props.focusedColumnIndexChange(_newValue2);
        }
      }

      if (e.fullName === "filterValue") {
        {
          var _newValue3;

          this.setState(state => {
            _newValue3 = e.value;
            return {
              filterValue: _newValue3
            };
          });
          this.props.filterValueChange(_newValue3);
        }
      }

      if (e.fullName === "selectedRowKeys") {
        {
          var _newValue4;

          this.setState(state => {
            _newValue4 = e.value;
            return {
              selectedRowKeys: _newValue4
            };
          });
          this.props.selectedRowKeysChange(_newValue4);
        }
      }

      if (e.fullName === "selectionFilter") {
        {
          var _newValue5;

          this.setState(state => {
            _newValue5 = e.value;
            return {
              selectionFilter: _newValue5
            };
          });
          this.props.selectionFilterChange(_newValue5);
        }
      }
    }
  }

  onHoverStart(event) {
    event.currentTarget.classList.add("dx-state-hover");
  }

  onHoverEnd(event) {
    event.currentTarget.classList.remove("dx-state-hover");
  }

  onDimensionChanged() {
    var _this$state$instance2;

    (_this$state$instance2 = this.state.instance) === null || _this$state$instance2 === void 0 ? void 0 : _this$state$instance2.updateDimensions(true);
  }

  get restAttributes() {
    var _this$props$filterVal2 = _extends({}, this.props, {
      filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
      focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
      focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
      focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
      selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
      selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter
    }),
        restProps = _objectWithoutPropertiesLoose(_this$props$filterVal2, _excluded2);

    return restProps;
  }

  getComponentInstance() {
    return this.state.instance;
  }

  beginCustomLoading(messageText) {
    var _this$state$instance3;

    return (_this$state$instance3 = this.state.instance) === null || _this$state$instance3 === void 0 ? void 0 : _this$state$instance3.beginCustomLoading(messageText);
  }

  byKey(key) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var _this$state$instance4;

      return (_this$state$instance4 = _this.state.instance) === null || _this$state$instance4 === void 0 ? void 0 : _this$state$instance4.byKey(key);
    })();
  }

  cancelEditData() {
    var _this$state$instance5;

    return (_this$state$instance5 = this.state.instance) === null || _this$state$instance5 === void 0 ? void 0 : _this$state$instance5.cancelEditData();
  }

  cellValue(rowIndex, dataField, value) {
    var _this$state$instance6;

    return (_this$state$instance6 = this.state.instance) === null || _this$state$instance6 === void 0 ? void 0 : _this$state$instance6.cellValue(rowIndex, dataField, value);
  }

  clearFilter(filterName) {
    var _this$state$instance7;

    return (_this$state$instance7 = this.state.instance) === null || _this$state$instance7 === void 0 ? void 0 : _this$state$instance7.clearFilter(filterName);
  }

  clearSelection() {
    var _this$state$instance8;

    return (_this$state$instance8 = this.state.instance) === null || _this$state$instance8 === void 0 ? void 0 : _this$state$instance8.clearSelection();
  }

  clearSorting() {
    var _this$state$instance9;

    return (_this$state$instance9 = this.state.instance) === null || _this$state$instance9 === void 0 ? void 0 : _this$state$instance9.clearSorting();
  }

  closeEditCell() {
    var _this$state$instance10;

    return (_this$state$instance10 = this.state.instance) === null || _this$state$instance10 === void 0 ? void 0 : _this$state$instance10.closeEditCell();
  }

  collapseAdaptiveDetailRow() {
    var _this$state$instance11;

    return (_this$state$instance11 = this.state.instance) === null || _this$state$instance11 === void 0 ? void 0 : _this$state$instance11.collapseAdaptiveDetailRow();
  }

  columnCount() {
    var _this$state$instance12;

    return (_this$state$instance12 = this.state.instance) === null || _this$state$instance12 === void 0 ? void 0 : _this$state$instance12.columnCount();
  }

  columnOption(_id, _optionName, _optionValue) {
    return this.callMethod("columnOption", arguments);
  }

  deleteColumn(id) {
    var _this$state$instance13;

    return (_this$state$instance13 = this.state.instance) === null || _this$state$instance13 === void 0 ? void 0 : _this$state$instance13.deleteColumn(id);
  }

  deleteRow(rowIndex) {
    var _this$state$instance14;

    return (_this$state$instance14 = this.state.instance) === null || _this$state$instance14 === void 0 ? void 0 : _this$state$instance14.deleteRow(rowIndex);
  }

  deselectAll() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var _this2$state$instance;

      return (_this2$state$instance = _this2.state.instance) === null || _this2$state$instance === void 0 ? void 0 : _this2$state$instance.deselectAll();
    })();
  }

  deselectRows(keys) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      var _this3$state$instance;

      return (_this3$state$instance = _this3.state.instance) === null || _this3$state$instance === void 0 ? void 0 : _this3$state$instance.deselectRows(keys);
    })();
  }

  editCell(rowIndex, dataFieldColumnIndex) {
    var _this$state$instance15;

    return (_this$state$instance15 = this.state.instance) === null || _this$state$instance15 === void 0 ? void 0 : _this$state$instance15.editCell(rowIndex, dataFieldColumnIndex);
  }

  editRow(rowIndex) {
    var _this$state$instance16;

    return (_this$state$instance16 = this.state.instance) === null || _this$state$instance16 === void 0 ? void 0 : _this$state$instance16.editRow(rowIndex);
  }

  endCustomLoading() {
    var _this$state$instance17;

    return (_this$state$instance17 = this.state.instance) === null || _this$state$instance17 === void 0 ? void 0 : _this$state$instance17.endCustomLoading();
  }

  expandAdaptiveDetailRow(key) {
    var _this$state$instance18;

    return (_this$state$instance18 = this.state.instance) === null || _this$state$instance18 === void 0 ? void 0 : _this$state$instance18.expandAdaptiveDetailRow(key);
  }

  filter(filterExpr) {
    var _this$state$instance19;

    return (_this$state$instance19 = this.state.instance) === null || _this$state$instance19 === void 0 ? void 0 : _this$state$instance19.filter(filterExpr);
  }

  focus(element) {
    var _this$state$instance20;

    return (_this$state$instance20 = this.state.instance) === null || _this$state$instance20 === void 0 ? void 0 : _this$state$instance20.focus(element);
  }

  getCellElement(rowIndex, dataField) {
    var _this$state$instance21;

    return (_this$state$instance21 = this.state.instance) === null || _this$state$instance21 === void 0 ? void 0 : _this$state$instance21.getCellElement(rowIndex, dataField);
  }

  getCombinedFilter(returnDataField) {
    var _this$state$instance22;

    return (_this$state$instance22 = this.state.instance) === null || _this$state$instance22 === void 0 ? void 0 : _this$state$instance22.getCombinedFilter(returnDataField);
  }

  getDataSource() {
    var _this$state$instance23;

    return (_this$state$instance23 = this.state.instance) === null || _this$state$instance23 === void 0 ? void 0 : _this$state$instance23.getDataSource();
  }

  getKeyByRowIndex(rowIndex) {
    var _this$state$instance24;

    return (_this$state$instance24 = this.state.instance) === null || _this$state$instance24 === void 0 ? void 0 : _this$state$instance24.getKeyByRowIndex(rowIndex);
  }

  getRowElement(rowIndex) {
    var _this$state$instance25;

    return (_this$state$instance25 = this.state.instance) === null || _this$state$instance25 === void 0 ? void 0 : _this$state$instance25.getRowElement(rowIndex);
  }

  getRowIndexByKey(key) {
    var _this$state$instance26;

    return (_this$state$instance26 = this.state.instance) === null || _this$state$instance26 === void 0 ? void 0 : _this$state$instance26.getRowIndexByKey(key);
  }

  getScrollable() {
    var _this$state$instance27;

    return (_this$state$instance27 = this.state.instance) === null || _this$state$instance27 === void 0 ? void 0 : _this$state$instance27.getScrollable();
  }

  getVisibleColumnIndex(id) {
    var _this$state$instance28;

    return (_this$state$instance28 = this.state.instance) === null || _this$state$instance28 === void 0 ? void 0 : _this$state$instance28.getVisibleColumnIndex(id);
  }

  hasEditData() {
    var _this$state$instance29;

    return (_this$state$instance29 = this.state.instance) === null || _this$state$instance29 === void 0 ? void 0 : _this$state$instance29.hasEditData();
  }

  hideColumnChooser() {
    var _this$state$instance30;

    return (_this$state$instance30 = this.state.instance) === null || _this$state$instance30 === void 0 ? void 0 : _this$state$instance30.hideColumnChooser();
  }

  isAdaptiveDetailRowExpanded(key) {
    var _this$state$instance31;

    return (_this$state$instance31 = this.state.instance) === null || _this$state$instance31 === void 0 ? void 0 : _this$state$instance31.isAdaptiveDetailRowExpanded(key);
  }

  isRowFocused(key) {
    var _this$state$instance32;

    return (_this$state$instance32 = this.state.instance) === null || _this$state$instance32 === void 0 ? void 0 : _this$state$instance32.isRowFocused(key);
  }

  isRowSelected(key) {
    var _this$state$instance33;

    return (_this$state$instance33 = this.state.instance) === null || _this$state$instance33 === void 0 ? void 0 : _this$state$instance33.isRowSelected(key);
  }

  keyOf(obj) {
    var _this$state$instance34;

    return (_this$state$instance34 = this.state.instance) === null || _this$state$instance34 === void 0 ? void 0 : _this$state$instance34.keyOf(obj);
  }

  navigateToRow(key) {
    var _this$state$instance35;

    return (_this$state$instance35 = this.state.instance) === null || _this$state$instance35 === void 0 ? void 0 : _this$state$instance35.navigateToRow(key);
  }

  pageCount() {
    var _this$state$instance36;

    return (_this$state$instance36 = this.state.instance) === null || _this$state$instance36 === void 0 ? void 0 : _this$state$instance36.pageCount();
  }

  pageIndex(newIndex) {
    var _this$state$instance37;

    return (_this$state$instance37 = this.state.instance) === null || _this$state$instance37 === void 0 ? void 0 : _this$state$instance37.pageIndex(newIndex);
  }

  pageSize(value) {
    var _this$state$instance38;

    return (_this$state$instance38 = this.state.instance) === null || _this$state$instance38 === void 0 ? void 0 : _this$state$instance38.pageSize(value);
  }

  refresh(changesOnly) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      var _this4$state$instance;

      return (_this4$state$instance = _this4.state.instance) === null || _this4$state$instance === void 0 ? void 0 : _this4$state$instance.refresh(changesOnly);
    })();
  }

  repaintRows(rowIndexes) {
    var _this$state$instance39;

    return (_this$state$instance39 = this.state.instance) === null || _this$state$instance39 === void 0 ? void 0 : _this$state$instance39.repaintRows(rowIndexes);
  }

  saveEditData() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      var _this5$state$instance;

      return (_this5$state$instance = _this5.state.instance) === null || _this5$state$instance === void 0 ? void 0 : _this5$state$instance.saveEditData();
    })();
  }

  searchByText(text) {
    var _this$state$instance40;

    return (_this$state$instance40 = this.state.instance) === null || _this$state$instance40 === void 0 ? void 0 : _this$state$instance40.searchByText(text);
  }

  selectAll() {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      var _this6$state$instance;

      return (_this6$state$instance = _this6.state.instance) === null || _this6$state$instance === void 0 ? void 0 : _this6$state$instance.selectAll();
    })();
  }

  selectRows(keys, preserve) {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      var _this7$state$instance;

      return (_this7$state$instance = _this7.state.instance) === null || _this7$state$instance === void 0 ? void 0 : _this7$state$instance.selectRows(keys, preserve);
    })();
  }

  selectRowsByIndexes(indexes) {
    var _this8 = this;

    return _asyncToGenerator(function* () {
      var _this8$state$instance;

      return (_this8$state$instance = _this8.state.instance) === null || _this8$state$instance === void 0 ? void 0 : _this8$state$instance.selectRowsByIndexes(indexes);
    })();
  }

  showColumnChooser() {
    var _this$state$instance41;

    return (_this$state$instance41 = this.state.instance) === null || _this$state$instance41 === void 0 ? void 0 : _this$state$instance41.showColumnChooser();
  }

  undeleteRow(rowIndex) {
    var _this$state$instance42;

    return (_this$state$instance42 = this.state.instance) === null || _this$state$instance42 === void 0 ? void 0 : _this$state$instance42.undeleteRow(rowIndex);
  }

  updateDimensions() {
    var _this$state$instance43;

    return (_this$state$instance43 = this.state.instance) === null || _this$state$instance43 === void 0 ? void 0 : _this$state$instance43.updateDimensions();
  }

  resize() {
    var _this$state$instance44;

    return (_this$state$instance44 = this.state.instance) === null || _this$state$instance44 === void 0 ? void 0 : _this$state$instance44.resize();
  }

  addColumn(columnOptions) {
    var _this$state$instance45;

    return (_this$state$instance45 = this.state.instance) === null || _this$state$instance45 === void 0 ? void 0 : _this$state$instance45.addColumn(columnOptions);
  }

  addRow() {
    var _this9 = this;

    return _asyncToGenerator(function* () {
      var _this9$state$instance;

      return (_this9$state$instance = _this9.state.instance) === null || _this9$state$instance === void 0 ? void 0 : _this9$state$instance.addRow();
    })();
  }

  clearGrouping() {
    var _this$state$instance46;

    return (_this$state$instance46 = this.state.instance) === null || _this$state$instance46 === void 0 ? void 0 : _this$state$instance46.clearGrouping();
  }

  collapseAll(groupIndex) {
    var _this$state$instance47;

    return (_this$state$instance47 = this.state.instance) === null || _this$state$instance47 === void 0 ? void 0 : _this$state$instance47.collapseAll(groupIndex);
  }

  collapseRow(key) {
    var _this10 = this;

    return _asyncToGenerator(function* () {
      var _this10$state$instanc;

      return (_this10$state$instanc = _this10.state.instance) === null || _this10$state$instanc === void 0 ? void 0 : _this10$state$instanc.collapseRow(key);
    })();
  }

  expandAll(groupIndex) {
    var _this$state$instance48;

    return (_this$state$instance48 = this.state.instance) === null || _this$state$instance48 === void 0 ? void 0 : _this$state$instance48.expandAll(groupIndex);
  }

  expandRow(key) {
    var _this11 = this;

    return _asyncToGenerator(function* () {
      var _this11$state$instanc;

      return (_this11$state$instanc = _this11.state.instance) === null || _this11$state$instanc === void 0 ? void 0 : _this11$state$instanc.expandRow(key);
    })();
  }

  exportToExcel(selectionOnly) {
    var _this$state$instance49;

    return (_this$state$instance49 = this.state.instance) === null || _this$state$instance49 === void 0 ? void 0 : _this$state$instance49.exportToExcel(selectionOnly);
  }

  getSelectedRowKeys() {
    var _this$state$instance50;

    return (_this$state$instance50 = this.state.instance) === null || _this$state$instance50 === void 0 ? void 0 : _this$state$instance50.getSelectedRowKeys();
  }

  getSelectedRowsData() {
    var _this$state$instance51;

    return (_this$state$instance51 = this.state.instance) === null || _this$state$instance51 === void 0 ? void 0 : _this$state$instance51.getSelectedRowsData();
  }

  getTotalSummaryValue(summaryItemName) {
    var _this$state$instance52;

    return (_this$state$instance52 = this.state.instance) === null || _this$state$instance52 === void 0 ? void 0 : _this$state$instance52.getTotalSummaryValue(summaryItemName);
  }

  getVisibleColumns(headerLevel) {
    var _this$state$instance53;

    return (_this$state$instance53 = this.state.instance) === null || _this$state$instance53 === void 0 ? void 0 : _this$state$instance53.getVisibleColumns(headerLevel);
  }

  getVisibleRows() {
    var _this$state$instance54;

    return (_this$state$instance54 = this.state.instance) === null || _this$state$instance54 === void 0 ? void 0 : _this$state$instance54.getVisibleRows();
  }

  isRowExpanded(key) {
    var _this$state$instance55;

    return (_this$state$instance55 = this.state.instance) === null || _this$state$instance55 === void 0 ? void 0 : _this$state$instance55.isRowExpanded(key);
  }

  totalCount() {
    var _this$state$instance56;

    return (_this$state$instance56 = this.state.instance) === null || _this$state$instance56 === void 0 ? void 0 : _this$state$instance56.totalCount();
  }

  isScrollbarVisible() {
    var _this$state$instance57;

    return (_this$state$instance57 = this.state.instance) === null || _this$state$instance57 === void 0 ? void 0 : _this$state$instance57.isScrollbarVisible();
  }

  getTopVisibleRowData() {
    var _this$state$instance58;

    return (_this$state$instance58 = this.state.instance) === null || _this$state$instance58 === void 0 ? void 0 : _this$state$instance58.getTopVisibleRowData();
  }

  getScrollbarWidth(isHorizontal) {
    var _this$state$instance59;

    return (_this$state$instance59 = this.state.instance) === null || _this$state$instance59 === void 0 ? void 0 : _this$state$instance59.getScrollbarWidth(isHorizontal);
  }

  render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props, {
        filterValue: this.props.filterValue !== undefined ? this.props.filterValue : this.state.filterValue,
        focusedColumnIndex: this.props.focusedColumnIndex !== undefined ? this.props.focusedColumnIndex : this.state.focusedColumnIndex,
        focusedRowIndex: this.props.focusedRowIndex !== undefined ? this.props.focusedRowIndex : this.state.focusedRowIndex,
        focusedRowKey: this.props.focusedRowKey !== undefined ? this.props.focusedRowKey : this.state.focusedRowKey,
        selectedRowKeys: this.props.selectedRowKeys !== undefined ? this.props.selectedRowKeys : this.state.selectedRowKeys,
        selectionFilter: this.props.selectionFilter !== undefined ? this.props.selectionFilter : this.state.selectionFilter,
        rowTemplate: getTemplate(props.rowTemplate)
      }),
      instance: this.state.instance,
      widgetElementRef: this.widgetElementRef,
      instanceOptionChangedHandler: this.instanceOptionChangedHandler,
      callMethod: this.callMethod,
      updateTwoWayValue: this.updateTwoWayValue,
      onHoverStart: this.onHoverStart,
      onHoverEnd: this.onHoverEnd,
      onDimensionChanged: this.onDimensionChanged,
      restAttributes: this.restAttributes
    });
  }

}
DataGrid.defaultProps = _extends({}, DataGridProps);