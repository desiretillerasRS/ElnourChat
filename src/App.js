

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnterName from './EnterName';
import Chat from './Chat';


function App() {



  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/enterName">
              <EnterName />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
