/**
* DevExtreme (ui/widget/ui.search_box_mixin.d.ts)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import {
    dxTextBoxOptions
} from '../text_box';

/** @namespace DevExpress.ui */
export interface SearchBoxMixinOptions<T = SearchBoxMixin> {
    /**
     * @docid
     * @default {}
     * @public
     */
    searchEditorOptions?: dxTextBoxOptions;
    /**
     * @docid
     * @default false
     * @public
     */
    searchEnabled?: boolean;
    /**
     * @docid
     * @type getter|Array<getter>
     * @default null
     * @public
     */
    searchExpr?: string | Function | Array<string | Function>;
    /**
     * @docid
     * @type Enums.CollectionSearchMode
     * @default 'contains'
     * @public
     */
    searchMode?: 'contains' | 'startswith' | 'equals';
    /**
     * @docid
     * @default undefined
     * @public
     */
    searchTimeout?: number;
    /**
     * @docid
     * @default ""
     * @public
     */
    searchValue?: string;
}
/**
 * @docid
 * @module ui/widget/ui.search_box_mixin
 * @export default
 * @hidden
 */
export default class SearchBoxMixin {
    constructor(options?: SearchBoxMixinOptions)
}
