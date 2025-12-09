import{Routes, Route } from "react-router"
import Home from "./Home"
import Register from "./Register"
import Signin from "./Signin"
import Header from "./Header"
import Dashboard from "./Dashboard"
import ProtectedUser from "./components/ProtectedUser"
import ProtectedAuth from "./components/ProtectedAuth"
import Order from "./pages/Order"
import Manage from "./pages/Manage"
import DashboardOverview from "./pages/DashboardOverview"
import Create from "./pages/Create"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import UserOrder from "./pages/UserOrder"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Message from "./pages/Message"
function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/dashboard" element={<ProtectedAuth><Dashboard/></ProtectedAuth>}>
        <Route index element={<DashboardOverview/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="create/:id" element={<Create/>}/>
        <Route path="manage" element={<Manage/>}/>
        <Route path="order" element={<Order/>}/>
        <Route path="message" element={<Message/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orderHistory" element={<UserOrder/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={<ProtectedUser><Register/></ProtectedUser>}/>
        <Route path="/signin" element={<ProtectedUser><Signin/></ProtectedUser>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
