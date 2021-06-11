/**
* DevExtreme (renovation/ui/common/event_callback.d.ts)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type EventCallback<T = void> = T extends void ? () => void : (value: T) => void;
