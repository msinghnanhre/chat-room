import ChatDisplay from '../ChatDiplay/ChatDisplay';
import ChatForm from '../ChatForm/ChatForm';

import './Message.scss';

const Message = () => {
    return (
        <section className="message-container">
            <ChatDisplay/>
            <ChatForm/>
        </section>
    )
}

export default Message