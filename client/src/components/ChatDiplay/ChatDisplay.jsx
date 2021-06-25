import backIcon from '../../assets/icons/backIcon.svg'
import './ChatDisplay.scss'

const ChatDisplay = (props) => {

    return(
        <section className="display-box">
            <button className="display-box__back-btn"><img className="display-box__back-icon" src={backIcon} alt="sending icon"/></button>
            <h2 className="display-box__title">
                Chatroom
            </h2>

            <h5 className="display-box__message">{props.welcome}</h5>

            {props.chat.map((payload, index) => {
            return (
                <div className={props.match.params.username === payload.name ? "display-box__message-right" : "display-box__message-left" } key={index}>
                    <span className="display-box__message-name"> {props.match.params.username === payload.name ?  "Me" : payload.username }</span>
                    <h4 className="display-box__message-text"> {props.match.params.username === payload.name ?  payload.message : payload.userMessage }</h4>
                </div> 
            )
            })}
        </section>
    )
}

export default ChatDisplay