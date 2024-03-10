import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingHome } from "./shopperHome";
import { PageNotFound } from "./pageNotfound";

export const ShoppingIndex = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white m-2 p-2 d-flex justify-content-between">
          <div>
            <h2>Paul-Shopping</h2>
          </div>
          <div className="fs-5">
            <span className="me-3">
              <Link to="home" className="text-white text-decoration-none">
                Home
              </Link>
            </span>
            <span className="me-3">Electronics</span>
            <span className="me-3">Jwelery</span>
            <span className="me-3">Men's Clothing</span>
            <span className="me-3">Women's Clothing</span>
          </div>
          <div className="fs-5">
            <span className="bi bi-person me-3"></span>
            <span className="bi bi-search me-3"></span>
            <span className="bi bi-heart me-3"></span>
            <span className="bi bi-cart4 me-3"></span>
          </div>
        </header>
        <section className="mt-3 overflow-auto" style={{ height: 500 }}>
          <Routes>
            <Route path="/" element={<ShoppingHome />} />
            <Route path="home" element={<ShoppingHome />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};
