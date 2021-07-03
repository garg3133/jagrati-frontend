import React from "react";

const ContactUsIcons = (props) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      <i
        className={`fab fa-${props.company} fa-2x`}
        data-aos="fade-left"
        data-aos-delay={props.delay}
        data-aos-anchor=".con-box1"
      ></i>
    </a>
  );
};

export default ContactUsIcons;
