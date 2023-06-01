import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(optionItem => (
      <Button
        type="button"
        key={optionItem}
        onClick={() => onLeaveFeedback(optionItem)}
      >
        {optionItem}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;