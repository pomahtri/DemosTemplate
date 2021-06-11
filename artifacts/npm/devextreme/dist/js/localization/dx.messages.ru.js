/*!
* DevExtreme (dx.messages.ru.js)
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
        "ru": {
            "Yes": "Да",
            "No": "Нет",
            "Cancel": "Отмена",
            "Clear": "Очистить",
            "Done": "Готово",
            "Loading": "Загрузка...",
            "Select": "Выбрать...",
            "Search": "Поиск",
            "Back": "Назад",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Нет данных для отображения",
            "dxDropDownEditor-selectLabel": "Выбрать",
            "validation-required": "Поле необходимо заполнить",
            "validation-required-formatted": "Необходимо заполнить: {0}",
            "validation-numeric": "Значение должно быть числом",
            "validation-numeric-formatted": "Значение поля {0} должно быть числом",
            "validation-range": "Значение поля не входит в диапазон",
            "validation-range-formatted": "Значение поля {0} не входит в диапазон",
            "validation-stringLength": "Неверная длина значения в поле",
            "validation-stringLength-formatted": "Неверная длина значения в поле {0}",
            "validation-custom": "Недопустимое значение",
            "validation-custom-formatted": "Недопустимое значение: {0}",
            "validation-async": "Недопустимое значение",
            "validation-async-formatted": "Недопустимое значение: {0}",
            "validation-compare": "Значения полей не соответствуют друг другу.",
            "validation-compare-formatted": "Значение поля {0} не соответствует",
            "validation-pattern": "Значение не соответствует шаблону",
            "validation-pattern-formatted": "Значение поля {0} не соответствует шаблону",
            "validation-email": "Недопустимое значение email",
            "validation-email-formatted": "Недопустимое значениe {0}",
            "validation-mask": "Недопустимое значение",
            "dxLookup-searchPlaceholder": "Минимальное количество символов: {0}",
            "dxList-pullingDownText": "Потяните, чтобы обновить...",
            "dxList-pulledDownText": "Отпустите, чтобы обновить...",
            "dxList-refreshingText": "Обновление...",
            "dxList-pageLoadingText": "Загрузка...",
            "dxList-nextButtonText": "Далее",
            "dxList-selectAll": "Выбрать все",
            "dxListEditDecorator-delete": "Удалить",
            "dxListEditDecorator-more": "Еще",
            "dxScrollView-pullingDownText": "Потяните, чтобы обновить...",
            "dxScrollView-pulledDownText": "Отпустите, чтобы обновить...",
            "dxScrollView-refreshingText": "Обновление...",
            "dxScrollView-reachBottomText": "Загрузка...",
            "dxDateBox-simulatedDataPickerTitleTime": "Выберите время",
            "dxDateBox-simulatedDataPickerTitleDate": "Выберите дату",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Выберите дату и время",
            "dxDateBox-validation-datetime": "Значение должно быть датой/временем",
            "dxFileUploader-selectFile": "Выберите файл",
            "dxFileUploader-dropFile": "или Перетащите файл сюда",
            "dxFileUploader-bytes": "байт",
            "dxFileUploader-kb": "кБ",
            "dxFileUploader-Mb": "МБ",
            "dxFileUploader-Gb": "ГБ",
            "dxFileUploader-upload": "Загрузить",
            "dxFileUploader-uploaded": "Загружено",
            "dxFileUploader-readyToUpload": "Готово к загрузке",
            "dxFileUploader-uploadAbortedMessage": "Загрузка отменена",
            "dxFileUploader-uploadFailedMessage": "Загрузка не удалась",
            "dxFileUploader-invalidFileExtension": "Недопустимое расширение файла",
            "dxFileUploader-invalidMaxFileSize": "Файл слишком большой",
            "dxFileUploader-invalidMinFileSize": "Файл слишком маленький",
            "dxRangeSlider-ariaFrom": "От",
            "dxRangeSlider-ariaTill": "До",
            "dxSwitch-switchedOnText": "ВКЛ",
            "dxSwitch-switchedOffText": "ВЫКЛ",
            "dxForm-optionalMark": "необязательный",
            "dxForm-requiredMessage": " Поле {0} должно быть заполнено",
            "dxNumberBox-invalidValueMessage": "Значение должно быть числом",
            "dxNumberBox-noDataText": "Нет данных",
            "dxDataGrid-columnChooserTitle": "Выбор столбцов",
            "dxDataGrid-columnChooserEmptyText": "Перетащите столбец сюда, чтобы скрыть его",
            "dxDataGrid-groupContinuesMessage": "Продолжение на следующей странице",
            "dxDataGrid-groupContinuedMessage": "Продолжение с предыдущей страницы",
            "dxDataGrid-groupHeaderText": "Сгруппировать данные по этому столбцу",
            "dxDataGrid-ungroupHeaderText": "Разгруппировать данные по этому столбцу",
            "dxDataGrid-ungroupAllText": "Сбросить группирование",
            "dxDataGrid-editingEditRow": "Редактировать",
            "dxDataGrid-editingSaveRowChanges": "Сохранить",
            "dxDataGrid-editingCancelRowChanges": "Отменить",
            "dxDataGrid-editingDeleteRow": "Удалить",
            "dxDataGrid-editingUndeleteRow": "Восстановить",
            "dxDataGrid-editingConfirmDeleteMessage": "Вы уверены, что хотите удалить эту запись?",
            "dxDataGrid-validationCancelChanges": "Отменить изменения",
            "dxDataGrid-groupPanelEmptyText": "Перетащите столбец сюда, чтобы сгруппировать по нему",
            "dxDataGrid-noDataText": "Нет данных",
            "dxDataGrid-searchPanelPlaceholder": "Искать...",
            "dxDataGrid-filterRowShowAllText": "(Все)",
            "dxDataGrid-filterRowResetOperationText": "Сбросить",
            "dxDataGrid-filterRowOperationEquals": "Равно",
            "dxDataGrid-filterRowOperationNotEquals": "Не равно",
            "dxDataGrid-filterRowOperationLess": "Меньше",
            "dxDataGrid-filterRowOperationLessOrEquals": "Меньше или равно",
            "dxDataGrid-filterRowOperationGreater": "Больше",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Больше или равно",
            "dxDataGrid-filterRowOperationStartsWith": "Начинается с",
            "dxDataGrid-filterRowOperationContains": "Содержит",
            "dxDataGrid-filterRowOperationNotContains": "Не содержит",
            "dxDataGrid-filterRowOperationEndsWith": "Заканчивается на",
            "dxDataGrid-filterRowOperationBetween": "В диапазоне",
            "dxDataGrid-filterRowOperationBetweenStartText": "Начало",
            "dxDataGrid-filterRowOperationBetweenEndText": "Конец",
            "dxDataGrid-applyFilterText": "Применить фильтр",
            "dxDataGrid-trueText": "Да",
            "dxDataGrid-falseText": "Нет",
            "dxDataGrid-sortingAscendingText": "Сортировать по возрастанию",
            "dxDataGrid-sortingDescendingText": "Сортировать по убыванию",
            "dxDataGrid-sortingClearText": "Сбросить сортировку",
            "dxDataGrid-editingSaveAllChanges": "Сохранить изменения",
            "dxDataGrid-editingCancelAllChanges": "Отменить изменения",
            "dxDataGrid-editingAddRow": "Добавить строку",
            "dxDataGrid-summaryMin": "Мин: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Мин по {1} : {0}",
            "dxDataGrid-summaryMax": "Макс: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Макс по {1} : {0}",
            "dxDataGrid-summaryAvg": "Срзнач: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Срзнач по {1} : {0}",
            "dxDataGrid-summarySum": "Сумм: {0}",
            "dxDataGrid-summarySumOtherColumn": "Сумм по {1} : {0}",
            "dxDataGrid-summaryCount": "Кол-во: {0}",
            "dxDataGrid-columnFixingFix": "Закрепить",
            "dxDataGrid-columnFixingUnfix": "Открепить",
            "dxDataGrid-columnFixingLeftPosition": "Налево",
            "dxDataGrid-columnFixingRightPosition": "Направо",
            "dxDataGrid-exportTo": "Экспортировать",
            "dxDataGrid-exportToExcel": "Экспортировать в Excel файл",
            "dxDataGrid-exporting": "Экспорт...",
            "dxDataGrid-excelFormat": "Excel файл",
            "dxDataGrid-selectedRows": "Выбранные строки",
            "dxDataGrid-exportAll": "Экспортировать всё",
            "dxDataGrid-exportSelectedRows": "Экспортировать выбранные строки",
            "dxDataGrid-headerFilterEmptyValue": "(Пустое)",
            "dxDataGrid-headerFilterOK": "ОК",
            "dxDataGrid-headerFilterCancel": "Отменить",
            "dxDataGrid-ariaAdaptiveCollapse": "Скрыть дополнительные данные",
            "dxDataGrid-ariaAdaptiveExpand": "Показать дополнительные данные",
            "dxDataGrid-ariaColumn": "Столбец",
            "dxDataGrid-ariaValue": "Значение",
            "dxDataGrid-ariaFilterCell": "Фильтр",
            "dxDataGrid-ariaCollapse": "Свернуть",
            "dxDataGrid-ariaExpand": "Развернуть",
            "dxDataGrid-ariaDataGrid": "Таблица данных",
            "dxDataGrid-ariaSearchInGrid": "Искать в таблице данных",
            "dxDataGrid-ariaSelectAll": "Выбрать всё",
            "dxDataGrid-ariaSelectRow": "Выбрать строку",
            "dxDataGrid-ariaToolbar": "Панель инструментов таблицы данных",
            "dxDataGrid-filterBuilderPopupTitle": "Конструктор фильтра",
            "dxDataGrid-filterPanelCreateFilter": "Создать фильтр",
            "dxDataGrid-filterPanelClearFilter": "Очистить",
            "dxDataGrid-filterPanelFilterEnabledHint": "Активировать фильтр",
            "dxTreeList-ariaTreeList": "Иерархическая таблица данных",
            "dxTreeList-ariaSearchInGrid": "Искать в иерархической таблице данных",
            "dxTreeList-ariaToolbar": "Панель инструментов иерархической таблицы данных",
            "dxTreeList-editingAddRowToNode": "Добавить",
            "dxPager-infoText": "Страница {0} из {1} (Всего элементов: {2})",
            "dxPager-pagesCountText": "из",
            "dxPager-pageSizesAllText": "Все",
            "dxPivotGrid-grandTotal": "Итого",
            "dxPivotGrid-total": "{0} Всего",
            "dxPivotGrid-fieldChooserTitle": "Выбор полей",
            "dxPivotGrid-showFieldChooser": "Показать выбор полей",
            "dxPivotGrid-expandAll": "Раскрыть все",
            "dxPivotGrid-collapseAll": "Свернуть все",
            "dxPivotGrid-sortColumnBySummary": "Сортировать \"{0}\" по этой колонке",
            "dxPivotGrid-sortRowBySummary": "Сортировать \"{0}\" по этой строке",
            "dxPivotGrid-removeAllSorting": "Сбросить все сортировки",
            "dxPivotGrid-dataNotAvailable": "Н/Д",
            "dxPivotGrid-rowFields": "Поля строк",
            "dxPivotGrid-columnFields": "Поля столбцов",
            "dxPivotGrid-dataFields": "Поля данных",
            "dxPivotGrid-filterFields": "Поля фильтров",
            "dxPivotGrid-allFields": "Все поля",
            "dxPivotGrid-columnFieldArea": "Перетащите поля колонок cюда",
            "dxPivotGrid-dataFieldArea": "Перетащите поля данных cюда",
            "dxPivotGrid-rowFieldArea": "Перетащите поля строк cюда",
            "dxPivotGrid-filterFieldArea": "Перетащите поля фильтров cюда",
            "dxScheduler-editorLabelTitle": "Название",
            "dxScheduler-editorLabelStartDate": "Дата начала",
            "dxScheduler-editorLabelEndDate": "Дата завершения",
            "dxScheduler-editorLabelDescription": "Описание",
            "dxScheduler-editorLabelRecurrence": "Повторение",
            "dxScheduler-openAppointment": "Открыть задачу",
            "dxScheduler-recurrenceNever": "Никогда",
            "dxScheduler-recurrenceMinutely": "Ежеминутно",
            "dxScheduler-recurrenceHourly": "Ежечасно",
            "dxScheduler-recurrenceDaily": "Ежедневно",
            "dxScheduler-recurrenceWeekly": "Еженедельно",
            "dxScheduler-recurrenceMonthly": "Ежемесячно",
            "dxScheduler-recurrenceYearly": "Ежегодно",
            "dxScheduler-recurrenceRepeatEvery": "Интервал",
            "dxScheduler-recurrenceRepeatOn": "Повторять по",
            "dxScheduler-recurrenceEnd": "Завершить повторение",
            "dxScheduler-recurrenceAfter": "После",
            "dxScheduler-recurrenceOn": "Повторять до",
            "dxScheduler-recurrenceRepeatMinutely": "минут(минуты)",
            "dxScheduler-recurrenceRepeatHourly": "часов(часа)",
            "dxScheduler-recurrenceRepeatDaily": "дней(дня)",
            "dxScheduler-recurrenceRepeatWeekly": "недели(недель)",
            "dxScheduler-recurrenceRepeatMonthly": "месяца(месяцев)",
            "dxScheduler-recurrenceRepeatYearly": "года(лет)",
            "dxScheduler-recurrenceRepeatOnDate": "до даты",
            "dxScheduler-recurrenceRepeatCount": "повторений",
            "dxScheduler-switcherDay": "День",
            "dxScheduler-switcherWeek": "Неделя",
            "dxScheduler-switcherWorkWeek": "Рабочая неделя",
            "dxScheduler-switcherMonth": "Месяц",
            "dxScheduler-switcherTimelineDay": "Хронология дня",
            "dxScheduler-switcherTimelineWeek": "Хронология недели",
            "dxScheduler-switcherTimelineWorkWeek": "Хронология рабочей недели",
            "dxScheduler-switcherTimelineMonth": "Хронология месяца",
            "dxScheduler-switcherAgenda": "Расписание",
            "dxScheduler-allDay": "Весь день",
            "dxScheduler-confirmRecurrenceEditMessage": "Вы хотите отредактировать только это событие или всю серию?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Вы хотите удалить только это событие или всю серию?",
            "dxScheduler-confirmRecurrenceEditSeries": "Всю серию",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Всю серию",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Только это событие",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Только это событие",
            "dxScheduler-noTimezoneTitle": "Часовой пояс не выбран",
            "dxScheduler-moreAppointments": "и еще {0}",
            "dxCalendar-todayButtonText": "Сегодня",
            "dxCalendar-ariaWidgetName": "Календарь",
            "dxColorView-ariaRed": "Красный",
            "dxColorView-ariaGreen": "Зеленый",
            "dxColorView-ariaBlue": "Синий",
            "dxColorView-ariaAlpha": "Прозрачность",
            "dxColorView-ariaHex": "Код цвета",
            "dxTagBox-selected": "{0} выбрано",
            "dxTagBox-allSelected": "Выбрано все ({0})",
            "dxTagBox-moreSelected": "и еще {0}",
            "vizExport-printingButtonText": "Печать",
            "vizExport-titleMenuText": "Экспорт/Печать",
            "vizExport-exportButtonText": "{0} файл",
            "dxFilterBuilder-and": "И",
            "dxFilterBuilder-or": "Или",
            "dxFilterBuilder-notAnd": "Не И",
            "dxFilterBuilder-notOr": "Не Или",
            "dxFilterBuilder-addCondition": "Добавить условие",
            "dxFilterBuilder-addGroup": "Добавить группу",
            "dxFilterBuilder-enterValueText": "<введите значение>",
            "dxFilterBuilder-filterOperationEquals": "Равно",
            "dxFilterBuilder-filterOperationNotEquals": "Не равно",
            "dxFilterBuilder-filterOperationLess": "Меньше",
            "dxFilterBuilder-filterOperationLessOrEquals": "Меньше или равно",
            "dxFilterBuilder-filterOperationGreater": "Больше",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Больше или равно",
            "dxFilterBuilder-filterOperationStartsWith": "Начинается с",
            "dxFilterBuilder-filterOperationContains": "Содержит",
            "dxFilterBuilder-filterOperationNotContains": "Не содержит",
            "dxFilterBuilder-filterOperationEndsWith": "Заканчивается на",
            "dxFilterBuilder-filterOperationIsBlank": "Пусто",
            "dxFilterBuilder-filterOperationIsNotBlank": "Не пусто",
            "dxFilterBuilder-filterOperationBetween": "В диапазоне",
            "dxFilterBuilder-filterOperationAnyOf": "Любой из",
            "dxFilterBuilder-filterOperationNoneOf": "Ни один из",
            "dxHtmlEditor-dialogColorCaption": "Изменить цвет текста",
            "dxHtmlEditor-dialogBackgroundCaption": "Изменить цвет фона",
            "dxHtmlEditor-dialogLinkCaption": "Добавить ссылку",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Текст",
            "dxHtmlEditor-dialogLinkTargetField": "Открыть в новом окне",
            "dxHtmlEditor-dialogImageCaption": "Добавить изображение",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Альтернативный текст",
            "dxHtmlEditor-dialogImageWidthField": "Ширина (px)",
            "dxHtmlEditor-dialogImageHeightField": "Высота (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Строки",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Колонки",
            "dxHtmlEditor-dialogInsertTableCaption": "Вставить таблицу",
            "dxHtmlEditor-heading": "Заголовок",
            "dxHtmlEditor-normalText": "Обычный текст",
            "dxHtmlEditor-background": "Цвет фона",
            "dxHtmlEditor-bold": "Полужирный",
            "dxHtmlEditor-color": "Цвет текста",
            "dxHtmlEditor-font": "Шрифт",
            "dxHtmlEditor-italic": "Курсив",
            "dxHtmlEditor-link": "Добавить ссылку",
            "dxHtmlEditor-image": "Добавить изображение",
            "dxHtmlEditor-size": "Размер шрифта",
            "dxHtmlEditor-strike": "Зачеркнутый",
            "dxHtmlEditor-subscript": "Нижний индекс",
            "dxHtmlEditor-superscript": "Верхний индекс",
            "dxHtmlEditor-underline": "Подчеркнутый",
            "dxHtmlEditor-blockquote": "Цитата",
            "dxHtmlEditor-header": "Заголовок",
            "dxHtmlEditor-increaseIndent": "Увеличить отступ",
            "dxHtmlEditor-decreaseIndent": "Уменьшить отступ",
            "dxHtmlEditor-orderedList": "Нумерованный список",
            "dxHtmlEditor-bulletList": "Маркированный список",
            "dxHtmlEditor-alignLeft": "Выравнивание по левому краю",
            "dxHtmlEditor-alignCenter": "Выравнивание по центру",
            "dxHtmlEditor-alignRight": "Выравнивание по правому краю",
            "dxHtmlEditor-alignJustify": "Выравнивание по ширине",
            "dxHtmlEditor-codeBlock": "Блок кода",
            "dxHtmlEditor-variable": "Добавить переменную",
            "dxHtmlEditor-undo": "Отменить",
            "dxHtmlEditor-redo": "Повторить",
            "dxHtmlEditor-clear": "Очистить форматирование",
            "dxHtmlEditor-insertTable": "Вставить таблицу",
            "dxHtmlEditor-insertRowAbove": "Вставить строку сверху",
            "dxHtmlEditor-insertRowBelow": "Вставить строку снизу",
            "dxHtmlEditor-insertColumnLeft": "Вставить колонку слева",
            "dxHtmlEditor-insertColumnRight": "Вставить колонку справа",
            "dxHtmlEditor-deleteColumn": "Удалить колонку",
            "dxHtmlEditor-deleteRow": "Удалить строку",
            "dxHtmlEditor-deleteTable": "Удалить таблицу",
            "dxHtmlEditor-list": "Список",
            "dxHtmlEditor-ordered": "Нумерованный",
            "dxHtmlEditor-bullet": "Маркированный",
            "dxHtmlEditor-align": "Выравнивание",
            "dxHtmlEditor-center": "По центру",
            "dxHtmlEditor-left": "По левому краю",
            "dxHtmlEditor-right": "По правому краю",
            "dxHtmlEditor-indent": "Отступ",
            "dxHtmlEditor-justify": "По ширине",
            "dxFileManager-newDirectoryName": "Без названия",
            "dxFileManager-rootDirectoryName": "Файлы",
            "dxFileManager-errorNoAccess": "Доступ запрещён. Операция не может быть завершена.",
            "dxFileManager-errorDirectoryExistsFormat": "Каталог {0} уже существует.",
            "dxFileManager-errorFileExistsFormat": "Файл {0} уже существует.",
            "dxFileManager-errorFileNotFoundFormat": "Файл {0} не найден.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Каталог '{0}' не найден.",
            "dxFileManager-errorWrongFileExtension": "Неверное расширение файла.",
            "dxFileManager-errorMaxFileSizeExceeded": "Размер файла превышает допустимое значение.",
            "dxFileManager-errorInvalidSymbols": "Введённое имя содержит недопустимые символы.",
            "dxFileManager-errorDefault": "Неизвестная ошибка",
            "dxFileManager-errorDirectoryOpenFailed": "Не удалось открыть каталог",
            "dxFileManager-commandCreate": "Новая папка",
            "dxFileManager-commandRename": "Переименовать",
            "dxFileManager-commandMove": "Переместить в",
            "dxFileManager-commandCopy": "Копировать в",
            "dxFileManager-commandDelete": "Удалить",
            "dxFileManager-commandDownload": "Скачать",
            "dxFileManager-commandUpload": "Загрузить файлы",
            "dxFileManager-commandRefresh": "Обновить",
            "dxFileManager-commandThumbnails": "Режим эксизов",
            "dxFileManager-commandDetails": "Режим списка",
            "dxFileManager-commandClearSelection": "Очистить выделение",
            "dxFileManager-dialogButtonCancel": "Отмена",
            "dxFileManager-commandShowNavPane": "Переключить панель навигации",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Переместить в",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Переместить",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Копировать в",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Копировать",
            "dxFileManager-dialogRenameItemTitle": "Переименовать",
            "dxFileManager-dialogRenameItemButtonText": "Сохранить",
            "dxFileManager-dialogCreateDirectoryTitle": "Новая папка",
            "dxFileManager-dialogCreateDirectoryButtonText": "Создать",
            "dxFileManager-dialogDeleteItemTitle": "Удаление элемента",
            "dxFileManager-dialogDeleteItemButtonText": "Удалить",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Вы действительно хотите удалить {0}?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Вы действительно хотите удалить {0} элементов?",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Создаётся папка в {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Создана папка в {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Не удалось создать папку",
            "dxFileManager-editingCreateCommonErrorMessage": "Не удалось создать папку",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Переименовывается элемент в {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Переименован элемент в {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Не удалось переименовать элемент",
            "dxFileManager-editingRenameCommonErrorMessage": "Не удалось переименовать элемент",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Элемент удаляется из {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Удаление {0} элементов из {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Элемент удалён из {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{0} элементов удалено из {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Не удалось удалить элемент",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} элементов не были удалены",
            "dxFileManager-editingDeleteCommonErrorMessage": "Некоторые элементы не были удалены",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Элемент перемещается в {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Перемещение {0} элементов в {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Элемент перемещён в {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} элементов перемещено в {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Не удалось переместить элемент",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} элементов не были перемещены",
            "dxFileManager-editingMoveCommonErrorMessage": "Некоторые элементы не были перемещены",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Элемент копируется в {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Коипрование {0} элементов в {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Элемент скопирован в {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} элементов скопировано в {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Не удалось скопировать элемент",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} элементов не были скопированы",
            "dxFileManager-editingCopyCommonErrorMessage": "Некоторые элементы не были скопированы",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Элемент загружается в {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Загрузка {0} элементов в {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Элемент загружен в {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} элементов загружено в {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Не удалось загрузить элемент",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} элементов не были загружены",
            "dxFileManager-editingUploadCanceledMessage": "Отменено",
            "dxFileManager-listDetailsColumnCaptionName": "Название",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Дата изменения",
            "dxFileManager-listDetailsColumnCaptionFileSize": "Размер файла",
            "dxFileManager-listThumbnailsTooltipTextSize": "Размер",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Дата изменения",
            "dxFileManager-notificationProgressPanelTitle": "Прогресс",
            "dxFileManager-notificationProgressPanelEmptyListText": "Операции отсутствуют",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Отменено",
            "dxDiagram-categoryGeneral": "Общие",
            "dxDiagram-categoryFlowchart": "Блок-схема",
            "dxDiagram-categoryOrgChart": "Организационная схема",
            "dxDiagram-categoryContainers": "Контейнеры",
            "dxDiagram-categoryCustom": "Пользовательские",
            "dxDiagram-commandExportToSvg": "Экспорт в SVG",
            "dxDiagram-commandExportToPng": "Экспорт в PNG",
            "dxDiagram-commandExportToJpg": "Экспорт в JPEG",
            "dxDiagram-commandUndo": "Отменить",
            "dxDiagram-commandRedo": "Повторить",
            "dxDiagram-commandFontName": "Название шрифта",
            "dxDiagram-commandFontSize": "Размер шрифта",
            "dxDiagram-commandBold": "Полужирный",
            "dxDiagram-commandItalic": "Курсив",
            "dxDiagram-commandUnderline": "Подчеркнутый",
            "dxDiagram-commandTextColor": "Цвет текста",
            "dxDiagram-commandLineColor": "Цвет линии",
            "dxDiagram-commandLineWidth": "Ширина линии",
            "dxDiagram-commandLineStyle": "Стиль линии",
            "dxDiagram-commandLineStyleSolid": "Сплошная",
            "dxDiagram-commandLineStyleDotted": "Пунктирная",
            "dxDiagram-commandLineStyleDashed": "Штриховая",
            "dxDiagram-commandFillColor": "Цвет заливки",
            "dxDiagram-commandAlignLeft": "Выравнивание по левому краю",
            "dxDiagram-commandAlignCenter": "Выравнивание по центру",
            "dxDiagram-commandAlignRight": "Выравнивание по правому краю",
            "dxDiagram-commandConnectorLineType": "Тип соединителя",
            "dxDiagram-commandConnectorLineStraight": "Прямой",
            "dxDiagram-commandConnectorLineOrthogonal": "Ортогональный",
            "dxDiagram-commandConnectorLineStart": "Тип начала соединителя",
            "dxDiagram-commandConnectorLineEnd": "Тип конца соединителя",
            "dxDiagram-commandConnectorLineNone": "Нет",
            "dxDiagram-commandConnectorLineArrow": "Стрелка",
            "dxDiagram-commandFullscreen": "Полноэкранный режим",
            "dxDiagram-commandUnits": "Единицы измерения",
            "dxDiagram-commandPageSize": "Размер страницы",
            "dxDiagram-commandPageOrientation": "Ориентация страницы",
            "dxDiagram-commandPageOrientationLandscape": "Альбомная",
            "dxDiagram-commandPageOrientationPortrait": "Портретная",
            "dxDiagram-commandPageColor": "Цвет страницы",
            "dxDiagram-commandShowGrid": "Показывать сетку",
            "dxDiagram-commandSnapToGrid": "Привязка к сетке",
            "dxDiagram-commandGridSize": "Размер сетки",
            "dxDiagram-commandZoomLevel": "Маштаб",
            "dxDiagram-commandAutoZoom": "Автомаштаб",
            "dxDiagram-commandFitToContent": "Вместить по содержимому",
            "dxDiagram-commandFitToWidth": "Вместить по ширине",
            "dxDiagram-commandAutoZoomByContent": "Автомаштаб по содержимому",
            "dxDiagram-commandAutoZoomByWidth": "Автомаштаб по ширине",
            "dxDiagram-commandSimpleView": "Упрощенный вид",
            "dxDiagram-commandCut": "Вырезать",
            "dxDiagram-commandCopy": "Копировать",
            "dxDiagram-commandPaste": "Вставить",
            "dxDiagram-commandSelectAll": "Выделить всё",
            "dxDiagram-commandDelete": "Удалить",
            "dxDiagram-commandBringToFront": "На передний план",
            "dxDiagram-commandSendToBack": "На задний план",
            "dxDiagram-commandLock": "Заблокировать",
            "dxDiagram-commandUnlock": "Разблокировать",
            "dxDiagram-commandInsertShapeImage": "Добавить изображение...",
            "dxDiagram-commandEditShapeImage": "Изменить изображение...",
            "dxDiagram-commandDeleteShapeImage": "Удалить изображение",
            "dxDiagram-commandLayoutLeftToRight": "Слева направо",
            "dxDiagram-commandLayoutRightToLeft": "Справа налево",
            "dxDiagram-commandLayoutTopToBottom": "Сверху вниз",
            "dxDiagram-commandLayoutBottomToTop": "Снизу вверх",
            "dxDiagram-unitIn": "дюйм(а)",
            "dxDiagram-unitCm": "см",
            "dxDiagram-unitPx": "пиксель(я)",
            "dxDiagram-dialogButtonOK": "ОК",
            "dxDiagram-dialogButtonCancel": "Отмена",
            "dxDiagram-dialogInsertShapeImageTitle": "Добавить изображение",
            "dxDiagram-dialogEditShapeImageTitle": "Изменить изображение",
            "dxDiagram-dialogEditShapeImageSelectButton": "Выберите изображение",
            "dxDiagram-dialogEditShapeImageLabelText": "или перетащите файл сюда",
            "dxDiagram-uiExport": "Экспорт",
            "dxDiagram-uiProperties": "Свойства",
            "dxDiagram-uiSettings": "Настройки",
            "dxDiagram-uiShowToolbox": "Панель инструментов",
            "dxDiagram-uiSearch": "Поиск",
            "dxDiagram-uiStyle": "Стиль",
            "dxDiagram-uiLayout": "Компоновка",
            "dxDiagram-uiLayoutTree": "Древовидная",
            "dxDiagram-uiLayoutLayered": "Многоуровневая",
            "dxDiagram-uiDiagram": "Диаграмма",
            "dxDiagram-uiText": "Текст",
            "dxDiagram-uiObject": "Объект",
            "dxDiagram-uiConnector": "Соединитель",
            "dxDiagram-uiPage": "Страница",
            "dxDiagram-shapeText": "Текст",
            "dxDiagram-shapeRectangle": "Прямоугольник",
            "dxDiagram-shapeEllipse": "Эллипс",
            "dxDiagram-shapeCross": "Крест",
            "dxDiagram-shapeTriangle": "Треугольник",
            "dxDiagram-shapeDiamond": "Ромб",
            "dxDiagram-shapeHeart": "Сердце",
            "dxDiagram-shapePentagon": "Пятиугольник",
            "dxDiagram-shapeHexagon": "Шестиугольник",
            "dxDiagram-shapeOctagon": "Восьмиугольник",
            "dxDiagram-shapeStar": "Звезда",
            "dxDiagram-shapeArrowLeft": "Стрелка влево",
            "dxDiagram-shapeArrowUp": "Стрелка вверх",
            "dxDiagram-shapeArrowRight": "Стрелка вправо",
            "dxDiagram-shapeArrowDown": "Стрелка вниз",
            "dxDiagram-shapeArrowUpDown": "Стрелка вверх-вниз",
            "dxDiagram-shapeArrowLeftRight": "Стрелка влево-вправо",
            "dxDiagram-shapeProcess": "Процесс",
            "dxDiagram-shapeDecision": "Решение",
            "dxDiagram-shapeTerminator": "Терминатор",
            "dxDiagram-shapePredefinedProcess": "Предопределенный процесс",
            "dxDiagram-shapeDocument": "Документ",
            "dxDiagram-shapeMultipleDocuments": "Документы",
            "dxDiagram-shapeManualInput": "Ручной ввод",
            "dxDiagram-shapePreparation": "Подготовка",
            "dxDiagram-shapeData": "Данные",
            "dxDiagram-shapeDatabase": "База данных",
            "dxDiagram-shapeHardDisk": "Жесткий диск",
            "dxDiagram-shapeInternalStorage": "Внутренняя память",
            "dxDiagram-shapePaperTape": "Бумажная лента",
            "dxDiagram-shapeManualOperation": "Ручная операция",
            "dxDiagram-shapeDelay": "Задержка",
            "dxDiagram-shapeStoredData": "Запоминаемые данные",
            "dxDiagram-shapeDisplay": "Дисплей",
            "dxDiagram-shapeMerge": "Слияние",
            "dxDiagram-shapeConnector": "Соединитель",
            "dxDiagram-shapeOr": "Или",
            "dxDiagram-shapeSummingJunction": "Суммирование",
            "dxDiagram-shapeContainerDefaultText": "Контейнер",
            "dxDiagram-shapeVerticalContainer": "Вертикальный контейнер",
            "dxDiagram-shapeHorizontalContainer": "Горизонтальный контейнер",
            "dxDiagram-shapeCardDefaultText": "Имя человека",
            "dxDiagram-shapeCardWithImageOnLeft": "Карточка с изображением слева",
            "dxDiagram-shapeCardWithImageOnTop": "Карточка с изображением сверху",
            "dxDiagram-shapeCardWithImageOnRight": "Карточка с изображением справа",
            "dxGantt-dialogTitle": "Название",
            "dxGantt-dialogStartTitle": "Начало",
            "dxGantt-dialogEndTitle": "Окончание",
            "dxGantt-dialogProgressTitle": "Прогресс",
            "dxGantt-dialogResourcesTitle": "Ресурсы",
            "dxGantt-dialogResourceManagerTitle": "Управление ресурсами",
            "dxGantt-dialogTaskDetailsTitle": "Детали задачи",
            "dxGantt-dialogEditResourceListHint": "Редактировать список ресурсов",
            "dxGantt-dialogEditNoResources": "Список ресурсов пуст",
            "dxGantt-dialogButtonAdd": "Добавить",
            "dxGantt-contextMenuNewTask": "Новая задача",
            "dxGantt-contextMenuNewSubtask": "Новая подзадача",
            "dxGantt-contextMenuDeleteTask": "Удалить задачу",
            "dxGantt-contextMenuDeleteDependency": "Удалить зависимость",
            "dxGantt-dialogTaskDeleteConfirmation": "Удаление задачи приведет к удалению всех её зависимостей и подзадач. Вы уверены, что вы хотите удалить эту задачу?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Вы уверены, что хотите удалить эту зависимость из задачи?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Удаление ресурса также удалит его из всех задач, в которых он используется. Вы уверены, что хотите удалить эти ресурсы? Ресурсы: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "Задача, которую вы передвигаете, имеет зависимость от другой задачи. Это изменение противоречит правилам валидации. Как вы хотите поступить?",
            "dxGantt-dialogConstraintViolationMessage": "Задача, которую вы передвигаете, имеет зависимость от другой задачи. Как вы хотите поступить?",
            "dxGantt-dialogCancelOperationMessage": "Отменить операцию",
            "dxGantt-dialogDeleteDependencyMessage": "Удалить задачу",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Сохранить зависимость и передвинуть задачу",
            "dxGantt-undo": "Отменить",
            "dxGantt-redo": "Повторить",
            "dxGantt-expandAll": "Развернуть все",
            "dxGantt-collapseAll": "Свернуть все",
            "dxGantt-addNewTask": "Добавить новую задачу",
            "dxGantt-deleteSelectedTask": "Удалить выделенную задачу",
            "dxGantt-zoomIn": "Увеличить масштаб",
            "dxGantt-zoomOut": "Уменьшить масштаб",
            "dxGantt-fullScreen": "Полноэкранный режим",
            "dxGantt-quarter": "{0}-й кв."
        }
    });
}));
