import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './Profile.css';

let listOfFunctions = [
    "Enthusiastic Dev",
    "Full Stack Developer",
    "Betty Blocks Developer",
    "C# Developer",
    "React/React Native Dev"];

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="cols">
                    <div className="cols-icon">
                        <a href="https://www.linkedin.com/in/bradley-middelijn-96588a197/">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href="https://github.com/bradleymidd">
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Bradley</span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <ReactTypingEffect
                                speed={50}
                                eraseSpeed={50}
                                typingDelay={100}
                                text={listOfFunctions}/>
                        </h1>
                        <span className="profile-role-tagline">
                                Speciality in building Front- and Backend.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {" "}
                        Hire me{" "}
                    </button>
                    <a href="CV_Bradley.pdf" download="Bradley Middelijn.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>
  )
}
