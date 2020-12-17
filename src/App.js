import react from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Who from './pages/Who/Who';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Forms from './pages/Form/Form';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { SliderData }  from './pages/Products/Data';


 function App() {
  return ( 
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <Navbar />

        <Switch>
          
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/forms' component={Forms} />
        <Route path='/who are we' component={Who} />
        
        </Switch>
        
        
    </Router>
      
  );
}

export default App;
