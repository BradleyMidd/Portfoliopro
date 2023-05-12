import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About me",
        component: AboutMe
    },
    {
        screen_name: "Resume",
        component: Resume
    },
    {
        screen_name: "Testimonial",
        component: Testimonial
    }
]

export const GET_SCREEN_INDEX = (screen_name)=>{
    if(!screen_name) return -1;
    for (let index = 0; index < TOTAL_SCREENS.length; index++) {
        if (TOTAL_SCREENS[index].screen_name === screen_name) return index;
        
    }
    return -1;
}