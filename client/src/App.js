import {Component} from 'react'
import './App.scss';
import io from "socket.io-client"

const socket = io('http://localhost:8080')

class App extends Component {
  state = {
    message: "",
    myMessages: [],
    username: "",
    chat: []
  }

  componentDidMount = () => {
    socket.on('message', payload => {
      this.setState({ chat: [...this.state.chat, payload] })
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  sendMessage = (e) => {
      //console.log(socket.id())
    const userMessage = this.state.message
    const username = this.state.username
    socket.emit("message", { username, userMessage })
    this.setState({
      message: "",
      myMessages: [...this.state.myMessages,userMessage]
    })
      e.preventDefault();
    }
  render() {
    return (
      <div className="chat">
        <h1>Welcome</h1>
        <form
          className="form"
          onSubmit={this.sendMessage}>
          <input
            className="form__input"
            name="username"
            type="text"
            placeholder="Enter your Name"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <div className="form__section">
            <input
              className="form__input"
              name="message"
              type="text"
              placeholder="type your message"
              value={this.state.message}
              onChange={(e) =>  this.handleChange(e)}
              required
            />
            <button
              type="submit"
              className="form__submit"
            >Send</button>
          </div>
        </form>
        <section className="chat__section">
        <div className="chat__left">
        {this.state.myMessages.map((message,index) => {
          return (
            <div className="user" key={index}>
              <h4 className="user__message">{message}</h4>
              <span className="user__name">Me</span>
            </div>
          )
        })}
        </div>
        <div className="chat__right">
        {this.state.chat.map((payload, index) => {
          return (
            <div
              className="user"
              key={index}>
              <h4 className="user__message"> {payload.userMessage}</h4>
              <span className="user__name user__name--sender"> {payload.username}</span>
            </div> 
          )
        })}
        </div>
        </section>
      </div>
    )
  }
}

export default App;
