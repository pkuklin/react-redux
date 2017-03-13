/**
 * Created by pkuklin on 3/12/17.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;