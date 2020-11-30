import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Components/layout/Navbar';
import Index from './Components/layout/Index';
import { Provider } from './context'


function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <switch>
              <Route exact path="/" component={Index} />
            </switch>
          </div>
        </>
        
      </Router>
    </Provider>
  );
}

export default App;
