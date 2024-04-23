import React, { useEffect } from 'react';

import './About.css';

function About() {
    useEffect(() => {
        document.title = 'About Us';
    }, []);
    return (
        <div>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content">
                <div className="panel">
                    <h1 className='about'>About Us</h1>
                    <div className="content">
                        <img className="panel-image" alt="There are some food in the white bowel,mike, orange, nuts,dries strawberry, oat" src="https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE51dHJpdGlvbmFsJTIwaW5mb2dyYXBoaWNzfGVufDB8fDB8fHww" />
                        <div className="text">
                            <h3>Our Mission</h3>
                            <p>Our goal here is to help each visitor make healthier dietary choices by providing scientific and detailed information on the calorie and nutrient content of foods. We understand that everyone's dietary needs are different, so we are committed to providing a diverse range of food analyses to suit different dietary habits and health goals.</p>
                        </div>
                    </div>
                    <div>
                        <div className="content">
                            <img className="panel-image" alt="There are two women standing front the desk and phone, they test the food." src="https://plus.unsplash.com/premium_photo-1681490887474-91ab98ef56c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHRlYW13b3JrJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D" />
                            <div className="text">
                                <h3>Our Methodology</h3>
                                <p>Our data comes from certified nutritional databases and the latest scientific research to ensure the accuracy and reliability of our information. Our team includes nutritionists, data analysts, and food scientists who work together to ensure that our content is both scientific and practical. We strive to be thorough and transparent with every piece of food information so that you clearly understand the science behind your food.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content">
                            <img className="panel-image" alt="there are four peoples in the room, two women and two men,they are talking." src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlYW0lMjBmb29kfGVufDB8fDB8fHww" />
                            <div className="text">
                                <h3>Meet the team</h3>
                                <p>Our team is made up of a group of professionals who are passionate about food and nutrition. From registered dietitians to food science researchers, each team member is committed to spreading the right dietary knowledge and information to help you make healthy choices.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content">

                            <div className="text-choose">
                                <h3>Why Choose Us</h3>
                                <p>Science: All of the advice and data we provide is backed by solid science.</p>
                                <p>Transparency: Every food analysis report is thoroughly documented for your easy reference and understanding.</p>
                                <p>Professional Team: Our team members have extensive professional backgrounds and practical experience.</p>
                                <p>Thank you for choosing us to guide you on your dietary journey. If you have any questions or suggestions, please do not hesitate to contact us.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default About;