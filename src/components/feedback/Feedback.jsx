import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

const Feedback = ({ feedbacks, total }) => {
  const positive = Math.round((feedbacks.good / total) * 100);

  return (
    <>
      <p className={css.item}>Good: {feedbacks.good}</p>

      <p className={css.item}>Neutral: {feedbacks.neutral}</p>

      <p className={css.item}>Bad: {feedbacks.bad}</p>

      <p className={css.item}>Total: {total}</p>

      <p className={css.item}>Positive: {positive}%</p>
    </>
  )
};

Feedback.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default Feedback;