import React from 'react';
import Banner from '../Banner/Banner'
import HomeCourses from '../HomeCourses/HomeCourses';
import Webinars from '../Webinars/Webinars';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCourses></HomeCourses>
            <Webinars></Webinars>
        </div>
    );
};

export default Home;