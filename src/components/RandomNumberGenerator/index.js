import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandomNum = () => {
    const randomNum = Math.round(Math.random() * 100)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="about">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.onRandomNum}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
