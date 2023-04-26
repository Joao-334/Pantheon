import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';


const Link = ({ children, to, css }) => {

  return (
    
    <NavLink to={to} className={`${css === 'Body' ? styles.link_body : styles.link}`}>{children}</NavLink>
  )
}

export default Link