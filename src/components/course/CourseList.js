/**
 * Created by pkuklin on 3/12/17.
 */

import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course =>
                <CourseListRow key={course.id} course={course}/>
            )}
            </tbody>
        </table>
    );

};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
    //deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
