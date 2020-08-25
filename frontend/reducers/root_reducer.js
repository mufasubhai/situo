import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducer'
import UIReducer from './ui_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: UIReducer
});


export default rootReducer;