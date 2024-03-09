import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Menu.module.css";

const Menu = () => {
  const navigate = useNavigate()

 const data = [
    {
      name: 'About Us',
      link: 'aboutUs'
    },
    {
      name: 'Contacts',
      link: '#contacts'
    },
    {
      name: 'Products',
      link: 'products'
    },
  ]

  const navigateToCntacts = () => {
    navigate('/')
    setTimeout(() => {
      let item = document.getElementById('contacts');
      if (item) {
        item?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 300);
    return () => clearTimeout();
  }

  return (
    <div className={`d-flex ${classes.gap_30}`}>
      {data.map((item, index) => {
        return (
          <Link to={item.link} className={classes.menu_item} key={item} onClick={() => {index === 1 && navigateToCntacts()}}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
