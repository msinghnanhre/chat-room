import ChatDisplay from '../ChatDiplay/ChatDisplay';
import ChatForm from '../ChatForm/ChatForm';
import {Component} from 'react'
import io from "socket.io-client"
import './Message.scss';

const socket = io('http://localhost:8080')

class App extends Component {
  state = {
    username: this.props.match.params.username,
    chat: [],
  }

  componentDidMount = () => {
    socket.on('message', payload => {
      this.setState({
        chat: [...this.state.chat, payload ],
      })
      console.log(this.state.chat,"test")
    })
    socket.on('welcome', welcomeMessage => {
      this.setState({ welcomeMessage: welcomeMessage})
    })
  }
  

  sendMessage = (e) => {
    e.preventDefault();
    const userMessage = e.target.message.value
    const username = this.state.username
    const timestamp = Date.now()
    socket.emit("message", { name: username, message: userMessage, timestamp: timestamp })
    this.setState({
      chat: [...this.state.chat, { name: username, message: userMessage, timestamp:  timestamp }],
    }) 
    }
    
  render() {
    return (
      <section className="message-container">
        <ChatDisplay id={this.state.myId} chat={this.state.chat.sort(chatMessage => chatMessage.timestamp)} welcome={this.state.welcomeMessage} {...this.props} />
        <ChatForm submitHandler={this.sendMessage} changeHandler={this.handleChange} message={this.state.message} />
      </section>
    )
  }
}

export default App;
