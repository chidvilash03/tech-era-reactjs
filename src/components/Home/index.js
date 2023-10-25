import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import './index.css'
import Navbar from '../Navbar'
import Item from '../Item'
import FailureView from '../FailureView'

class Home extends Component {
  state = {list: [], isLoading: true, failureView: false}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok) {
      const data = await response.json()
      this.setState({list: data.courses, isLoading: false})
    } else {
      this.setState({failureView: true, isLoading: false})
    }
  }

  reload = () => {
    this.getDetails()
  }

  render() {
    const {list, failureView, isLoading} = this.state
    return (
      <Link to="/" className="link-item">
        <div>
          <Navbar />
          <div className="center">
            {!isLoading ? (
              <ul className="item-container">
                {!failureView ? (
                  <>
                    <h1>Courses</h1>
                    <br />
                    {list.map(each => (
                      <Item item={each} key={each.id} />
                    ))}
                  </>
                ) : (
                  <FailureView reload={this.reload} />
                )}
              </ul>
            ) : (
              <div data-testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    )
  }
}

export default Home
