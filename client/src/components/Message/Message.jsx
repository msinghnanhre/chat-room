import ChatDisplay from '../ChatDiplay/ChatDisplay';
import ChatForm from '../ChatForm/ChatForm';
import {Component} from 'react'
import io from "socket.io-client"
import './Message.scss';

const socket = io('http://localhost:8080')

class App extends Component {
  state = {
    // message: "",
    // myId: '',
    // myMessages: [],
    username: this.props.match.params.username,
    chat: [],
    // welcomeMessage: ''
  }

  componentDidMount = () => {
    socket.on('message', payload => {
      this.setState({
        chat: [...this.state.chat, payload ],
      })
      console.log(this.state.chat,"test")
      window.localStorage.setItem('myname', payload.username)
    })
    socket.on('welcome', welcomeMessage => {
      this.setState({ welcomeMessage: welcomeMessage})
    })
  }
  
  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value})
  // }

  sendMessage = (e) => {
    // console.log(this.state.username)
    e.preventDefault();
    const userMessage = e.target.message.value
    const username = this.state.username
    const timestamp = Date.now()
    socket.emit("message", { username, userMessage, timestamp })
    this.setState({
      // message: "",
      //myMessages: [...this.state.myMessages,userMessage],
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
