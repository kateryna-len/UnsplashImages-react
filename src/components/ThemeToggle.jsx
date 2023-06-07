import React from 'react';
import { useGlobalContext } from '../context';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
