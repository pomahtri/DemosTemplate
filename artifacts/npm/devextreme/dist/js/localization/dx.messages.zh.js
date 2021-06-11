/*!
* DevExtreme (dx.messages.zh.js)
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
        "zh": {
            "Yes": "是",
            "No": "否",
            "Cancel": "取消",
            "Clear": "清除",
            "Done": "完成",
            "Loading": "正在加载...",
            "Select": "选择...",
            "Search": "搜索",
            "Back": "返回",
            "OK": "确定",
            "dxCollectionWidget-noDataText": "没有要显示的数据",
            "dxDropDownEditor-selectLabel": "选择",
            "validation-required": "必需",
            "validation-required-formatted": "{0} 是必需的",
            "validation-numeric": "值必须是一个数字",
            "validation-numeric-formatted": "{0} 必须是一个数字",
            "validation-range": "值超出范围",
            "validation-range-formatted": "{0} 超出范围",
            "validation-stringLength": "该值的长度不正确",
            "validation-stringLength-formatted": "{0} 的长度不正确",
            "validation-custom": "值无效",
            "validation-custom-formatted": "{0} 值无效",
            "validation-async": "值无效",
            "validation-async-formatted": "{0} 值无效",
            "validation-compare": "值不匹配",
            "validation-compare-formatted": "{0} 不匹配",
            "validation-pattern": "值不符合该模式",
            "validation-pattern-formatted": "{0} 不匹配该模式",
            "validation-email": "电子邮件无效",
            "validation-email-formatted": "{0} 无效",
            "validation-mask": "值无效",
            "dxLookup-searchPlaceholder": "最小字符数: {0}",
            "dxList-pullingDownText": "下拉以刷新...",
            "dxList-pulledDownText": "放开以刷新...",
            "dxList-refreshingText": "刷新中...",
            "dxList-pageLoadingText": "正在加载...",
            "dxList-nextButtonText": "更多",
            "dxList-selectAll": "全选",
            "dxListEditDecorator-delete": "删除",
            "dxListEditDecorator-more": "更多",
            "dxScrollView-pullingDownText": "下拉以刷新...",
            "dxScrollView-pulledDownText": "放开以刷新...",
            "dxScrollView-refreshingText": "刷新中...",
            "dxScrollView-reachBottomText": "正在加载...",
            "dxDateBox-simulatedDataPickerTitleTime": "选择时间",
            "dxDateBox-simulatedDataPickerTitleDate": "选择日期",
            "dxDateBox-simulatedDataPickerTitleDateTime": "选择日期和时间",
            "dxDateBox-validation-datetime": "值必须是日期或时间",
            "dxFileUploader-selectFile": "选择文件",
            "dxFileUploader-dropFile": "或者把文件放在此处",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "上传",
            "dxFileUploader-uploaded": "已上传",
            "dxFileUploader-readyToUpload": "准备上传",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "上传失败",
            "dxFileUploader-invalidFileExtension": "文件类型错误",
            "dxFileUploader-invalidMaxFileSize": "文件过大",
            "dxFileUploader-invalidMinFileSize": "文件过小",
            "dxRangeSlider-ariaFrom": "从",
            "dxRangeSlider-ariaTill": "至",
            "dxSwitch-switchedOnText": "开",
            "dxSwitch-switchedOffText": "关",
            "dxForm-optionalMark": "可选",
            "dxForm-requiredMessage": "{0} 是必须的",
            "dxNumberBox-invalidValueMessage": "值必须是一个数字",
            "dxNumberBox-noDataText": "无数据",
            "dxDataGrid-columnChooserTitle": "列选择器",
            "dxDataGrid-columnChooserEmptyText": "在这里拖动一列隐藏它",
            "dxDataGrid-groupContinuesMessage": "下一页",
            "dxDataGrid-groupContinuedMessage": "上一页",
            "dxDataGrid-groupHeaderText": "通过该列分组",
            "dxDataGrid-ungroupHeaderText": "取消分组",
            "dxDataGrid-ungroupAllText": "取消所有分组",
            "dxDataGrid-editingEditRow": "编辑",
            "dxDataGrid-editingSaveRowChanges": "保存",
            "dxDataGrid-editingCancelRowChanges": "取消",
            "dxDataGrid-editingDeleteRow": "删除",
            "dxDataGrid-editingUndeleteRow": "取消删除",
            "dxDataGrid-editingConfirmDeleteMessage": "你确定要删除这条记录吗？",
            "dxDataGrid-validationCancelChanges": "取消更改",
            "dxDataGrid-groupPanelEmptyText": "拖动列标题至此以进行列分组",
            "dxDataGrid-noDataText": "无数据",
            "dxDataGrid-searchPanelPlaceholder": "搜索...",
            "dxDataGrid-filterRowShowAllText": "(全部)",
            "dxDataGrid-filterRowResetOperationText": "重置",
            "dxDataGrid-filterRowOperationEquals": "等于",
            "dxDataGrid-filterRowOperationNotEquals": "不等于",
            "dxDataGrid-filterRowOperationLess": "小于",
            "dxDataGrid-filterRowOperationLessOrEquals": "小于或等于",
            "dxDataGrid-filterRowOperationGreater": "大于",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "大于或等于",
            "dxDataGrid-filterRowOperationStartsWith": "以...开始",
            "dxDataGrid-filterRowOperationContains": "包含",
            "dxDataGrid-filterRowOperationNotContains": "不包含",
            "dxDataGrid-filterRowOperationEndsWith": "结束于",
            "dxDataGrid-filterRowOperationBetween": "之间",
            "dxDataGrid-filterRowOperationBetweenStartText": "开始",
            "dxDataGrid-filterRowOperationBetweenEndText": "结束",
            "dxDataGrid-applyFilterText": "应用过滤器",
            "dxDataGrid-trueText": "真",
            "dxDataGrid-falseText": "假",
            "dxDataGrid-sortingAscendingText": "升序排序",
            "dxDataGrid-sortingDescendingText": "降序排序",
            "dxDataGrid-sortingClearText": "清除排序",
            "dxDataGrid-editingSaveAllChanges": "保存修改",
            "dxDataGrid-editingCancelAllChanges": "放弃修改",
            "dxDataGrid-editingAddRow": "添加一行",
            "dxDataGrid-summaryMin": "最小值: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} 的最小值为 {0}",
            "dxDataGrid-summaryMax": "最大值: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} 的最大值为 {0}",
            "dxDataGrid-summaryAvg": "平均值: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} 的平均值为 {0}",
            "dxDataGrid-summarySum": "总和: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} 的总和为 {0}",
            "dxDataGrid-summaryCount": "计数: {0}",
            "dxDataGrid-columnFixingFix": "固定",
            "dxDataGrid-columnFixingUnfix": "不固定",
            "dxDataGrid-columnFixingLeftPosition": "向左",
            "dxDataGrid-columnFixingRightPosition": "向右",
            "dxDataGrid-exportTo": "导出",
            "dxDataGrid-exportToExcel": "导出Excel文件",
            "dxDataGrid-exporting": "导出...",
            "dxDataGrid-excelFormat": "Excel文件",
            "dxDataGrid-selectedRows": "已选行",
            "dxDataGrid-exportSelectedRows": "导出已选行",
            "dxDataGrid-exportAll": "导出所有数据",
            "dxDataGrid-headerFilterEmptyValue": "(空白)",
            "dxDataGrid-headerFilterOK": "好",
            "dxDataGrid-headerFilterCancel": "取消",
            "dxDataGrid-ariaColumn": "列",
            "dxDataGrid-ariaValue": "值",
            "dxDataGrid-ariaFilterCell": "过滤单元",
            "dxDataGrid-ariaCollapse": "折叠",
            "dxDataGrid-ariaExpand": "展开",
            "dxDataGrid-ariaDataGrid": "数据网格",
            "dxDataGrid-ariaSearchInGrid": "在数据网格中搜索",
            "dxDataGrid-ariaSelectAll": "全选",
            "dxDataGrid-ariaSelectRow": "选择行",
            "dxDataGrid-filterBuilderPopupTitle": "过滤器生成器",
            "dxDataGrid-filterPanelCreateFilter": "创建过滤器",
            "dxDataGrid-filterPanelClearFilter": "清空",
            "dxDataGrid-filterPanelFilterEnabledHint": "启用该过滤器",
            "dxTreeList-ariaTreeList": "树状列表",
            "dxTreeList-editingAddRowToNode": "添加",
            "dxPager-infoText": "第{0}页,共{1}页 ({2} 个项目)",
            "dxPager-pagesCountText": "到",
            "dxPager-pageSizesAllText": "全部",
            "dxPivotGrid-grandTotal": "合计",
            "dxPivotGrid-total": "{0} 总计",
            "dxPivotGrid-fieldChooserTitle": "字段选择器",
            "dxPivotGrid-showFieldChooser": "显示字段选择器",
            "dxPivotGrid-expandAll": "全部展开",
            "dxPivotGrid-collapseAll": "全部折叠",
            "dxPivotGrid-sortColumnBySummary": "按 \"{0}\" 列排序",
            "dxPivotGrid-sortRowBySummary": "按 \"{0}\" 行排序",
            "dxPivotGrid-removeAllSorting": "清除所有排序",
            "dxPivotGrid-dataNotAvailable": "不适用",
            "dxPivotGrid-rowFields": "行字段",
            "dxPivotGrid-columnFields": "列字段",
            "dxPivotGrid-dataFields": "数据字段",
            "dxPivotGrid-filterFields": "过滤字段",
            "dxPivotGrid-allFields": "所有字段",
            "dxPivotGrid-columnFieldArea": "将列拖动到此处",
            "dxPivotGrid-dataFieldArea": "将数据拖动到此处",
            "dxPivotGrid-rowFieldArea": "将行字段拖到到此次",
            "dxPivotGrid-filterFieldArea": "拖动筛选字段到此处",
            "dxScheduler-editorLabelTitle": "标题",
            "dxScheduler-editorLabelStartDate": "开始日期",
            "dxScheduler-editorLabelEndDate": "结束日期",
            "dxScheduler-editorLabelDescription": "描述",
            "dxScheduler-editorLabelRecurrence": "重复",
            "dxScheduler-openAppointment": "打开日程",
            "dxScheduler-recurrenceNever": "永不",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "日常",
            "dxScheduler-recurrenceWeekly": "每周",
            "dxScheduler-recurrenceMonthly": "每月",
            "dxScheduler-recurrenceYearly": "每年",
            "dxScheduler-recurrenceRepeatEvery": "所有",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "停止重复",
            "dxScheduler-recurrenceAfter": "之后",
            "dxScheduler-recurrenceOn": "在",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "日",
            "dxScheduler-recurrenceRepeatWeekly": "周",
            "dxScheduler-recurrenceRepeatMonthly": "月",
            "dxScheduler-recurrenceRepeatYearly": "年",
            "dxScheduler-switcherDay": "日",
            "dxScheduler-switcherWeek": "周",
            "dxScheduler-switcherWorkWeek": "工作周",
            "dxScheduler-switcherMonth": "月",
            "dxScheduler-switcherAgenda": "议程",
            "dxScheduler-switcherTimelineDay": "时间轴日",
            "dxScheduler-switcherTimelineWeek": "时间轴周",
            "dxScheduler-switcherTimelineWorkWeek": "时间轴工作周",
            "dxScheduler-switcherTimelineMonth": "时间轴月",
            "dxScheduler-recurrenceRepeatOnDate": "于日期",
            "dxScheduler-recurrenceRepeatCount": "事件",
            "dxScheduler-allDay": "全天",
            "dxScheduler-confirmRecurrenceEditMessage": "你想只修改该日程还是想修改整个系列的日程?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "你想只删除这个日程还是想删除整个系列的日程?",
            "dxScheduler-confirmRecurrenceEditSeries": "修改该系列的日程",
            "dxScheduler-confirmRecurrenceDeleteSeries": "删除该系列的日程",
            "dxScheduler-confirmRecurrenceEditOccurrence": "修改日程",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "删除日程",
            "dxScheduler-noTimezoneTitle": "没有时区",
            "dxScheduler-moreAppointments": "{0} 更多",
            "dxCalendar-todayButtonText": "今天",
            "dxCalendar-ariaWidgetName": "日历",
            "dxColorView-ariaRed": "红色",
            "dxColorView-ariaGreen": "绿色",
            "dxColorView-ariaBlue": "蓝色",
            "dxColorView-ariaAlpha": "透明度",
            "dxColorView-ariaHex": "色标",
            "dxTagBox-selected": "{0} 已选择",
            "dxTagBox-allSelected": "已全选 ({0})",
            "dxTagBox-moreSelected": "{0} 更多",
            "vizExport-printingButtonText": "打印",
            "vizExport-titleMenuText": "导出中/打印中",
            "vizExport-exportButtonText": "{0} 文件",
            "dxFilterBuilder-and": "与",
            "dxFilterBuilder-or": "或",
            "dxFilterBuilder-notAnd": "与非",
            "dxFilterBuilder-notOr": "或非",
            "dxFilterBuilder-addCondition": "添加条件",
            "dxFilterBuilder-addGroup": "添加组",
            "dxFilterBuilder-enterValueText": "<输入值>",
            "dxFilterBuilder-filterOperationEquals": "等于",
            "dxFilterBuilder-filterOperationNotEquals": "不等于",
            "dxFilterBuilder-filterOperationLess": "小于",
            "dxFilterBuilder-filterOperationLessOrEquals": "小于或等于",
            "dxFilterBuilder-filterOperationGreater": "大于",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "大于或等于",
            "dxFilterBuilder-filterOperationStartsWith": "开始于",
            "dxFilterBuilder-filterOperationContains": "包含",
            "dxFilterBuilder-filterOperationNotContains": "不包含",
            "dxFilterBuilder-filterOperationEndsWith": "结束于",
            "dxFilterBuilder-filterOperationIsBlank": "空",
            "dxFilterBuilder-filterOperationIsNotBlank": "不为空",
            "dxFilterBuilder-filterOperationBetween": "之间",
            "dxFilterBuilder-filterOperationAnyOf": "任何一个",
            "dxFilterBuilder-filterOperationNoneOf": "任何一个都不",
            "dxHtmlEditor-dialogColorCaption": "更改字体颜色",
            "dxHtmlEditor-dialogBackgroundCaption": "更改背景颜色",
            "dxHtmlEditor-dialogLinkCaption": "添加链接",
            "dxHtmlEditor-dialogLinkUrlField": "链接地址",
            "dxHtmlEditor-dialogLinkTextField": "链接文字",
            "dxHtmlEditor-dialogLinkTargetField": "在新窗口中打开",
            "dxHtmlEditor-dialogImageCaption": "添加图片",
            "dxHtmlEditor-dialogImageUrlField": "图片地址",
            "dxHtmlEditor-dialogImageAltField": "替代文字",
            "dxHtmlEditor-dialogImageWidthField": "宽 (px)",
            "dxHtmlEditor-dialogImageHeightField": "长 (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "标题",
            "dxHtmlEditor-normalText": "正文",
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
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
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
