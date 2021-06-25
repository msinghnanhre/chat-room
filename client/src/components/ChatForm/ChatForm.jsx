import './ChatForm.scss'
import sendIcon from '../../assets/icons/sendIcon.svg'

const ChatForm = (props) => {
    return(
        <form className="form" onSubmit={props.submitHandler}>
            {/* <input className="form__name-input" name="username" placeholder="enter name to start" required/> */}
            <textarea 
                className="form__input" 
                type="text" 
                name="message" 
                value={props.message}
                onChange={(e) => props.changeHandler(e)}
                placeholder="your message" 
                required/>
            <button className="form__submit" type="submit">
                <img className="form__submit-icon" src={sendIcon} alt="sending icon"/>
            </button>
        </form>
    )
}

export default ChatForm