/**
* DevExtreme (cjs/ui/scheduler/workspaces/cells_selection_controller.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.CellsSelectionController = void 0;

var CellsSelectionController = /*#__PURE__*/function () {
  function CellsSelectionController() {}

  var _proto = CellsSelectionController.prototype;

  _proto.getCellFromNextRowPosition = function getCellFromNextRowPosition(currentCellPosition, direction, edgeIndices) {
    var cellIndex = currentCellPosition.cellIndex,
        rowIndex = currentCellPosition.rowIndex;
    var deltaPosition = direction === 'next' ? 1 : -1;
    var nextRowIndex = rowIndex + deltaPosition;
    var validRowIndex = nextRowIndex >= 0 && nextRowIndex <= edgeIndices.lastRowIndex ? nextRowIndex : rowIndex;
    return {
      cellIndex: cellIndex,
      rowIndex: validRowIndex
    };
  };

  _proto.getCellFromNextColumnPosition = function getCellFromNextColumnPosition(options) {
    var currentCellPosition = options.currentCellPosition,
        direction = options.direction,
        edgeIndices = options.edgeIndices,
        isRTL = options.isRTL,
        isGroupedByDate = options.isGroupedByDate,
        groupCount = options.groupCount,
        isMultiSelection = options.isMultiSelection;
    var cellIndex = currentCellPosition.cellIndex,
        rowIndex = currentCellPosition.rowIndex;
    var firstCellIndex = edgeIndices.firstCellIndex,
        lastCellIndex = edgeIndices.lastCellIndex,
        firstRowIndex = edgeIndices.firstRowIndex,
        lastRowIndex = edgeIndices.lastRowIndex;
    var step = isGroupedByDate && isMultiSelection ? groupCount : 1;
    var sign = isRTL ? -1 : 1;
    var deltaCellIndex = direction === 'next' ? sign * step : -1 * sign * step;
    var nextCellIndex = cellIndex + deltaCellIndex;
    var isValidCellIndex = nextCellIndex >= firstCellIndex && nextCellIndex <= lastCellIndex;

    if (isValidCellIndex) {
      return {
        cellIndex: nextCellIndex,
        rowIndex: rowIndex
      };
    }

    return this._processEdgeCell({
      nextCellIndex: nextCellIndex,
      rowIndex: rowIndex,
      cellIndex: cellIndex,
      firstCellIndex: firstCellIndex,
      lastCellIndex: lastCellIndex,
      firstRowIndex: firstRowIndex,
      lastRowIndex: lastRowIndex,
      step: step
    });
  };

  _proto._processEdgeCell = function _processEdgeCell(options) {
    var nextCellIndex = options.nextCellIndex,
        rowIndex = options.rowIndex,
        cellIndex = options.cellIndex,
        firstCellIndex = options.firstCellIndex,
        lastCellIndex = options.lastCellIndex,
        firstRowIndex = options.firstRowIndex,
        lastRowIndex = options.lastRowIndex,
        step = options.step;
    var validCellIndex = nextCellIndex;
    var validRowIndex = rowIndex;
    var isLeftEdgeCell = nextCellIndex < firstCellIndex;
    var isRightEdgeCell = nextCellIndex > lastCellIndex;

    if (isLeftEdgeCell) {
      var cellIndexInNextRow = lastCellIndex - (step - cellIndex % step - 1);
      var nextRowIndex = rowIndex - 1;
      var isValidRowIndex = nextRowIndex >= firstRowIndex;
      validRowIndex = isValidRowIndex ? nextRowIndex : rowIndex;
      validCellIndex = isValidRowIndex ? cellIndexInNextRow : cellIndex;
    }

    if (isRightEdgeCell) {
      var _cellIndexInNextRow = firstCellIndex + cellIndex % step;

      var _nextRowIndex = rowIndex + 1;

      var _isValidRowIndex = _nextRowIndex <= lastRowIndex;

      validRowIndex = _isValidRowIndex ? _nextRowIndex : rowIndex;
      validCellIndex = _isValidRowIndex ? _cellIndexInNextRow : cellIndex;
    }

    return {
      cellIndex: validCellIndex,
      rowIndex: validRowIndex
    };
  };

  return CellsSelectionController;
}();

exports.CellsSelectionController = CellsSelectionController;
