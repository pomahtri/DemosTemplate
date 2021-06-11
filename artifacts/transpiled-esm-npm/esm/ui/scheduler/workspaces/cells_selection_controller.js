export class CellsSelectionController {
  getCellFromNextRowPosition(currentCellPosition, direction, edgeIndices) {
    var {
      cellIndex,
      rowIndex
    } = currentCellPosition;
    var deltaPosition = direction === 'next' ? 1 : -1;
    var nextRowIndex = rowIndex + deltaPosition;
    var validRowIndex = nextRowIndex >= 0 && nextRowIndex <= edgeIndices.lastRowIndex ? nextRowIndex : rowIndex;
    return {
      cellIndex,
      rowIndex: validRowIndex
    };
  }

  getCellFromNextColumnPosition(options) {
    var {
      currentCellPosition,
      direction,
      edgeIndices,
      isRTL,
      isGroupedByDate,
      groupCount,
      isMultiSelection
    } = options;
    var {
      cellIndex,
      rowIndex
    } = currentCellPosition;
    var {
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex
    } = edgeIndices;
    var step = isGroupedByDate && isMultiSelection ? groupCount : 1;
    var sign = isRTL ? -1 : 1;
    var deltaCellIndex = direction === 'next' ? sign * step : -1 * sign * step;
    var nextCellIndex = cellIndex + deltaCellIndex;
    var isValidCellIndex = nextCellIndex >= firstCellIndex && nextCellIndex <= lastCellIndex;

    if (isValidCellIndex) {
      return {
        cellIndex: nextCellIndex,
        rowIndex
      };
    }

    return this._processEdgeCell({
      nextCellIndex,
      rowIndex,
      cellIndex,
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex,
      step
    });
  }

  _processEdgeCell(options) {
    var {
      nextCellIndex,
      rowIndex,
      cellIndex,
      firstCellIndex,
      lastCellIndex,
      firstRowIndex,
      lastRowIndex,
      step
    } = options;
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
  }

}