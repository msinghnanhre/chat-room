import backIcon from '../../assets/icons/backIcon.svg'
import './ChatDisplay.scss'

const ChatDisplay = () =>{
    return(
        <section className="display-box">
            <button className="display-box__back-btn"><img className="display-box__back-icon" src={backIcon} alt="sending icon"/></button>
            <h2 className="display-box__title">
                Chatroom
            </h2>
            <p className="display-box__message-right">this is a message</p>
            <p className="display-box__message-left">this is a message</p>
            <p className="display-box__message-left">this is a message and a very long one.</p>
        </section>
    )
}

export default ChatDisplay