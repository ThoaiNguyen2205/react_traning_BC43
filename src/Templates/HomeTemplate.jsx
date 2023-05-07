import React, { Component } from "react";

// Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from "react-router-dom";
//import thư viện kết nối vs redux store
import { connect } from "react-redux";

class HomeTemplate extends Component {
  tinhTongTien = () => {
    let tongTien = 0;
    for (let itemCart of this.props.cart) {
      tongTien += itemCart.quantity * itemCart.price;
    }
    return tongTien;
  };
  render() {
    console.log("props template", this.props);
    return (
      <div>
        <header className="header p-3 bg-dark text-white">
          <nav className="d-flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              Cart (Demo props)
            </NavLink>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              Cars
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/react-form"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              ReactForm
            </NavLink>
            <NavLink
              to="/react-lifecycle"
              className={({ isActive }) =>
                isActive
                  ? "text-dark mx-2 nav-link bg-white"
                  : "text-white mx-2 nav-link bg-dark p-2"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
            >
              React-LifeCycle
            </NavLink>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink class="dropdown-item nav-link" to="/redux-demo1">
                  Demo Tăng giảm SL
                </NavLink>
                <NavLink class="dropdown-item nav-link" to="/redux-demo2">
                  Demo Chọn xe
                </NavLink>
                <NavLink class="dropdown-item nav-link" to="/redux-demo3">
                  Demo Nhân viên
                </NavLink>
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                API
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <div>
                  <NavLink class="dropdown-item nav-link" to="/api">
                    Api State
                  </NavLink>
                </div>
                <div>
                  <NavLink class="dropdown-item nav-link" to="/api-redux">
                    Api Redux state
                  </NavLink>
                </div>
                {/* <NavLink class="dropdown-item nav-link" to="/redux-demo3">
                  Demo Nhân viên
                </NavLink> */}
              </div>
            </div>
            <div className="ms-auto">
              <NavLink
                to="cart-page"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fa fa-cart-plus fs-3"></i> (
                {this.props.cart.length}- {this.tinhTongTien()} $)
              </NavLink>
            </div>
          </nav>
        </header>
        <main style={{ minHeight: "650px" }}>
          <Outlet></Outlet>
        </main>

        <footer className="bg-dark text-white p-3 text-center">
          <h1>Footer</h1>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.cartReducer;
export default connect(mapStateToProps)(HomeTemplate);
