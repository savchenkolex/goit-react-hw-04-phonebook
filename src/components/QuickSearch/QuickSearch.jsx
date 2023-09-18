import PropTypes from "prop-types";
import css from './QuickSearch.module.css';

export default function QuickSearch({inputHandler}) {
  return (
        <input
            className={css["filter-input"]}
          type="text"
          name="filter"
          onChange={event => {
            inputHandler(event);
          }}
          placeholder='Type for quick search'
        />
  );
}

QuickSearch.propTypes = {
  inputHandler: PropTypes.func,
}