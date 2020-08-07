import React from "react";
import styles from "./feedbackbuttons.module.css";
import PropTypes from "prop-types";

const FeedbackButtons = ({options,onLeaveFeedback}) => {
    return ( 
    <> 
    {Object.keys(options).map((item) => ( 
        <button 
        className = {styles.buttons}
                type = "button"
                name = {item}
                onClick = {onLeaveFeedback}
                key = {item} >
                {item} 
                </button>
            ))} 
        </>
    );
};

FeedbackButtons.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;