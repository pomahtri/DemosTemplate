/**
* DevExtreme (cjs/ui/data_grid/ui.data_grid.columns_resizing_reordering.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.TrackerView = exports.ColumnsResizerViewController = exports.TablePositionViewController = exports.ColumnsSeparatorView = exports.DraggingHeaderViewController = exports.DraggingHeaderView = void 0;

var _uiData_grid = _interopRequireDefault(require("./ui.data_grid.core"));

var _uiGrid_core = require("../grid_core/ui.grid_core.columns_resizing_reordering");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DraggingHeaderView = _uiGrid_core.columnsResizingReorderingModule.views.draggingHeaderView;
exports.DraggingHeaderView = DraggingHeaderView;
var DraggingHeaderViewController = _uiGrid_core.columnsResizingReorderingModule.controllers.draggingHeader;
exports.DraggingHeaderViewController = DraggingHeaderViewController;
var ColumnsSeparatorView = _uiGrid_core.columnsResizingReorderingModule.views.columnsSeparatorView;
exports.ColumnsSeparatorView = ColumnsSeparatorView;
var TablePositionViewController = _uiGrid_core.columnsResizingReorderingModule.controllers.tablePosition;
exports.TablePositionViewController = TablePositionViewController;
var ColumnsResizerViewController = _uiGrid_core.columnsResizingReorderingModule.controllers.columnsResizer;
exports.ColumnsResizerViewController = ColumnsResizerViewController;
var TrackerView = _uiGrid_core.columnsResizingReorderingModule.views.trackerView;
exports.TrackerView = TrackerView;

_uiData_grid.default.registerModule('columnsResizingReordering', _uiGrid_core.columnsResizingReorderingModule);
