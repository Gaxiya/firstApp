import { combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducers';

let rootReducer= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    users:usersReducer
})
export default rootReducer;