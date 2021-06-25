import {Fruit} from '../model/fruit';

export enum InMemoryConstants {
  ALL_DATA = 'ALL_DATA',
  TOKEN = 'TOKEN',
  USER_DETAILS = 'USER_DETAILS'
}

export const FRUITS: Fruit[] = [
  {id: 1, name: 'Mango'},
  {id: 2, name: 'Banana'}
];
