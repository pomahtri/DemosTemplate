/**
* DevExtreme (esm/renovation/ui/scroll_view/scrollable.j.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from "../../../core/component_registrator";
import { ScrollableWrapper } from "../../component_wrapper/scrollable";
import { Scrollable as ScrollableComponent, defaultOptions } from "./scrollable";
export default class Scrollable extends ScrollableWrapper {
  content() {
    var _this$viewRef;

    return this._toPublicElement((_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.content(...arguments));
  }

  scrollBy(distance) {
    var _this$viewRef2;

    return (_this$viewRef2 = this.viewRef) === null || _this$viewRef2 === void 0 ? void 0 : _this$viewRef2.scrollBy(...arguments);
  }

  update() {
    var _this$viewRef3;

    return (_this$viewRef3 = this.viewRef) === null || _this$viewRef3 === void 0 ? void 0 : _this$viewRef3.update(...arguments);
  }

  release() {
    var _this$viewRef4;

    return (_this$viewRef4 = this.viewRef) === null || _this$viewRef4 === void 0 ? void 0 : _this$viewRef4.release(...arguments);
  }

  refresh() {
    var _this$viewRef5;

    return (_this$viewRef5 = this.viewRef) === null || _this$viewRef5 === void 0 ? void 0 : _this$viewRef5.refresh(...arguments);
  }

  scrollTo(targetLocation) {
    var _this$viewRef6;

    return (_this$viewRef6 = this.viewRef) === null || _this$viewRef6 === void 0 ? void 0 : _this$viewRef6.scrollTo(...arguments);
  }

  scrollToElement(element) {
    var _this$viewRef7;

    var params = [this._patchElementParam(element)];
    return (_this$viewRef7 = this.viewRef) === null || _this$viewRef7 === void 0 ? void 0 : _this$viewRef7.scrollToElement(...params.slice(0, arguments.length));
  }

  scrollHeight() {
    var _this$viewRef8;

    return (_this$viewRef8 = this.viewRef) === null || _this$viewRef8 === void 0 ? void 0 : _this$viewRef8.scrollHeight(...arguments);
  }

  scrollWidth() {
    var _this$viewRef9;

    return (_this$viewRef9 = this.viewRef) === null || _this$viewRef9 === void 0 ? void 0 : _this$viewRef9.scrollWidth(...arguments);
  }

  scrollOffset() {
    var _this$viewRef10;

    return (_this$viewRef10 = this.viewRef) === null || _this$viewRef10 === void 0 ? void 0 : _this$viewRef10.scrollOffset(...arguments);
  }

  scrollTop() {
    var _this$viewRef11;

    return (_this$viewRef11 = this.viewRef) === null || _this$viewRef11 === void 0 ? void 0 : _this$viewRef11.scrollTop(...arguments);
  }

  scrollLeft() {
    var _this$viewRef12;

    return (_this$viewRef12 = this.viewRef) === null || _this$viewRef12 === void 0 ? void 0 : _this$viewRef12.scrollLeft(...arguments);
  }

  clientHeight() {
    var _this$viewRef13;

    return (_this$viewRef13 = this.viewRef) === null || _this$viewRef13 === void 0 ? void 0 : _this$viewRef13.clientHeight(...arguments);
  }

  clientWidth() {
    var _this$viewRef14;

    return (_this$viewRef14 = this.viewRef) === null || _this$viewRef14 === void 0 ? void 0 : _this$viewRef14.clientWidth(...arguments);
  }

  getScrollElementPosition(element, direction) {
    var _this$viewRef15;

    var params = [this._patchElementParam(element), direction];
    return (_this$viewRef15 = this.viewRef) === null || _this$viewRef15 === void 0 ? void 0 : _this$viewRef15.getScrollElementPosition(...params.slice(0, arguments.length));
  }

  scrollToElementTopLeft(element) {
    var _this$viewRef16;

    var params = [this._patchElementParam(element)];
    return (_this$viewRef16 = this.viewRef) === null || _this$viewRef16 === void 0 ? void 0 : _this$viewRef16.scrollToElementTopLeft(...params.slice(0, arguments.length));
  }

  _getActionConfigs() {
    return {
      onScroll: {},
      onUpdated: {},
      onPullDown: {},
      onReachBottom: {},
      onStart: {},
      onEnd: {},
      onBounce: {}
    };
  }

  get _propsInfo() {
    return {
      twoWay: [],
      allowNull: [],
      elements: [],
      templates: [],
      props: ["useNative", "direction", "showScrollbar", "bounceEnabled", "scrollByContent", "scrollByThumb", "classes", "pullDownEnabled", "reachBottomEnabled", "forceGeneratePockets", "needScrollViewContentWrapper", "needScrollViewLoadPanel", "onScroll", "onUpdated", "onPullDown", "onReachBottom", "useSimulatedScrollbar", "pullingDownText", "pulledDownText", "refreshingText", "reachBottomText", "aria", "disabled", "height", "rtlEnabled", "visible", "width", "inertiaEnabled", "useKeyboard", "onStart", "onEnd", "onBounce"]
    };
  }

  get _viewComponent() {
    return ScrollableComponent;
  }

}
registerComponent("dxScrollable", Scrollable);
Scrollable.defaultOptions = defaultOptions;
