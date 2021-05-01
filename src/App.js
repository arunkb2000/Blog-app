import './App.css';
import {BrowserRouter as Router,Switch, Route}from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import InfoPage from './components/InfoPage';


// Router has been used along with switch and routes..
function App() {
  return (
    <Router>
    <div className="App">
        <Header />
     <Switch>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/posts/:id" component={InfoPage}/>
       <Route component={NotFound}/> 
     </Switch>
        
    </div>
    </Router>
  );
}

export default App;
