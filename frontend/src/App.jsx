import Navbar from "./Components/Common/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./UserAuthentication/Login";
import Signup from "./UserAuthentication/Signup";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import Personal_Info from "./pages/ProfilePafges/Personal_Info";
import Orders from "./pages/ProfilePafges/Orders";
import Settings from "./pages/ProfilePafges/Settings";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import CategoryProduct from "./Components/CategoryProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminRegister from "./AdminAuthentication/AdminRegister";
import AdminLogin from "./AdminAuthentication/AdminLogin";
import Admin from "./pages/Admin/Admin";
import AdminHome from "./pages/Admin/AdminHome";
import AllUsers from "./pages/Admin/AllUsers";
import AllQueries from "./pages/Admin/AllQueries";
import AllProducts from "./pages/Admin/AllProducts";
import AddProducts from "./pages/Admin/AddProducts";
import Checkout from "./pages/Checkout";

function App() {
  const location = useLocation();

  // ✅ HIDE NAVBAR ON ADMIN PAGES
  const hideNavbar =
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<Personal_Info />} />
          <Route path="personal_info" element={<Personal_Info />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/:id" element={<Checkout />} />

        {/* ✅ ADMIN ROUTES (NO NAVBAR HERE) */}
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} >
          <Route index element={<AdminHome/>}/>
          <Route path="home" element={<AdminHome/>}/>
          <Route path="users" element={<AllUsers/>}/>
          <Route path="queries" element={<AllQueries/>}/>
          <Route path="products" element={<AllProducts/>}/>
          <Route path="add-products" element={<AddProducts/>}/>
        </Route>
      </Routes>



      

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
