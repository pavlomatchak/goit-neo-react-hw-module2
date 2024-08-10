import PropTypes from 'prop-types';
import css from './Options.module.css';

const Options = ({ updateFeedback, reset, total }) => {
  return (
    <div className={css.component}>
      <button
        type="button"
        onClick={() => updateFeedback('good')}>
          Good
      </button>

      <button
        type="button"
        onClick={() => updateFeedback('neutral')}>
          Neutral
      </button>

      <button
        type="button"
        onClick={() => updateFeedback('bad')}>
          Bad
      </button>

      {total > 0 && <button
        type="button"
        onClick={() => reset()}>
          Reset
        </button>}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;