import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const themeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const theClass = isDarkTheme ? 'light-nav' : 'dark-nav'
      const texty = isDarkTheme ? 'lightOne' : 'darkOne'
      return (
        <div className={theClass}>
          <img className="logo" src={imgUrl} alt="website logo" />
          <ul className="links">
            <Link to="/">
              <li className={texty}>Home</li>
            </Link>
            <Link to="/about">
              <li className={texty}>About</li>
            </Link>
          </ul>
          <img
            className="logo"
            onClick={toggleTheme}
            src={themeIcon}
            alt="theme"
            data-testid="theme"
          />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
