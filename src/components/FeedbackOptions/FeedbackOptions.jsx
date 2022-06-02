import React from 'react';
import PropTypes from "prop-types";
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={s.feedback__block}>
        {options.map((option) => (
            <button type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
        ))}
    </div>     
)


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;