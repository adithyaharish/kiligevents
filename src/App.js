import react from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Forms from './pages/Form/Form';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';


 function App() {
  return ( 
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <Navbar />

        <Switch>
          
        <Route path='/' exact component={Home} />
        
        {/*}
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/forms' component={Forms} />
        <Route path='/who are we' component={Who} />
        <Route path='/forms' component={Forms} />
  */}
        </Switch>
        
        
    </Router>
      
  );
}

export default App;
