import React from 'react';
import './About.css';
import img4 from '../images/my-pic.png'



const About = () => {
    return (
        <div className='container  container-about'>
            <div class="row box-content ">
                <div class="col-4 p-5 ">
                    <p className='text-white fw-bold'>
                        My goal is to become a good frontend web developer in the next 4 months.  For that I give myself 7-8 hours to build myself up.  I think there is no substitute for hard work if you want to be a good developer.  So I am constantly fighting with myself. After 4 months, I can say that I have won this war.
                    </p>

                </div>
                <div class="col-8 ">
                    <img className="w-50 " src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;