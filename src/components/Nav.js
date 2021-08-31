import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        <nav>
            <h1>Sales</h1>
            <button>
                Sum of Sales
                <FontAwesomeIcon icon ={faCalculator} />
            </button>
        </nav>
    )
};

export default Nav; 