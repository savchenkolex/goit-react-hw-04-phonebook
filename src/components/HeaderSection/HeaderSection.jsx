import React from 'react';
import css from "./HeaderSection.module.css";

function HeaderSection () {
  
    return (
      <header className={css.headerBox}>
        <div className={css.logo}><span>The</span>Phonebook</div>
      </header>
    );
  
}

export default HeaderSection;