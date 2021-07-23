import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state

    return (
      <div className="container">
        <h1 className="main-heading">
          Bob ate <span className="b">{mango}</span> mangoes{' '}
          <span className="b">{banana}</span> bananas
        </h1>
        <div className="sub-container">
          <div className="sub-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="mango"
            />
            <button type="button" className="button" onClick={this.mango}>
              Eat Mango
            </button>
          </div>
          <div className="sub-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="banana"
            />
            <button type="button" className="button" onClick={this.banana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
