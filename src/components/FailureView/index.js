import './index.css'

const FailureView = props => {
  const {reload} = props
  const retryClicked = () => {
    reload()
  }
  return (
    <div className="fv-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="fv-img"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button type="button" className="fv-btn" onClick={retryClicked}>
        Retry
      </button>
    </div>
  )
}
export default FailureView
