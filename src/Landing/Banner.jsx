import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import img1 from '../assets/banner/tablet-computer-men-hands-man-presses-blank-screen-tablet-computer-concept-man-working-from-home-using-tablet-computer-free-space-text-top-view-copy-space.jpg';
import img2 from '../assets/banner/smart-positive-smile-asian-male-businessman-video-conference-remote-working-discuss-concersation-about-strategy-business-planing-new-business-startup-ideas-conceptbusiness-meeting-online-via-laptop.jpg';
import img3 from '../assets/banner/hands-businesswoman-using-laptop-office.jpg';

const Banner = () => {
    return (
        <div className="banner-container relative w-full overflow-hidden">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3000}
                transitionTime={800}
                className="w-full"
            >
                {[img1, img2, img3].map((image, index) => (
                    <div key={index} className="relative w-full">
                        <img
                            src={image}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-[650px] object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-shadow-lg animate-fadeIn">
                                {index === 0 && "Streamline Your Workflow"}
                                {index === 1 && "Real-Time Task Management"}
                                {index === 2 && "Stay Ahead with Smart Tools"}
                            </h3>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl opacity-90 animate-slideUp">
                                {index === 0 && "Organize, prioritize, and track your tasks effortlessly."}
                                {index === 1 && "Collaborate seamlessly with advanced real-time updates."}
                                {index === 2 && "Boost productivity with tailored task management solutions."}
                            </p>
                            <Link to="/taskboard">
                                <button className="mt-6 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-indigo-600 transition-all">
                                    Explore Features
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
