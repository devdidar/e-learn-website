import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const HomeCourses = () => {
    const [homeCourses,setHomeCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setHomeCourses(data));
    },[])
    const courses = homeCourses.slice(0,4)
    return (
        <div className='mb-5'>
        <div className="course-headline-title fs-2 mb-5">
          <Link to="/courses" className="course-headline-main-title">
            Our Courses
          </Link>
        </div>
        <div className="container">
          <div className="row">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    );
};

export default HomeCourses;