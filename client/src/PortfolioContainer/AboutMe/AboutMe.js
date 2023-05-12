import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler),
          SCREEN_CONSTANTS = {
            description: "My name is Bradley Middelijn and I am from the Netherlands. I've started studying webdevelopment at the age of 17. I got inspired by a classmate who showed me his website back in high school and since then i wanted to be a developer. I am still learning more about different kind of coding languages, frameworks and platforms.",
            highlights: {
                bullets: [
                    "Full Stack webdevelopment",
                    "React and React Native",
                    "Building applications with C#",
                    "Creating webapplication with ASP.NET",
                    "Building applications with Betty Blocks",
                    "Low/No code development"
                ],
                heading: "Here are few highlights:"

            }
          },
        renderHighlight = () =>{
            return SCREEN_CONSTANTS.highlights.bullets.map((value, i) =>(
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
            ));
        };
    

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            <div className='about-me-card'>
                <div className="about-me-profile">
                </div>
                <div className="about-me-details">
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className="about-me-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire me{" "}
                        </button>
                        <a href="CV_Bradley.pdf" download="Bradley Middelijn.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}
