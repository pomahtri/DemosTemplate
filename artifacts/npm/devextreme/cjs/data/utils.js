/**
* DevExtreme (cjs/data/utils.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _type = require("../core/utils/type");

var _dom_adapter = _interopRequireDefault(require("../core/dom_adapter"));

var _ready_callbacks = _interopRequireDefault(require("../core/utils/ready_callbacks"));

var _window = require("../core/utils/window");

var _iterator = require("../core/utils/iterator");

var _deferred = require("../core/utils/deferred");

var _common = require("../core/utils/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ready = _ready_callbacks.default.add;
var XHR_ERROR_UNLOAD = 'DEVEXTREME_XHR_ERROR_UNLOAD';

var normalizeBinaryCriterion = function normalizeBinaryCriterion(crit) {
  return [crit[0], crit.length < 3 ? '=' : String(crit[1]).toLowerCase(), crit.length < 2 ? true : crit[crit.length - 1]];
};

var normalizeSortingInfo = function normalizeSortingInfo(info) {
  if (!Array.isArray(info)) {
    info = [info];
  }

  return (0, _iterator.map)(info, function (i) {
    var result = {
      selector: (0, _type.isFunction)(i) || typeof i === 'string' ? i : i.getter || i.field || i.selector,
      desc: !!(i.desc || String(i.dir).charAt(0).toLowerCase() === 'd')
    };

    if (i.compare) {
      result.compare = i.compare;
    }

    return result;
  });
};

var errorMessageFromXhr = function () {
  var textStatusMessages = {
    'timeout': 'Network connection timeout',
    'error': 'Unspecified network error',
    'parsererror': 'Unexpected server response'
  };

  var explainTextStatus = function explainTextStatus(textStatus) {
    var result = textStatusMessages[textStatus];

    if (!result) {
      return textStatus;
    }

    return result;
  }; // T542570, https://stackoverflow.com/a/18170879


  var unloading;
  ready(function () {
    var window = (0, _window.getWindow)();

    _dom_adapter.default.listen(window, 'beforeunload', function () {
      unloading = true;
    });
  });
  return function (xhr, textStatus) {
    if (unloading) {
      return XHR_ERROR_UNLOAD;
    }

    if (xhr.status < 400) {
      return explainTextStatus(textStatus);
    }

    return xhr.statusText;
  };
}();

var aggregators = {
  count: {
    seed: 0,
    step: function step(count) {
      return 1 + count;
    }
  },
  sum: {
    seed: 0,
    step: function step(sum, item) {
      return sum + item;
    }
  },
  min: {
    step: function step(min, item) {
      return item < min ? item : min;
    }
  },
  max: {
    step: function step(max, item) {
      return item > max ? item : max;
    }
  },
  avg: {
    seed: [0, 0],
    step: function step(pair, value) {
      return [pair[0] + value, pair[1] + 1];
    },
    finalize: function finalize(pair) {
      return pair[1] ? pair[0] / pair[1] : NaN;
    }
  }
};

var processRequestResultLock = function () {
  var lockCount = 0;
  var lockDeferred;

  var obtain = function obtain() {
    if (lockCount === 0) {
      lockDeferred = new _deferred.Deferred();
    }

    lockCount++;
  };

  var release = function release() {
    lockCount--;

    if (lockCount < 1) {
      lockDeferred.resolve();
    }
  };

  var promise = function promise() {
    var deferred = lockCount === 0 ? new _deferred.Deferred().resolve() : lockDeferred;
    return deferred.promise();
  };

  var reset = function reset() {
    lockCount = 0;

    if (lockDeferred) {
      lockDeferred.resolve();
    }
  };

  return {
    obtain: obtain,
    release: release,
    promise: promise,
    reset: reset
  };
}();

function isDisjunctiveOperator(condition) {
  return /^(or|\|\||\|)$/i.test(condition);
}

function isConjunctiveOperator(condition) {
  return /^(and|&&|&)$/i.test(condition);
}

var keysEqual = function keysEqual(keyExpr, key1, key2) {
  if (Array.isArray(keyExpr)) {
    var names = (0, _iterator.map)(key1, function (v, k) {
      return k;
    });
    var name;

    for (var i = 0; i < names.length; i++) {
      name = names[i];

      if (!(0, _common.equalByValue)(key1[name], key2[name], 0, false)) {
        return false;
      }
    }

    return true;
  }

  return (0, _common.equalByValue)(key1, key2, 0, false);
};

var BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

var base64_encode = function base64_encode(input) {
  if (!Array.isArray(input)) {
    input = stringToByteArray(String(input));
  }

  var result = '';

  function getBase64Char(index) {
    return BASE64_CHARS.charAt(index);
  }

  for (var i = 0; i < input.length; i += 3) {
    var octet1 = input[i];
    var octet2 = input[i + 1];
    var octet3 = input[i + 2];
    result += (0, _iterator.map)([octet1 >> 2, (octet1 & 3) << 4 | octet2 >> 4, isNaN(octet2) ? 64 : (octet2 & 15) << 2 | octet3 >> 6, isNaN(octet3) ? 64 : octet3 & 63], getBase64Char).join('');
  }

  return result;
};

function stringToByteArray(str) {
  var bytes = [];
  var code;
  var i;

  for (i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);

    if (code < 128) {
      bytes.push(code);
    } else if (code < 2048) {
      bytes.push(192 + (code >> 6), 128 + (code & 63));
    } else if (code < 65536) {
      bytes.push(224 + (code >> 12), 128 + (code >> 6 & 63), 128 + (code & 63));
    } else if (code < 2097152) {
      bytes.push(240 + (code >> 18), 128 + (code >> 12 & 63), 128 + (code >> 6 & 63), 128 + (code & 63));
    }
  }

  return bytes;
}

var isUnaryOperation = function isUnaryOperation(crit) {
  return crit[0] === '!' && Array.isArray(crit[1]);
};

var isGroupOperator = function isGroupOperator(value) {
  return value === 'and' || value === 'or';
};

var isGroupCriterion = function isGroupCriterion(crit) {
  var first = crit[0];
  var second = crit[1];

  if (Array.isArray(first)) {
    return true;
  }

  if ((0, _type.isFunction)(first)) {
    if (Array.isArray(second) || (0, _type.isFunction)(second) || isGroupOperator(second)) {
      return true;
    }
  }

  return false;
};

var trivialPromise = function trivialPromise() {
  var d = new _deferred.Deferred();
  return d.resolve.apply(d, arguments).promise();
};

var rejectedPromise = function rejectedPromise() {
  var d = new _deferred.Deferred();
  return d.reject.apply(d, arguments).promise();
};

function throttle(func, timeout) {
  var timeoutId;
  var lastArgs;
  return function () {
    var _this = this;

    lastArgs = arguments;

    if (!timeoutId) {
      timeoutId = setTimeout(function () {
        timeoutId = undefined;

        if (lastArgs) {
          func.call(_this, lastArgs);
        }
      }, (0, _type.isFunction)(timeout) ? timeout() : timeout);
    }

    return timeoutId;
  };
}

function throttleChanges(func, timeout) {
  var cache = [];
  var throttled = throttle(function () {
    func.call(this, cache);
    cache = [];
  }, timeout);
  return function (changes) {
    if (Array.isArray(changes)) {
      var _cache;

      (_cache = cache).push.apply(_cache, _toConsumableArray(changes));
    }

    return throttled.call(this, cache);
  };
}
/**
* @name Utils
*/


var utils = {
  XHR_ERROR_UNLOAD: XHR_ERROR_UNLOAD,
  normalizeBinaryCriterion: normalizeBinaryCriterion,
  normalizeSortingInfo: normalizeSortingInfo,
  errorMessageFromXhr: errorMessageFromXhr,
  aggregators: aggregators,
  keysEqual: keysEqual,
  throttleChanges: throttleChanges,
  trivialPromise: trivialPromise,
  rejectedPromise: rejectedPromise,
  isDisjunctiveOperator: isDisjunctiveOperator,
  isConjunctiveOperator: isConjunctiveOperator,
  processRequestResultLock: processRequestResultLock,
  isUnaryOperation: isUnaryOperation,
  isGroupCriterion: isGroupCriterion,
  base64_encode: base64_encode
};
var _default = utils;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
