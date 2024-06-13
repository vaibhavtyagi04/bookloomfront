import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import books_banner from "./Components/Assets/banner_books.png";
import articles_banner from "./Components/Assets/banner_articles.png";
import comics_banner from "./Components/Assets/banner_comics.png";
import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/books" element={<ShopCategory banner={books_banner} category="books" />} />
          <Route path="/articles" element={<ShopCategory banner={articles_banner} category="articles" />} />
          <Route path="/comics" element={<ShopCategory banner={comics_banner} category="comics" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
