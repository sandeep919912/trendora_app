import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User2, Menu, X } from "lucide-react";
import ProfileCard from "../cardComponents/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/Cart/cartSlice";
import { useContext } from "react";
import { authContext } from "../../ContextApis/CurrUserContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const {currUser} = useContext(authContext);
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.items.length);

 

  useEffect(() => {
    dispatch(fetchCart());
  }, [ dispatch]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 card shadow-md p-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src="/logo2.1.png"
          alt="logo"
          className="w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300
                ${isActive ? "text-blue-600" : "hover:text-blue-500"}
                after:absolute after:left-0 after:bottom-0 after:h-[2px]
                after:bg-blue-600 after:w-0 hover:after:w-full after:transition-all
                ${isActive ? "after:w-full" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block w-2/5">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {currUser && (
            <Link to="/cart" className="relative p-2 hover:scale-110 transition">
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 text-xs font-bold">
                {itemCount}
              </span>
            </Link>
          )}

          {currUser ? (
            <button
              onClick={() => setProfile(true)}
              className="p-2 hover:scale-110 transition"
            >
              <User2 />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block py-2 px-5 rounded bg-slate-800 text-white"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Profile Popup */}
        {profile && <ProfileCard user={currUser} setProfile={setProfile} />}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 card p-5 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg"
            >
              {item.name}
            </NavLink>
          ))}

          {!currUser && (
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="w-full py-2 rounded bg-slate-800 text-white"
            >
              Login
            </button>
          )}
        </div>
      )}

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
