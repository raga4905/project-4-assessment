import React from 'react';
import styles from './Circles.css'

function Circles(props) {
    return(
        <div className="Circles">
        <div className={props.selected ===1 ? 'selected' : ''}>1</div>
        <div className={props.selected ===2 ? 'selected' : ''}>2</div>
        <div className={props.selected ===3 ? 'selected' : ''}>3</div>
        <div className={props.selected ===4 ? 'selected' : ''}>4</div>
    </div>
    )
    
}

export default Circles;
