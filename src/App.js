import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/homepage/home/Home';
import Footer from './Pages/SubPages/footer/Footer';
import NotFound from './Pages/SubPages/notfound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/loginpage/login/Login';
import Register from './Pages/loginpage/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {/* <PrivateRoute path="/">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path="/booking/:servicesId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/faqs">
              <Faqs></Faqs>
            </Route>*/}

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
