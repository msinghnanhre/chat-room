import Lottie from 'react-lottie';
import hi from '../../assets/animations/hi-sec.json'
import io from "socket.io-client"
import {Redirect} from 'react-router-dom'
import './WelcomePage.scss'

const socket = io('http://localhost:8080')

const WelcomePage = (props) => {
    const hiAnimate = {
        loop: true,
        autoplay: true,
        animationData: hi,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = e.target.username.value
        props.history.push(`/message/${newUser}`)
    }

    return (
        <div className="welcome__container">
            <Lottie options={hiAnimate} height={400} width={400} />
            <form className="welcome__form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="username"
                    className="welcome__input"
                    placeholder="Enter Your Name"
                    type="text"
                    required
                />
                <button className="welcome__submit">Save</button>
            </form>
        </div>
    )
}

export default WelcomePage