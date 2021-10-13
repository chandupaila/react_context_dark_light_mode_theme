import './index.css'
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageHome = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const headingColor = isDarkTheme ? 'dark' : 'light'
      const backGroundColor = isDarkTheme ? 'home BGM' : 'home'

      return (
        <div>
          <NavBar />
          <div className={backGroundColor}>
            <img src={imageHome} className="down" alt="home" />
            <h1 className={headingColor}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
