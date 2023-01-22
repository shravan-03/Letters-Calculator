import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangePhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letter-calculate-container">
          <div className="calculator-container">
            <h1 className="heading">
              Calculate the <br /> Letters you <br /> enter
            </h1>
            <div className="input-phrase-container">
              <label htmlFor="phraseText" className="label">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                placeholder="Enter the phrase"
                id="phraseText"
                value={inputPhrase}
                onChange={this.onChangePhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
