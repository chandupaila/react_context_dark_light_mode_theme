import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeButton = () => {
        toggleTheme()
      }

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const headingColor = isDarkTheme ? 'dark' : 'light'
      const backGroundColor = isDarkTheme ? 'home BGM' : 'home'

      return (
        <nav className={`navBar ${backGroundColor}`}>
          <div className={`navInner ${backGroundColor}`}>
            <div>
              <img src={logo} alt="website logo" className="image" />
            </div>

            <div>
              <ul className="unOrder">
                <li className={`list ${headingColor}`}>
                  <Link to="/" className={headingColor}>
                    Home
                  </Link>
                </li>
                <li className={`list ${headingColor}`}>
                  <Link to="/about" className={headingColor}>
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="button"
                onClick={onClickThemeButton}
              >
                <img src={themeLogo} className="image" alt="theme" />
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
