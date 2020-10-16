import React from 'react';
import styles from './CircleSelector.css'

function CircleSelector(props) {
    return (
        <div className="CircleSelector">
            {props.circles.map((circle, idx) => (
                <button
                    className={props.selected === (idx + 1) ? "selected" : ""}
                    key={idx}
                    onClick={() => props.handleCircleSelection(circle)}>
                    {props.selected === circle ? `circle ${circle} selected` : `select circle ${circle}`}
                </button>
            ))
            }
        </div>
    )
}

export default CircleSelector;
