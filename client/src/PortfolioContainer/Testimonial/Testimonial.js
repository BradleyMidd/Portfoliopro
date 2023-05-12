import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Testimonial.css'

export default function Testimonial(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
        <ScreenHeading
            title={'Testimonial'}
            subHeading={'What My Client Say About Me'}
        />
        <section className="testimonial-section" id={props.id || ''}>
            <div className="container">
                <div className="row">
                    <OwlCarousel className='owl-carousel' id='testimonial-carousel'>
                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <i className='fa fa-quote-left'/>
                                        I patronized Ehizeex and when He delivered, I honestly
                                        fell in love with the project He is a very honest guy and
                                        he delivers ontime.
                                        <i className='fa fa-quote-right'/>
                                    </p> 
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star-half-alt'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/lady.png" alt="no internet connection" />
                                    <h5>Daisy Dominick</h5>
                                    <p>CEO InansGlobal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <i className='fa fa-quote-left'/>
                                        I patronized Ehizeex and when He delivered, I honestly
                                        fell in love with the project He is a very honest guy and
                                        he delivers ontime.
                                        <i className='fa fa-quote-right'/>
                                    </p> 
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star-half-alt'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/mike.png" alt="no internet connection" />
                                    <h5>Mikel</h5>
                                    <p>CEO MikeTech</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                        <i className='fa fa-quote-left'/>
                                        I patronized Ehizeex and when He delivered, I honestly
                                        fell in love with the project He is a very honest guy and
                                        he delivers ontime.
                                        <i className='fa fa-quote-right'/>
                                    </p> 
                                    <ul className='stars list-unstyled'>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star-half-alt'/>
                                        </li>
                                        <li>
                                            <i className='fa fa-star'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                    <img src="img/testimonial/man.png" alt="no internet connection" />
                                    <h5>Harold</h5>
                                    <p>CEO InansGlobal</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    </div>
  )
}