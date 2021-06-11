/*!
* DevExtreme (dx.messages.vi.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"));
        });
    } else if(typeof module === "object" && module.exports) {
        factory(require("devextreme/localization"));
    } else {
        factory(DevExpress.localization);
    }
}(this, function(localization) {
    localization.loadMessages({
        "vi": {
            "Yes": "Có",
            "No": "Không",
            "Cancel": "Hủy",
            "Clear": "Làm sạch",
            "Done": "Hoàn tất",
            "Loading": "Đang tải...",
            "Select": "Lựa chọn...",
            "Search": "Tìm kiếm",
            "Back": "Quay lại",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Không có dữ liệu để hiển thị",
            "dxDropDownEditor-selectLabel": "Lựa chọn",
            "validation-required": "Bắt buộc",
            "validation-required-formatted": "{0} là bắt buộc",
            "validation-numeric": "Giá trị phải là một số",
            "validation-numeric-formatted": "{0} phải là một số",
            "validation-range": "Giá trị ngoài khoảng",
            "validation-range-formatted": "{0} ngoài khoảng",
            "validation-stringLength": "Độ dài của giá trị không đúng",
            "validation-stringLength-formatted": "Độ dài của {0} không đúng",
            "validation-custom": "Giá trị không hợp lệ",
            "validation-custom-formatted": "{0} không hợp lệ",
            "validation-async": "Giá trị không hợp lệ",
            "validation-async-formatted": "{0} không hợp lệ",
            "validation-compare": "Các giá trị không khớp",
            "validation-compare-formatted": "{0} không khớp",
            "validation-pattern": "Giá trị không khớp với khuôn mẫu",
            "validation-pattern-formatted": "{0} không khớp với khuôn mẫu",
            "validation-email": "Email không hợp lệ",
            "validation-email-formatted": "{0} không hợp lệ",
            "validation-mask": "Giá trị không hợp lệ",
            "dxLookup-searchPlaceholder": "Số ký tự tối thiểu: {0}",
            "dxList-pullingDownText": "Kéo xuống để làm tươi...",
            "dxList-pulledDownText": "Nhả ra để làm tươi...",
            "dxList-refreshingText": "Đang làm tươi...",
            "dxList-pageLoadingText": "Đang tải...",
            "dxList-nextButtonText": "Thêm",
            "dxList-selectAll": "Chọn Tất cả",
            "dxListEditDecorator-delete": "Xóa",
            "dxListEditDecorator-more": "Thêm",
            "dxScrollView-pullingDownText": "Kéo xuống để làm tươi...",
            "dxScrollView-pulledDownText": "Nhả ra để làm tươi...",
            "dxScrollView-refreshingText": "Làm tươi...",
            "dxScrollView-reachBottomText": "Đang tải...",
            "dxDateBox-simulatedDataPickerTitleTime": "Lựa chọn thời gian",
            "dxDateBox-simulatedDataPickerTitleDate": "Lựa chọn ngày",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Chọn ngày và giờ",
            "dxDateBox-validation-datetime": "Giá trị phải là ngày hoặc giờ",
            "dxFileUploader-selectFile": "Chọn tập tin",
            "dxFileUploader-dropFile": "hoặc Thả tập tin vào đây",
            "dxFileUploader-bytes": "byte",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Upload",
            "dxFileUploader-uploaded": "Đã upload",
            "dxFileUploader-readyToUpload": "Sẵn sàng để upload",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Upload thất bại",
            "dxFileUploader-invalidFileExtension": "Kiểu tập tin không cho phép",
            "dxFileUploader-invalidMaxFileSize": "Tập tin quá lớn",
            "dxFileUploader-invalidMinFileSize": "Tập tin quá nhỏ",
            "dxRangeSlider-ariaFrom": "Từ",
            "dxRangeSlider-ariaTill": "Vẫn",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "tùy chọn",
            "dxForm-requiredMessage": "{0} là bắt buộc",
            "dxNumberBox-invalidValueMessage": "Giá trị phải là một số",
            "dxNumberBox-noDataText": "Không có dữ liệu",
            "dxDataGrid-columnChooserTitle": "Trình chọn cột",
            "dxDataGrid-columnChooserEmptyText": "Kéo một cột vào đây để ẩn nó đi",
            "dxDataGrid-groupContinuesMessage": "Tiếp tục ở trang tiếp theo",
            "dxDataGrid-groupContinuedMessage": "Được tiếp tục từ trang trước",
            "dxDataGrid-groupHeaderText": "Nhóm theo Cột này",
            "dxDataGrid-ungroupHeaderText": "Bỏ Nhóm",
            "dxDataGrid-ungroupAllText": "Bỏ Nhóm tất cả",
            "dxDataGrid-editingEditRow": "Sửa",
            "dxDataGrid-editingSaveRowChanges": "Lưu",
            "dxDataGrid-editingCancelRowChanges": "Hủy",
            "dxDataGrid-editingDeleteRow": "Xóa",
            "dxDataGrid-editingUndeleteRow": "Không xóa",
            "dxDataGrid-editingConfirmDeleteMessage": "Bạn có thật sự muốn xóa bản ghi này không?",
            "dxDataGrid-validationCancelChanges": "Hủy bỏ các thay đổi",
            "dxDataGrid-groupPanelEmptyText": "Kéo tiêu đề một cột vào đây để để nhóm cột đó",
            "dxDataGrid-noDataText": "Không có dữ liệu",
            "dxDataGrid-searchPanelPlaceholder": "Tìm kiếm...",
            "dxDataGrid-filterRowShowAllText": "(Tất cả)",
            "dxDataGrid-filterRowResetOperationText": "Làm lại",
            "dxDataGrid-filterRowOperationEquals": "Bằng",
            "dxDataGrid-filterRowOperationNotEquals": "Không bằng",
            "dxDataGrid-filterRowOperationLess": "Nhỏ hơn",
            "dxDataGrid-filterRowOperationLessOrEquals": "Nhỏ hơn hoặc bằng",
            "dxDataGrid-filterRowOperationGreater": "Lớn hơn",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Lớn hơn hoặc bằng",
            "dxDataGrid-filterRowOperationStartsWith": "Bắt đầu bởi",
            "dxDataGrid-filterRowOperationContains": "Chứa",
            "dxDataGrid-filterRowOperationNotContains": "Không chứa",
            "dxDataGrid-filterRowOperationEndsWith": "Kết thúc bởi",
            "dxDataGrid-filterRowOperationBetween": "Giữa",
            "dxDataGrid-filterRowOperationBetweenStartText": "Bắt đầu",
            "dxDataGrid-filterRowOperationBetweenEndText": "Kết thúc",
            "dxDataGrid-applyFilterText": "Áp dụng bộ lọc",
            "dxDataGrid-trueText": "đúng",
            "dxDataGrid-falseText": "sai",
            "dxDataGrid-sortingAscendingText": "Sắp xếp Tăng dần",
            "dxDataGrid-sortingDescendingText": "Sắp xếp Giảm dần",
            "dxDataGrid-sortingClearText": "Loại bỏ việc sắp xếp",
            "dxDataGrid-editingSaveAllChanges": "Lưu lại các thay đổi",
            "dxDataGrid-editingCancelAllChanges": "Loại bỏ các thay đổi",
            "dxDataGrid-editingAddRow": "Thêm một hàng",
            "dxDataGrid-summaryMin": "Nhỏ nhất: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Nhỏ nhất của {1} là {0}",
            "dxDataGrid-summaryMax": "Lớn nhất: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Lớn nhất của {1} là {0}",
            "dxDataGrid-summaryAvg": "Trung bình: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Trung bình của {1} là {0}",
            "dxDataGrid-summarySum": "Tổng: {0}",
            "dxDataGrid-summarySumOtherColumn": "Tổng của {1} là {0}",
            "dxDataGrid-summaryCount": "Số lượng: {0}",
            "dxDataGrid-columnFixingFix": "Cố định",
            "dxDataGrid-columnFixingUnfix": "Không cố định",
            "dxDataGrid-columnFixingLeftPosition": "Đến bên trái",
            "dxDataGrid-columnFixingRightPosition": "Đến bên phải",
            "dxDataGrid-exportTo": "Xuất ra",
            "dxDataGrid-exportToExcel": "Xuất ra Tập tin Excel",
            "dxDataGrid-exporting": "Xuất khẩu...",
            "dxDataGrid-excelFormat": "Tập tin Excel",
            "dxDataGrid-selectedRows": "Các hàng được chọn",
            "dxDataGrid-exportSelectedRows": "Xuất ra các hàng được chọn",
            "dxDataGrid-exportAll": "Xuất ra tất cả dữ liệu",
            "dxDataGrid-headerFilterEmptyValue": "(Trống)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Hủy",
            "dxDataGrid-ariaColumn": "Cột",
            "dxDataGrid-ariaValue": "Giá trị",
            "dxDataGrid-ariaFilterCell": "Lọc ô",
            "dxDataGrid-ariaCollapse": "Thu lại",
            "dxDataGrid-ariaExpand": "Mở ra",
            "dxDataGrid-ariaDataGrid": "Lưới dữ liệu",
            "dxDataGrid-ariaSearchInGrid": "Tìm kiếm trong lưới dữ liệu",
            "dxDataGrid-ariaSelectAll": "Chọn tất cả",
            "dxDataGrid-ariaSelectRow": "Chọn hàng",
            "dxDataGrid-filterBuilderPopupTitle": "Trình dựng Bộ lọc",
            "dxDataGrid-filterPanelCreateFilter": "Tạo Bộ lọc",
            "dxDataGrid-filterPanelClearFilter": "Loại bỏ",
            "dxDataGrid-filterPanelFilterEnabledHint": "Kích hoạt Bộ lọc",
            "dxTreeList-ariaTreeList": "Danh sách cây",
            "dxTreeList-editingAddRowToNode": "Thêm",
            "dxPager-infoText": "Trang {0} của {1} ({2} mục)",
            "dxPager-pagesCountText": "của",
            "dxPager-pageSizesAllText": "Tất cả",
            "dxPivotGrid-grandTotal": "Tổng tất cả",
            "dxPivotGrid-total": "{0} Tổng",
            "dxPivotGrid-fieldChooserTitle": "Trình lựa chọn Trường",
            "dxPivotGrid-showFieldChooser": "Hiển thị Trình lựa chọn Trường",
            "dxPivotGrid-expandAll": "Mở rộng tất cả",
            "dxPivotGrid-collapseAll": "Thu lại tất cả",
            "dxPivotGrid-sortColumnBySummary": "Sắp xếp \"{0}\" theo Cột này",
            "dxPivotGrid-sortRowBySummary": "Sắp xếp \"{0}\" theo Hàng này",
            "dxPivotGrid-removeAllSorting": "Loại bỏ tất cả việc sắp xếp",
            "dxPivotGrid-dataNotAvailable": "Không có sẵn",
            "dxPivotGrid-rowFields": "Các trường của hàng",
            "dxPivotGrid-columnFields": "Các trường của cột",
            "dxPivotGrid-dataFields": "Các trường Dữ liệu",
            "dxPivotGrid-filterFields": "Lọc các trường",
            "dxPivotGrid-allFields": "Tất cả các trường",
            "dxPivotGrid-columnFieldArea": "Thả các trường của cột vào đây",
            "dxPivotGrid-dataFieldArea": "Thả các trường dữ liệu vào đây",
            "dxPivotGrid-rowFieldArea": "Thả các trường của hàng vào đây",
            "dxPivotGrid-filterFieldArea": "Thả bộ lọc các trường vào đây",
            "dxScheduler-editorLabelTitle": "Chủ đề",
            "dxScheduler-editorLabelStartDate": "Ngày bắt đầu",
            "dxScheduler-editorLabelEndDate": "Ngày kết thúc",
            "dxScheduler-editorLabelDescription": "Mô tả",
            "dxScheduler-editorLabelRecurrence": "Lặp lại",
            "dxScheduler-openAppointment": "Mở lịch hẹn",
            "dxScheduler-recurrenceNever": "Không bao giờ",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Hàng ngày",
            "dxScheduler-recurrenceWeekly": "Hàng tuần",
            "dxScheduler-recurrenceMonthly": "Hàng tháng",
            "dxScheduler-recurrenceYearly": "Hàng năm",
            "dxScheduler-recurrenceRepeatEvery": "Lặp lại mãi",
            "dxScheduler-recurrenceRepeatOn": "Bật chế độ Lặp lại",
            "dxScheduler-recurrenceEnd": "Kết thúc việc lặp lại",
            "dxScheduler-recurrenceAfter": "Sau",
            "dxScheduler-recurrenceOn": "Vào",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "ngày",
            "dxScheduler-recurrenceRepeatWeekly": "tuần",
            "dxScheduler-recurrenceRepeatMonthly": "tháng",
            "dxScheduler-recurrenceRepeatYearly": "năm",
            "dxScheduler-switcherDay": "Ngày",
            "dxScheduler-switcherWeek": "Tuần",
            "dxScheduler-switcherWorkWeek": "Tuần Làm việc",
            "dxScheduler-switcherMonth": "Tháng",
            "dxScheduler-switcherAgenda": "Lịch trình",
            "dxScheduler-switcherTimelineDay": "Dòng thời gian Ngày",
            "dxScheduler-switcherTimelineWeek": "Dòng thời gian Tuần",
            "dxScheduler-switcherTimelineWorkWeek": "Dòng thời gian Tuần làm việc",
            "dxScheduler-switcherTimelineMonth": "Dòng thời gian Tháng",
            "dxScheduler-recurrenceRepeatOnDate": "vào ngày",
            "dxScheduler-recurrenceRepeatCount": "số lần diễn ra",
            "dxScheduler-allDay": "Cả ngày",
            "dxScheduler-confirmRecurrenceEditMessage": "Bạn có muốn sửa chỉ Lịch hẹn này hoặc Toàn bộ chuỗi?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Bạn có muốn xóa chỉ Lịch hẹn này hoặc Toàn bộ chuỗi?",
            "dxScheduler-confirmRecurrenceEditSeries": "Sửa chuỗi",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Xóa chuỗi",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Sửa Lịch hẹn",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Xóa Lịch hẹn",
            "dxScheduler-noTimezoneTitle": "Không có múi giờ",
            "dxScheduler-moreAppointments": "{0} thêm",
            "dxCalendar-todayButtonText": "Hôm nay",
            "dxCalendar-ariaWidgetName": "Lịch",
            "dxColorView-ariaRed": "Đỏ",
            "dxColorView-ariaGreen": "Xanh lá",
            "dxColorView-ariaBlue": "Xanh nước biển",
            "dxColorView-ariaAlpha": "Trong suốt",
            "dxColorView-ariaHex": "Mã màu",
            "dxTagBox-selected": "{0} đã được chọn",
            "dxTagBox-allSelected": "Tất cả đã được chọn ({0})",
            "dxTagBox-moreSelected": "{0} thêm",
            "vizExport-printingButtonText": "In",
            "vizExport-titleMenuText": "Xuất ra/In",
            "vizExport-exportButtonText": "{0} tập tin",
            "dxFilterBuilder-and": "Và",
            "dxFilterBuilder-or": "Hoặc",
            "dxFilterBuilder-notAnd": "Không Và",
            "dxFilterBuilder-notOr": "Không hoặc",
            "dxFilterBuilder-addCondition": "Thêm Điều kiện",
            "dxFilterBuilder-addGroup": "Thêm nhóm",
            "dxFilterBuilder-enterValueText": "<nhập giá trị>",
            "dxFilterBuilder-filterOperationEquals": "Bằng",
            "dxFilterBuilder-filterOperationNotEquals": "Không bằng",
            "dxFilterBuilder-filterOperationLess": "Nhỏ hơn",
            "dxFilterBuilder-filterOperationLessOrEquals": "Nhỏ hơn hoặc bằng",
            "dxFilterBuilder-filterOperationGreater": "Là lớn hơn",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Là lớn hơn hoặc bằng",
            "dxFilterBuilder-filterOperationStartsWith": "Bắt đầu với",
            "dxFilterBuilder-filterOperationContains": "Chứa",
            "dxFilterBuilder-filterOperationNotContains": "Không chứa",
            "dxFilterBuilder-filterOperationEndsWith": "Kết thúc bởi",
            "dxFilterBuilder-filterOperationIsBlank": "Là trống",
            "dxFilterBuilder-filterOperationIsNotBlank": "Là không trống",
            "dxFilterBuilder-filterOperationBetween": "Là giữa",
            "dxFilterBuilder-filterOperationAnyOf": "Là bất kỳ của",
            "dxFilterBuilder-filterOperationNoneOf": "Không không có của",
            "dxHtmlEditor-dialogColorCaption": "Đổi màu phông chữ",
            "dxHtmlEditor-dialogBackgroundCaption": "Đổi màu nền",
            "dxHtmlEditor-dialogLinkCaption": "Thêm Liên kết",
            "dxHtmlEditor-dialogLinkUrlField": "Đường dẫn",
            "dxHtmlEditor-dialogLinkTextField": "Văn bản",
            "dxHtmlEditor-dialogLinkTargetField": "Mở liên kết ở cửa sổ mới",
            "dxHtmlEditor-dialogImageCaption": "Thêm hình ảnh",
            "dxHtmlEditor-dialogImageUrlField": "Đường dẫn",
            "dxHtmlEditor-dialogImageAltField": "Văn bản thay thế",
            "dxHtmlEditor-dialogImageWidthField": "Rộng (px)",
            "dxHtmlEditor-dialogImageHeightField": "Cao (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Tiêu đề",
            "dxHtmlEditor-normalText": "Chữ bình thường",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "Thư mục không tên",
            "dxFileManager-rootDirectoryName": "Các tập tin",
            "dxFileManager-errorNoAccess": "Từ chối truy cập. Thao tác không thể hoàn tất.",
            "dxFileManager-errorDirectoryExistsFormat": "Thư mục '{0}' đã tồn tại.",
            "dxFileManager-errorFileExistsFormat": "Tập tin '{0}' đã tồn tại.",
            "dxFileManager-errorFileNotFoundFormat": "Tập tin '{0}' không tìm thấy",
            "dxFileManager-errorDirectoryNotFoundFormat": "Thư mục '{0}' không tìm thấy",
            "dxFileManager-errorWrongFileExtension": "Phần mở rộng của tập tin không cho phép",
            "dxFileManager-errorMaxFileSizeExceeded": "Kích thước của tập tin vượt quá kích thước tối đa cho phép",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "Lỗi không xác định.",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "Chung",
            "dxDiagram-categoryFlowchart": "Lưu đồ",
            "dxDiagram-categoryOrgChart": "Sơ đồ tổ chức",
            "dxDiagram-categoryContainers": "Trình chứa",
            "dxDiagram-categoryCustom": "Tùy chỉnh",
            "dxDiagram-commandExportToSvg": "Xuất ra SVG",
            "dxDiagram-commandExportToPng": "Xuất ra PNG",
            "dxDiagram-commandExportToJpg": "Xuất ra JPEG",
            "dxDiagram-commandUndo": "Hủy thao tác",
            "dxDiagram-commandRedo": "Làm lại thao tác",
            "dxDiagram-commandFontName": "Tên phông chữ",
            "dxDiagram-commandFontSize": "Kích thước phông chữ",
            "dxDiagram-commandBold": "Đậm",
            "dxDiagram-commandItalic": "Nghiêng",
            "dxDiagram-commandUnderline": "Gạch dưới",
            "dxDiagram-commandTextColor": "Màu chữ",
            "dxDiagram-commandLineColor": "Màu đường",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "Đổ màu",
            "dxDiagram-commandAlignLeft": "Canh trái",
            "dxDiagram-commandAlignCenter": "Canh giữa",
            "dxDiagram-commandAlignRight": "Canh phải",
            "dxDiagram-commandConnectorLineType": "Loại đường nối",
            "dxDiagram-commandConnectorLineStraight": "Thẳng",
            "dxDiagram-commandConnectorLineOrthogonal": "Trực giao",
            "dxDiagram-commandConnectorLineStart": "Bắt đầu đường nối",
            "dxDiagram-commandConnectorLineEnd": "Kết thúc đường nối",
            "dxDiagram-commandConnectorLineNone": "Không",
            "dxDiagram-commandConnectorLineArrow": "Mũi tên",
            "dxDiagram-commandFullscreen": "Toàn màn hình",
            "dxDiagram-commandUnits": "Đơn vị",
            "dxDiagram-commandPageSize": "Kích thước trang",
            "dxDiagram-commandPageOrientation": "Chiều của trang",
            "dxDiagram-commandPageOrientationLandscape": "Trang ngang",
            "dxDiagram-commandPageOrientationPortrait": "Trang dọc",
            "dxDiagram-commandPageColor": "Màu trang",
            "dxDiagram-commandShowGrid": "Hiển thị lưới",
            "dxDiagram-commandSnapToGrid": "Neo vào lưới",
            "dxDiagram-commandGridSize": "Kích thước lưới",
            "dxDiagram-commandZoomLevel": "Mức phóng đại",
            "dxDiagram-commandAutoZoom": "Phóng đại tự động",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "Kiểu xem đơn giản",
            "dxDiagram-commandCut": "Cắt",
            "dxDiagram-commandCopy": "Sao chép",
            "dxDiagram-commandPaste": "Dán",
            "dxDiagram-commandSelectAll": "Chọn tất cả",
            "dxDiagram-commandDelete": "Xóa",
            "dxDiagram-commandBringToFront": "Mang đến phía trước",
            "dxDiagram-commandSendToBack": "Mang đến phía sau",
            "dxDiagram-commandLock": "Khóa",
            "dxDiagram-commandUnlock": "Mở khóa",
            "dxDiagram-commandInsertShapeImage": "Chèn ảnh...",
            "dxDiagram-commandEditShapeImage": "Đổi ảnh...",
            "dxDiagram-commandDeleteShapeImage": "Xóa ảnh",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Hủy",
            "dxDiagram-dialogInsertShapeImageTitle": "Chèn ảnh",
            "dxDiagram-dialogEditShapeImageTitle": "Đổi ảnh",
            "dxDiagram-dialogEditShapeImageSelectButton": "Chọn ảnh",
            "dxDiagram-dialogEditShapeImageLabelText": "hoặc thả tập tin vào đây",
            "dxDiagram-uiExport": "Xuất ra",
            "dxDiagram-uiProperties": "Thuộc tính",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "Cây",
            "dxDiagram-uiLayoutLayered": "Được xếp tầng",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO"
        }
    });
}));
