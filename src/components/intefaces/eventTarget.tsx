import { BaseSyntheticEvent } from './baseEventTarget';
 export interface SyntheticEvent<T = Element, E = Event>
    extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}