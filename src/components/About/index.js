import './index.css'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageAbout = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const headingColor = isDarkTheme ? 'dark' : 'light'
      const backGroundColor = isDarkTheme ? 'home BGM' : 'home'

      return (
        <div>
          <NavBar />
          <div className={backGroundColor}>
            <img src={imageAbout} className="down" alt="about" />
            <h1 className={headingColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
