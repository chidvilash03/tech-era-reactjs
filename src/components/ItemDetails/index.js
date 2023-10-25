import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import FailureView from '../FailureView'
import Navbar from '../Navbar'

class ItemDetails extends Component {
  state = {details: [], failureView: false, isLoading: true}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data.course_details)
      this.setState({details: data.course_details, isLoading: false})
    } else {
      this.setState({failureView: true, isLoading: false})
    }
  }

  render() {
    const {details, failureView, isLoading} = this.state
    return (
      <>
        <Navbar />
        <div className="details-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <>
              {!failureView ? (
                <div className="card">
                  <img
                    src={details.image_url}
                    alt={details.name}
                    className="details-image"
                  />
                  <div className="col">
                    <h1>{details.name}</h1>
                    <p>{details.description}</p>
                  </div>
                </div>
              ) : (
                <>
                  <FailureView />
                </>
              )}
            </>
          )}
        </div>
      </>
    )
  }
}

export default ItemDetails
