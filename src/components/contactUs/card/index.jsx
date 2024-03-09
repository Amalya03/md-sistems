import React from "react";
import { Link } from "react-router-dom";

import classes from './Card.module.css'

const ContactUsCard = (props) => {
    const { src, link, value, title } = props

    return (
        <div className={`d-flex align-items-center justify-content-center flex-wrap ${classes.card_container}`}>
            <div className={`d-flex justify-content-start w-100 flex-wrap ${classes.gap_20}`} >
                <div className={`d-flex align-items-center w-100 justify-content-start`}>
                    <img  src={src} alt=''  className={classes.img}/>
                </div>
                <div className={`d-flex align-items-center w-100 flex-wrap ${classes.gap_10}`}>
                    <span className={classes.title}>{title}</span>
                    <Link
                        className={`w-100 ${classes.text}`}
                        to={link}
                    >
                        {value}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactUsCard

