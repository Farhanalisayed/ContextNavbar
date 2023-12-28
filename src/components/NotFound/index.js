// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      const classy = isDarkTheme ? 'lighty' : 'darky'
      const headText = isDarkTheme ? 'headLit' : 'headDrk'
      const paraText = isDarkTheme ? 'paraLit' : 'paraDrk'
      return (
        <>
          <Navbar />
          <div className={classy}>
            <img src={imgUrl} className="img" alt="not found" />
            <h1 className={headText}>Lost Your Way?</h1>
            <p className={paraText}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
