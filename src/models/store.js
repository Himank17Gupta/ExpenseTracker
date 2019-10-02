import {createStore} from 'redux';
import expreducer from './reducers';

export const store  = createStore(expreducer);
store.subscribe(()=> { console.log( "Subscribed.. ",store.getState() ) });