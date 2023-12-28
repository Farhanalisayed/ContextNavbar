import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const classy = isDarkTheme ? 'lighty' : 'darky'
      const textClass = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={classy}>
            <img src={imgUrl} className="img" alt="about" />
            <h1 className={textClass}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
