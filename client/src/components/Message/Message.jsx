import ChatDisplay from '../ChatDiplay/ChatDisplay';
import ChatForm from '../ChatForm/ChatForm';
import {Component} from 'react'
import io from "socket.io-client"
import './Message.scss';

const socket = io('http://localhost:8080')

class App extends Component {
  state = {
    message: "",
    myMessages: [],
    username: this.props.match.params.username,
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
        <section className="message-container">
            <ChatDisplay myMessages={this.state.myMessages} chat={this.state.chat}/>
            <ChatForm submitHandler={this.sendMessage} changeHandler={this.handleChange} message={this.state.message} />
        </section>
    )
  }
}

export default App;
