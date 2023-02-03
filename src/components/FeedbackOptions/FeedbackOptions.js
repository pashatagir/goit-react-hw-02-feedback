import React from 'react';
import PropTypes from 'prop-types';
import { OptionsContainer, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsContainer>
    {options.map(option => (
      <FeedbackBtn
        key={option}
        value={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </FeedbackBtn>
    ))}
  </OptionsContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
