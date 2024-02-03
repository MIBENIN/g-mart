import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";
import "./App.css";

import { premiumFruits } from "./utils/premiumfruitsdata"; //premiumfruits data
import { Beauty } from "./utils/beauty"; //beauty data
import { SportsToysLuggages } from "./utils/sportstoysluggages"; //sportstoysLuggages data
import { Fashion } from "./utils/fashion"; //fashion
import { Electronics } from "./utils/electronics"; //electronics
import { HomeKitchenNeeds } from "./utils/HomeKitchenNeeds"; //homekitchen

import Header from "./components/Header";
import Home from "./pages/Home";
import MainCategory from "./pages/MainCategory";
import Category from "./pages/Category";
import TopNavbar from "./components/navbar/TopNavbar";
import SubCategory from "./pages/SubCategory";
import ProductDetail from "./pages/ProductDetail";
import AllCatogries from "./pages/AllCatogries";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Search from "./pages/Search";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Faq from "./pages/Faq";
// import Infinitscroll from "./pages/Infinitscroll";
import LoginSignup from "./pages/LoginSignup";
import Layout from "./pages/Layout";
import FavouriteList from './pages/FavouriteList';
import { useAppContext } from "./context/AppContext";
import { useEffect, useState } from "react";
import Contact from "./pages/Contact";

function App() {
  console.log("premiumfruits data :", premiumFruits);
  // data for search products
  const totalProducts = Object.values(premiumFruits)
    .concat(Object.values(SportsToysLuggages))
    .concat(Object.values(Fashion))
    .concat(Object.values(Beauty))
    .concat(Object.values(Electronics))
    .concat(Object.values(HomeKitchenNeeds))
    .flat();
  // console.log("total products", totalProducts);
  //for user auth
  const { currentUser, setCurrentUser,getCartItems,getTotalItems} = useAppContext();
  const localStorageUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a user with a token in local storage
    const loggedInUser = localStorageUsers.find(user => user.token !== null);
    console.log("loggged in user :",loggedInUser);
    if (loggedInUser) {
      // Set the current user and mark as logged in
      setCurrentUser(loggedInUser);
      setIsLoggedIn(true);
      // getCartItems()
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  console.log("currentuser:",currentUser);
  return (
    <>
      <Router>
        {/* <TopNavbar />
        <Header /> */}
        <Routes>
          <Route path="/loginsignup" element={currentUser ? <Navigate to="/" /> :<LoginSignup/> } />
          <Route path="" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/wishlist" element={<FavouriteList />} />
            <Route path="/" element={<Home />} />
            {/* premium fruits routes */}
            <Route
              path="/premiumfruits"
              element={<MainCategory products={premiumFruits} />}
            />
            <Route
              path="/premiumfruits/:category"
              element={<Category products={premiumFruits} />}
            />
            <Route
              path="/premiumfruits/:category/:subcategory"
              element={<SubCategory products={premiumFruits} />}
            />
            <Route
              path="/premiumfruits/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/*beauty routings */}
            <Route
              path="/Beauty"
              element={<MainCategory products={Beauty} />}
            />
            <Route
              path="/Beauty/:category"
              element={<Category products={Beauty} />}
            />
            <Route
              path="/Beauty/:category/:subcategory"
              element={<SubCategory products={Beauty} />}
            />
            <Route
              path="/Beauty/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/*fashion routings */}
            <Route
              path="/Fashion"
              element={<MainCategory products={Fashion} />}
            />
            <Route
              path="/Fashion/:category"
              element={<Category products={Fashion} />}
            />
            <Route
              path="/Fashion/:category/:subcategory"
              element={<SubCategory products={Fashion} />}
            />
            <Route
              path="/Fashion/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/*Electronics routings */}
            <Route
              path="/Electronics"
              element={<MainCategory products={Electronics} />}
            />
            <Route
              path="/Electronics/:category"
              element={<Category products={Electronics} />}
            />
            <Route
              path="/Electronics/:category/:subcategory"
              element={<SubCategory products={Electronics} />}
            />
            <Route
              path="/Electronics/:category/:subcategory/:product"
              element={<ProductDetail />}
            />

            {/*HomeKitchenNeeds routings */}
            <Route
              path="/HomeKitchenNeeds"
              element={<MainCategory products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category"
              element={<Category products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category/:subcategory"
              element={<SubCategory products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/* sportsToysLuggages */}
            <Route
              path="/SportsToysLuggages"
              element={<MainCategory products={SportsToysLuggages} />}
            />
            <Route
              path="/SportsToysLuggages/:category"
              element={<Category products={SportsToysLuggages} />}
            />
            <Route
              path="/SportsToysLuggages/:category/:subcategory"
              element={<SubCategory products={SportsToysLuggages} />}
            />
            <Route
              path="/SportsToysLuggages/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/*homekitchen routings */}
            <Route
              path="/HomeKitchenNeeds"
              element={<MainCategory products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category"
              element={<Category products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category/:subcategory"
              element={<SubCategory products={HomeKitchenNeeds} />}
            />
            <Route
              path="/HomeKitchenNeeds/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/* search */}
            <Route
              path="/search/"
              element={<Search products={totalProducts} />}
            />
            <Route
              path="/search/:searchTerm"
              element={<Search products={totalProducts} />}
            />
            <Route
              path="/search/:searchTerm/:productId"
              element={<ProductDetail />}
            />
            {/* wishlist */}
            <Route
              path="/wishlist/:category/:subcategory/:product"
              element={<ProductDetail />}
            />
            {/* cart */}
            <Route path="/cart" element={<Cart />} />
            {/* allcategory */}
            <Route path="/allcategory" element={<AllCatogries />} />
            {/* contactus */}
            <Route path="/contact-us" element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
