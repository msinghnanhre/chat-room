import backIcon from '../../assets/icons/backIcon.svg'
import './ChatDisplay.scss'

const ChatDisplay = (props) => {
    // console.log(props)
    return(
        <section className="display-box">
            <button className="display-box__back-btn"><img className="display-box__back-icon" src={backIcon} alt="sending icon"/></button>
            <h2 className="display-box__title">
                Chatroom
            </h2>
            {/* needs styling */}
            <h5>{props.welcome}</h5>
            
            {/* {props.myMessages.map((message,index) => {
            return (
                <div className="display-box__message-right" key={index}>
                    <span className="display-box__message-name">Me</span>
                    <h4 className="display-box__message-text">{message}</h4>
                </div>
            )
            })} */}
            {props.chat.map((payload, index) => {
            return (
                <div className={props.match.params.username === payload.name ? "display-box__message-right" : "display-box__message-left" } key={index}>
                    <span className="display-box__message-name"> {payload.name}</span>
                    <h4 className="display-box__message-text"> {payload.message}</h4>
                </div> 
            )
            })}
        </section>
    )
}

export default ChatDisplay