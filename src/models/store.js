import {createStore} from 'redux';
import expreducer from './reducers';

export const store  = createStore(expreducer);
store.subscribe(()=> { 
  //afterDeployement  console.log( "Subscribed.. ",store.getState() )
 });