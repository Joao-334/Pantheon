import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';


const Link = ({ children, to }) => {

  return (
    
    <NavLink to={to} className={styles.link}>{children}</NavLink>
  )
}

export default Link