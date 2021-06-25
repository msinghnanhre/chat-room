import Message from './components/Message/Message'
import WelcomePage from './components/WelcomePage/WelcomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.scss';


const App = () => {

    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/message/:username" component={Message}/>
        </Switch>
          
        </div>
      </BrowserRouter>
    )
  
  
}

export default App;
