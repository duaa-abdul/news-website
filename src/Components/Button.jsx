import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({id}) => {
  return (
    <NavLink to={`/news/${id}`} className="btn btn-info">
    Go somewhere  
    </NavLink>

  )
}

export default Button









