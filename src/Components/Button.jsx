import React from 'react';
import { NavLink } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({id}) => {
  return (
    <NavLink to={`/quotes/${id}`} className="btn btn-info">
    Go somewhere  
    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
    </NavLink>
  )
}

export default Button