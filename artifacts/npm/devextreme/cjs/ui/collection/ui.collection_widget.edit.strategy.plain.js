/**
* DevExtreme (cjs/ui/collection/ui.collection_widget.edit.strategy.plain.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _array = require("../../core/utils/array");

var _uiCollection_widgetEdit = _interopRequireDefault(require("./ui.collection_widget.edit.strategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PlainEditStrategy = _uiCollection_widgetEdit.default.inherit({
  _getPlainItems: function _getPlainItems() {
    return this._collectionWidget.option('items') || [];
  },
  getIndexByItemData: function getIndexByItemData(itemData) {
    var keyOf = this._collectionWidget.keyOf.bind(this._collectionWidget);

    if (keyOf) {
      return this.getIndexByKey(keyOf(itemData));
    } else {
      return (0, _array.inArray)(itemData, this._getPlainItems());
    }
  },
  getItemDataByIndex: function getItemDataByIndex(index) {
    return this._getPlainItems()[index];
  },
  deleteItemAtIndex: function deleteItemAtIndex(index) {
    this._getPlainItems().splice(index, 1);
  },
  itemsGetter: function itemsGetter() {
    return this._getPlainItems();
  },
  getKeysByItems: function getKeysByItems(items) {
    var keyOf = this._collectionWidget.keyOf.bind(this._collectionWidget);

    var result = items;

    if (keyOf) {
      result = [];

      for (var i = 0; i < items.length; i++) {
        result.push(keyOf(items[i]));
      }
    }

    return result;
  },
  getIndexByKey: function getIndexByKey(key) {
    var cache = this._cache;
    var keys = cache && cache.keys || this.getKeysByItems(this._getPlainItems());

    if (cache && !cache.keys) {
      cache.keys = keys;
    }

    if (_typeof(key) === 'object') {
      for (var i = 0, length = keys.length; i < length; i++) {
        if (this._equalKeys(key, keys[i])) return i;
      }
    } else {
      return keys.indexOf(key);
    }

    return -1;
  },
  getItemsByKeys: function getItemsByKeys(keys, items) {
    return (items || keys).slice();
  },
  moveItemAtIndexToIndex: function moveItemAtIndexToIndex(movingIndex, destinationIndex) {
    var items = this._getPlainItems();

    var movedItemData = items[movingIndex];
    items.splice(movingIndex, 1);
    items.splice(destinationIndex, 0, movedItemData);
  },
  _isItemIndex: function _isItemIndex(index) {
    return typeof index === 'number' && Math.round(index) === index;
  },
  _getNormalizedItemIndex: function _getNormalizedItemIndex(itemElement) {
    return this._collectionWidget._itemElements().index(itemElement);
  },
  _normalizeItemIndex: function _normalizeItemIndex(index) {
    return index;
  },
  _denormalizeItemIndex: function _denormalizeItemIndex(index) {
    return index;
  },
  _getItemByNormalizedIndex: function _getItemByNormalizedIndex(index) {
    return index > -1 ? this._collectionWidget._itemElements().eq(index) : null;
  },
  _itemsFromSameParent: function _itemsFromSameParent() {
    return true;
  }
});

var _default = PlainEditStrategy;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
