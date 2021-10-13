import './index.css'
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const headingColor = isDarkTheme ? 'dark' : 'light'
      const backGroundColor = isDarkTheme ? 'home BGM' : 'home'

      return (
        <div>
          <NavBar />

          <div className={backGroundColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notFound"
            />
            <h1 className={headingColor}>Lost Your Way?</h1>
            <p className={headingColor}>
              We cannot seem to find the page you are looking for{' '}
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
