import React,{useState} from 'react'
import imgBack from '../../assets/images/mailz.jpeg'
import load1 from '../../assets/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import ReactTypingEffect from 'react-typing-effect'
import './ContactMe.css'

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler),
          [name, setName] = useState(""),
          [email, setEmail] = useState(""),
          [message, setMessage] = useState(""),
          [banner, setBanner] = useState(""),
          [bool, setBool] = useState(false),
          handleName = (e) =>{
            setName(e.target.value)
          },
          handleEmail = (e) =>{
            setEmail(e.target.value)
          },
          handleMessage = (e) =>{
            setMessage(e.target.value)
          }

  return (
    <div className='main-container' id={props.id || ''}>
        <ScreenHeading
            subHeading={"Let's Keep In Touch!"}
            title={"Contact me"}
        />
        <div className="central-form">
            <div className="col">
                <h2 className='title'>
                    <ReactTypingEffect
                        speed={50}
                        eraseSpeed={50}
                        typingDelay={100}
                        staticText="Get In Touch!"
                    />
                </h2>
                <a href="https://www.linkedin.com/in/bradley-middelijn-96588a197/">
                    <i className='fa fa-linkedin-square'></i>
                </a>
                <a href="https://github.com/bradleymidd">
                    <i className='fa fa-github-square'></i>
                </a>
            </div>
            <div className="back-form">
                <div className="img-back">
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt="image not found" />
                </div>
                <form>
                    <p>{banner}</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleName} value={name}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handleEmail} value={email}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" onChange={handleMessage} value={message}></textarea>

                    <div className="send-btn">
                        <button type="submit">
                            Send <i className="fa fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
