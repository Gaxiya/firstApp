
import { combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let rootReducer= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})
export default rootReducer;