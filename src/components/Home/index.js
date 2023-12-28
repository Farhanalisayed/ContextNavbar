import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const classy = isDarkTheme ? 'lighty' : 'darky'
      const textClass = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={classy}>
            <img src={imgUrl} className="img" alt="home" />
            <h1 className={textClass}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
