import React, {useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler),
          [selectedBulletIndex, setSelectedBulletIndex] = useState(0),
          [carouselOffSetStyle, setCarouselOffSetStyle] = useState({}),
          ResumeHeading = (props) => {
            return(
                <div className='resume-heading'>
                    <div className="resume-main-heading">
                        <div className="heading-bullet"></div>
                            <span>{props.heading ? props.heading : ''}</span>
                            {props.fromDate && props.toDate ?(
                                <div className='heading-date'>
                                    {props.fromDate + "-" + props.toDate}
                                </div>
                            ) : (
                                <div></div>
                            )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>
            )
          },
          resumeBullets = [
            {label: "Education", logoSrc: "education.svg"},
            {label: "Work History", logoSrc: "work-history.svg"},
            {label: "Programming Skills", logoSrc: "programming-skills.svg"},
            {label: "Projects", logoSrc: "projects.svg"},
            {label: "Interests", logoSrc: "interests.svg"}
          ],
          programmingSkillDetails = [
            {skill: "JavaScript", ratingPercentage: 85},
            {skill: "React", ratingPercentage: 40},
            {skill: "HTML", ratingPercentage: 90},
            {skill: "CSS", ratingPercentage: 70},
            {skill: "PHP", ratingPercentage: 25},
            {skill: "C#", ratingPercentage: 35},
            {skill: "ASP.NET", ratingPercentage: 10},
            {skill: "Betty Blocks", ratingPercentage: 85}
          ],
          projectDetails = [
            {
                title: "Personal Portfolio Website",
                duration: {fromDate: "2023", toDate: "2023"},
                description: "A portfolio website made to show my projects, skills en resume.",
                subHeading: "Technologies Used: ReactJS, Bootstrap"
            },
            {
                title: "SimpleWebScraper",
                duration: {fromDate: "2023", toDate: "2023"},
                description: "This application allows us to print a list of items in a site called 'Craigslist'. By simply inputting the city name and category, you will get a list of items which will show the title name of the item.",
                subHeading: "Technologies Used: C#"
            },
            {
                title: "SudokuSolver",
                duration: {fromDate: "2023", toDate: "2023"},
                description: "This application allows us to solve a sudoku file with 2 kinds of solution methods.",
                subHeading: "Technologies Used: C#"
            },
            {
                title: "WordUnscrambler",
                duration: {fromDate: "2023", toDate: "2023"},
                description: "This project basically is a word unscrambler where you can manually input scrambled words or use a text file to print out the scrambled word and make it unscramble",
                subHeading: "Technologies Used: C#"
            }
          ],
          resumeDetails = [
            <div className='resume-screen-container' key="education">
                <ResumeHeading
                    heading={"Grafisch Lyceum Rotterdam"}
                    subHeading={"MBO Niveau 4, Computer Software and Media Applications"}
                    fromDate={"Jan 2018"}
                    toDate={"Jul 2021"}
                />
                <ResumeHeading
                    heading={"Carre College"}
                    subHeading={"VMBO Kader"}
                    fromDate={"2014"}
                    toDate={"2018"}
                />
            </div>,
            <div className='resume-screen-container' key="work-experience">
                <ResumeHeading
                    heading={"SAA Verzekeringen"}
                    subHeading={"Betty Blocks Developer"}
                    fromDate={"May 2023"}
                    toDate={"Present"}
                />
                
                <div className="experience-description">
                    <span className="resume-description-text">
                        This is the current job I am working at.
                    </span>
                </div>
                <ResumeHeading
                    heading={"House of Lowcode (Formerly Holygrow)"}
                    subHeading={"Junior Betty Blocks Developer"}
                    fromDate={"Sep 2020"}
                    toDate={"Mar 2023"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        I used to be intern at the start of my job and in May 2021 I've officially became an employee.
                    </span>
                </div>
            </div>,
            <div className='resume-screen-container programming-skills-container' key="programming-skills">
                {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className="heading-bullet"></div>
                        <span>{skill.skill}</span>
                        <div className="skill-percentage">
                            <div style={{width: skill.ratingPercentage + "%"}} className='active-percentage'>

                            </div>
                        </div>
                    </div>
                ))}
            </div>,
            <div className='resume-screen-container' key="projects">
                {projectDetails.map((projectDetail, index) =>(
                    <ResumeHeading
                        key={index}
                        heading={projectDetail.title}
                        subHeading={projectDetail.subHeading}
                        description={projectDetail.description}
                        fromDate={projectDetail.duration.fromDate}
                        toDate={projectDetail.duration.toDate}
                    />
                ))}
            </div>,

            <div className='resume-screen-container' key="interests">
                <ResumeHeading
                    heading="Music"
                    description="I like listening to all kinds of music. It also helps me getting less distracted when I work."
                />
                <ResumeHeading
                    heading="Reading"
                    description="With reading i like to read things that can help me improve with life."
                />
                <ResumeHeading
                    heading="Learning"
                    description="I like to learn at my own pace, which makes it fun! Also I learn things what I want to learn. "
                />
            </div>
          ],
          handleCarousel = (index) =>{
            let offsetHeight = 360,
                newCarouselOffset = {
                    style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
                };
            setCarouselOffSetStyle(newCarouselOffset);
            setSelectedBulletIndex(index);
          },
          getBullets = () => {
            return resumeBullets.map((bullet, index) => (
                <div 
                    onClick={() => handleCarousel(index)}
                    className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                    key={index}>
                        <img src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="Oops no internet connection" className="bullet-logo" />
                        <span className='bullet-label'>{bullet.label}</span>
                    </div>
            ))
          },
          getResumeScreen = () => {
            return(
                <div style={carouselOffSetStyle.style} className='resume-details-carousel'>
                    {resumeDetails.map((resumeDetail) => resumeDetail)}
                </div>
            )
          }

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className="resume-card">
                    <div className="resume-bullet">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}
