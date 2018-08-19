import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import fileReducer from './file_reducer';

const rootReducer = combineReducers({
   form,
   files: fileReducer
});

export default rootReducer;
