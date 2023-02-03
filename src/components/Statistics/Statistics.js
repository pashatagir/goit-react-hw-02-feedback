import React from 'react';
import PropTypes from 'prop-types';
import { StatContainer, StatTitle, Notification } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  good || neutral || bad ? (
    <StatContainer>
      <StatTitle>Good: {good}</StatTitle>
      <StatTitle>Neutral: {neutral}</StatTitle>
      <StatTitle>Bad: {bad}</StatTitle>
      <StatTitle>Total: {total}</StatTitle>
      <StatTitle>Total: {positivePercentage}%</StatTitle>
    </StatContainer>
  ) : (
    <Notification>There is no feedback</Notification>
  );

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
