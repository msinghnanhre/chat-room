import backIcon from '../../assets/icons/backIcon.svg'
import './ChatDisplay.scss'

const ChatDisplay = (props) =>{
    return(
        <section className="display-box">
            <button className="display-box__back-btn"><img className="display-box__back-icon" src={backIcon} alt="sending icon"/></button>
            <h2 className="display-box__title">
                Chatroom
            </h2>
            {props.myMessages.map((message,index) => {
            return (
                <div className="display-box__message-right" key={index}>
                    <span className="display-box__message-name">Me</span>
                    <h4 className="display-box__message-text">{message}</h4>
                </div>
            )
            })}
            {props.chat.map((payload, index) => {
            return (
                <div className="display-box__message-left" key={index}>
                    <span className="display-box__message-name"> {payload.username}</span>
                    <h4 className="display-box__message-text"> {payload.userMessage}</h4>
                </div> 
            )
            })}
        </section>
    )
}

export default ChatDisplay