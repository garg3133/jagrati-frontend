import React from 'react'
import './ContactUs.css'
const Contact = () => {
    return (
        <div className="contactUs">
            <section id="contact-us">
                <div className="container">
                    <h1 data-aos="fade-up">Contact Us</h1>
                    <div data-aos="fade" data-aos-delay="100" data-aos-duration="700" data-aos-easing="ease-in-back"
                        data-aos-anchor="#contact-us h1">
                        <iframe id="googleMap" title="googleMap"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8475.584685004593!2d80.0213485541703!3d23.176553282566513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9413d9835fd%3A0xffe30099d058452e!2sIndian%20Institute%20of%20Information%20Technology%20Design%20%26%20Manufacturing%20Jabalpur!5e0!3m2!1sen!2sin!4v1575215351789!5m2!1sen!2sin"
                            width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700"><i className="fas fa-map-marker-alt fa-2x"></i>
            Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing Jabalpur
        </p>
                    <div>
                        <div className="con-box1" data-aos="fade-down-right">
                            <p><i className="fas fa-mobile fa-2x"></i> +91-xxxxx-xxxxx</p>
                        </div>
                        <div className="con-box1" data-aos="fade-down-left">
                            <p><i className="fas fa-envelope fa-2x"></i> jagrati@iiitdmj.ac.in</p>
                        </div>
                    </div>
                    <div className="clr"></div>
                    <div className="con-box2">
                        <p>
                            <a href="https://www.facebook.com/JAGRATI.IIITDMJ/" rel="noreferrer" target="_blank">
                                <i className="fab fa-facebook fa-2x" data-aos="fade-left" data-aos-delay="200"
                                    data-aos-anchor=".con-box1"></i>
                            </a>
                            <a href="https://www.instagram.com/jagrati.iiitdmj/" rel="noreferrer" target="_blank">
                                <i className="fab fa-instagram fa-2x" data-aos="fade-left" data-aos-delay="550"
                                    data-aos-anchor=".con-box1"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC0VyWk6o3XXGi1oq-XIbbJQ/" rel="noreferrer" target="_blank">
                                <i className="fab fa-youtube fa-2x" data-aos="fade-left" data-aos-delay="900"
                                    data-aos-anchor=".con-box1"></i>
                            </a>
                            <a href="https://github.com/garg3133/JagratiWebApp.git" rel="noreferrer" target="_blank">
                                <i className="fab fa-github fa-2x" data-aos="fade-left" data-aos-delay="1250"
                                    data-aos-anchor=".con-box1"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
