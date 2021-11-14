import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/homepage/home/Home';
import Footer from './Pages/SubPages/footer/Footer';

import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/loginpage/login/Login';
import Register from './Pages/loginpage/Register/Register';
import NotFound from './Pages/SubPages/notfound/NotFound';
import ExploreAllProduct from './Pages/homepage/ProductPage/ExploreAllProduct';
import Contactus from './Pages/SubPages/contact/Contactus';
import About from './Pages/SubPages/About/About';
import Booking from './Pages/homepage/Booking/Booking';
import PrivateRoute from './Pages/loginpage/privateRout/PrivateRoute';
import DashBoard from './Pages/DashBoardPage/DashBoard/DashBoard';
 import AdminRoute from './Pages/loginpage/AdminRoute/AdminRoute';
 import AddProducts from './Pages/DashBoardPage/AdminPage/AddProduct/AddProducts';

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
            <Route path="/exploreProducts">
              <ExploreAllProduct />
            </Route>
            {/* <PrivateRoute path="/">
            <Appointment />
             </PrivateRoute>
          
            <Route path="/faqs">
            <Faqs></Faqs>
          </Route>
          
          */}
             <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute> 
            {/* <AdminRoute path="/addproduct">
              <AddProducts></AddProducts>
            </AdminRoute>  */}

            <PrivateRoute path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

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
