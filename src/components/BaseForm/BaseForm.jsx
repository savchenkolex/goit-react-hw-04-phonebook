import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./BaseForm.module.css";

export default function BaseForm(props) {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <div className={css.fieldsbox}>
        <label className={css.label}>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(event) => {
              inputHandler(event);
            }}
            value={name}
          />
        </label>
        <label className={css.label}>
          <span>Tel:</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputHandler}
            value={number}
          />
        </label>
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

BaseForm.propTypes = {
  addContact: PropTypes.func,
};
