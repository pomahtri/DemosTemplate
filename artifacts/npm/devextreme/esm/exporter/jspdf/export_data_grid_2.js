/**
* DevExtreme (esm/exporter/jspdf/export_data_grid_2.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { isDefined } from '../../core/utils/type';
import { PdfGrid } from './pdf_grid';

function exportDataGrid(doc, dataGrid, options) {
  if (!isDefined(options.topLeft)) {
    throw 'options.topLeft is required';
  }

  var dataProvider = dataGrid.getDataProvider();
  return new Promise(resolve => {
    dataProvider.ready().done(() => {
      var columns = dataProvider.getColumns();
      var pdfGrid = new PdfGrid(options.splitToTablesByColumns, options.columnWidths);
      pdfGrid.startNewTable(options.drawTableBorder, options.topLeft);
      var dataRowsCount = dataProvider.getRowsCount();

      for (var rowIndex = 0; rowIndex < dataRowsCount; rowIndex++) {
        var currentRow = [];

        for (var cellIndex = 0; cellIndex < columns.length; cellIndex++) {
          var cellData = dataProvider.getCellData(rowIndex, cellIndex, true);
          var pdfCell = {
            text: cellData.value
          };

          if (cellData.cellSourceData.rowType === 'header') {
            var cellMerging = dataProvider.getCellMerging(rowIndex, cellIndex);

            if (cellMerging && cellMerging.rowspan > 0) {
              pdfCell.rowSpan = cellMerging.rowspan;
            }

            if (cellMerging && cellMerging.colspan > 0) {
              pdfCell.colSpan = cellMerging.colspan;
            }
          }

          if (options.onCellExporting) {
            options.onCellExporting({
              gridCell: {
                value: cellData.value
              },
              pdfCell
            });
          }

          currentRow.push(pdfCell);
        }

        var rowHeight = null; // TODO: Default Value

        if (options.onRowExporting) {
          var args = {
            drawNewTableFromThisRow: {},
            rowCells: currentRow
          };
          options.onRowExporting(args);
          var {
            startNewTable,
            addPage,
            tableTopLeft,
            splitToTablesByColumns
          } = args.drawNewTableFromThisRow;

          if (startNewTable === true) {
            pdfGrid.startNewTable(options.drawTableBorder, tableTopLeft, addPage === true, splitToTablesByColumns);
          }

          if (isDefined(args.rowHeight)) {
            rowHeight = args.rowHeight;
          }
        }

        pdfGrid.addRow(currentRow, rowHeight);
      }

      pdfGrid.mergeCellsBySpanAttributes();
      pdfGrid.drawTo(doc);
      resolve();
    });
  });
}

export { exportDataGrid };
