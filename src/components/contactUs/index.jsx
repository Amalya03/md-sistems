import React from "react"
import ContactUsCard from "./card"
import { EMAIL, PHONENUMBER } from "../../constants/Constants"
import Title from "../title"

import classes from './ContactUs.module.css'


const ContactUs = () => {
  const value = [EMAIL, PHONENUMBER]
const data = { 'Email':`mailto:${EMAIL}`, 'Phone': `tel:${PHONENUMBER}`,}

  return (
      <div className={`w-100 d-flex justify-content-center flex-wrap ${classes.card_item}`} id='contacts'>
          <Title/>
          <div className={`d-flex w-100 justify-content-center ${classes.card_item}`}>
          {Object.keys(data).map((item, index) => {
              return (
                  <div key={item}  className={`justify-content-center d-flex`}>
                      <ContactUsCard src={`/assets/contactUs/contact${item}.svg`} link={data[item]} value={value[index]} title={item}/>
                  </div>
              )

          })}
          </div>
      </div>
  )
}

export default ContactUs