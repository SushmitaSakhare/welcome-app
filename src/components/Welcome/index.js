// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getText()

    return (
      <div className="container">
        <h1 className="heading-1">Welcome</h1>
        <h1 className="msg">Thank you! Happy Learning</h1>
        <button className="button" type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
