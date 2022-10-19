import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    const {reviewsData} = this.props
    if (count < reviewsData.length-1) {
      this.setState(prevState => ({count:prevState.count+1}))
    }
  }

  onDecrement = () => {
    const {count} = this.state 
    if (count >= 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsData} = this.props 
    const {imgUrl, Brand, description, Price} = reviewsData[count]
    return (
      <div className="bg-container">
        <div className='card'>
          <h1 className="heading">B R A N D||S T O R E</h1>
          <div className="img-person">
            <img className="img-style" src={imgUrl} alt={Price}/>
          </div>
          <div className="img-person">
            <div className="arrows-content-container">
              <button type="button" className="btn-style" onClick={this.onDecrement} testid="leftArrow">
                <img className="img-arrows" src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left-arrow"/>
              </button>
              <p className="price-name">{Price}</p>
              <button type="button" className="btn-style" onClick={this.onIncrement} testid="rightArrow">
                <img className="img-arrows" src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right-arrow"/>
              </button>
            </div>
          </div>
          <div>
            <p className="paragraph">{Brand}</p>
            <p className="paragraph-1">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel