/**
 * Created by pkuklin on 3/12/17.
 */
import * as types from './actionTypes';

export function createCourse(course) {
    return {type: types.CREATE_COURSE, course};
} 