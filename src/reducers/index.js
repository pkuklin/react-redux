/**
 * Created by pkuklin on 3/12/17.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;