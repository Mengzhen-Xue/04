import React from 'react';
import './PanelPage.css';

function PanelPage() {
    return (
        <div className="panel">
            <a href="#main-content" className="skip-link">Skip to main content</a>
                <main id="main-content">
            <h1 className="panel-title">Who we are</h1>
            <div className='panel__info'>
                <p className="panel__text">We are a group of individuals who are passionate about health and wellness. Our goal is to provide you with the tools and resources you need to live a healthier life. Whether you are looking to improve your diet, lose weight, or simply learn more about nutrition, we are here to help.</p>
                <p className="panel__text">Our team is made up of nutritionists, dietitians, and fitness experts who are dedicated to helping you achieve your health and wellness goals. We offer a wide range of services, including personalized meal plans, fitness programs, and one-on-one coaching.</p>
                <p className="panel__text">At Nourish Everyday, we believe that everyone deserves to live a healthy life. That's why we are committed to providing you with the information and support you need to make positive changes in your life. We are here to help you every step of the way, so you can live your best life.</p>
            </div>
            <h2 className="panel-title__info">Meet our team</h2>
            <div className="panel-container">
                <img className="panel__image" alt="The Lady wearing red sweater smile" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" />
                <div className="panel-text__section">
                    <h2>Dr.Alex</h2>
                    <p className="panel__text">Dr. Alex is a registered dietitian and nutritionist with over 10 years of experience in the field. She is passionate about helping people improve their health and wellness through diet and lifestyle changes. Dr. Alex specializes in weight management, diabetes, and heart health, and she is dedicated to providing you with the information and support you need to achieve your health goals.</p>
                </div>
            </div>
            <div className="panel-container">
                <img className="panel__image" alt="Woman sitting by window, wearing formal clothes, computer on her lap" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                <div className="panel-text__section">
                    <h2>Dr. Clair</h2>
                    <p className="panel__text">Dr. Clair is a certified fitness trainer and health coach with a background in exercise science and nutrition. She is passionate about helping people achieve their fitness goals and improve their overall health and wellness. Dr. Clair specializes in strength training, cardio, and flexibility, and she is dedicated to providing you with the tools and resources you need to live a healthier life.</p>

                </div>
            </div>
            <div className="panel-container">
                <img className="panel__image" alt="Woman sitting by window, wearing formal clothes, computer on her lap" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                <div className="panel-text__section">
                    <h2>Dr. Jay</h2>
                    <p className="panel__text">Dr. Jay is a certified personal trainer and nutrition coach with a background in sports science and exercise physiology. He is passionate about helping people achieve their fitness goals and improve their overall health and wellness. Dr. Jay specializes in weight loss, muscle gain, and sports performance, and he is dedicated to providing you with the tools and resources you need to live a healthier life.</p>
                </div>
            </div>
            <div className="panel-container__detail">
                <h2>Write for Us</h2>
                <p>"We are actively seeking collaborations with writers, recipe developers, and photographers who offer diverse perspectives and unique backgrounds. Our mission is to inspire and empower our audience, who are passionate about healthy eating, to explore, create, and enjoy the finest in nutritious culinary experiences. We invite pitches that will captivate our devoted followers and expand their understanding of healthy gastronomy and wellness."</p>
            </div>
        </main>
        </div>
    );
}

export default PanelPage;