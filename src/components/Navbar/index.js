import {withRouter} from 'react-router-dom'

import './index.css'

const Navbar = props => {
  const navigate = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="nav-container">
      <button type="button" onClick={navigate} className="nav-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
      </button>
    </nav>
  )
}

export default withRouter(Navbar)
