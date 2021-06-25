import './ChatForm.scss'
import sendIcon from '../../assets/icons/sendIcon.svg'

const ChatForm = () => {
    return(
        <from className="form">
            <textarea className="form__input" name="message" placeholder="your message"/>
            <button className="form__submit"><img className="form__submit-icon" src={sendIcon} alt="sending icon"/></button>
            
        </from>
    )
}

export default ChatForm