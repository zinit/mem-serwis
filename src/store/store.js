import { createStore } from 'redux';
import { memeVotesReducer } from './reducers/globalReducer';

const store = createStore(memeVotesReducer);

export default store;