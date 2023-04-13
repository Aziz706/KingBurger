import { NavLink, useNavigate } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import { connect } from "react-redux";
import { actions } from "../../redux/PizzaReducer";

function Header(props) {
  const [sticky, setSticky] = useState(false)
  const navigate=useNavigate()

  useEffect(()=> {
    const handleScroll = () => {
      setSticky(window.scrollY > 85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })

  useEffect(() =>{
    props.getUsers()
}, [])

  function home(params) {
    navigate("/")
  }

  var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '56px',
      height: '30px',
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '34px',
      width: '24px',
      position: 'absolute',
      left: "-250px",
      top: "-41px",
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#555555',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      position: "absolute",
      top: "-41px",
      
    },
    bmMorphShape: {
      fill: '#111111'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '1.4em'
    },
    bmItem: {
      width: "100%",
    },
    // bmOverlay: {
    //   background: 'rgba(0, 0, 0, 0.3)',
    //   width: "100%",
    // }
  }
  
  
  return (
    <div className={s.wrapper}>
      <div className={s.header}>

        <div className={s.headerItem1}>
          <p className="text-white my-2">WELCOME TO OUR ONLINE STORE!</p>
          <p style={{ fontSize: "20px" }} className="text-white my-2">
            <i class="bx bxs-phone"></i>123 4567 89 01
          </p>
          <button
            style={{
              fontWeight: "lighter",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            className="btn btn-light rounded-0"
            onClick={() => home()}
          >
            SHOP NOW
          </button>

          <div className="d-flex gap-3 text-white my-3">
            <NavLink to={"/basket"}>
          
              <i class="bx bxs-cart-alt"></i>{props.basket2.length}
            </NavLink>
            <NavLink>
              <i class="bx bxs-filter-alt"></i>0
            </NavLink>
            <NavLink to={"/users"}>
              <i class="bx bxs-user"></i>
            </NavLink>
            {props.token ? <NavLink className={"fs-5 d-flex"} onClick={props.logOut}><i class='bx bxs-log-out' ></i><h6>Logout</h6></NavLink> 
                : <NavLink className='fs-5 d-flex' to={"/sign-up"}>
                    <i class='bx bxs-log-in'></i><h6>Login</h6>
                </NavLink>}
          </div>

        </div>
            <div className={`${sticky ? s.sticky : ""}`}>

            

              <div className={s.headerItem2}>

          <div className={s.logo}>  
            <NavLink to={"/"}><img className="my-2 mx-5" src="img/logo.png" alt="" /></NavLink>
          </div>

          <div className={s.menuWrap}>
            <ul className={s.menu}>
              <li className={s.menuItem}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/pizzas"}>pizza</NavLink>
                <ul className={s.dropMenu}>
                  <li className={s.dropMenuItem}>
                    <NavLink href="#">sim veg</NavLink>
                  </li>
                  <li className={s.dropMenuItem}>
                    <NavLink href="#">veg special</NavLink>
                  </li>
                  <li className={s.dropMenuItem}>
                    <NavLink href="#">veg extravaganza</NavLink>
                  </li>
                  <li className={s.dropMenuItem}>
                    <NavLink href="#">simply non veg</NavLink>
                  </li>
                </ul>
              </li>
              <li className={s.menuItem}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/desserts"}>desserts</NavLink>
              </li>
              <li className={s.menuItem}>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/ice-cream"}>ice-cream</NavLink>
              </li>
              <li className={s.menuItem}>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/burgers"}>burgers</NavLink>
              </li>
              <li className={s.menuItem}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/drinks"}>drinks</NavLink>
              </li>
              <li className={s.menuItem}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/fried-chicken"}>fried-chicken</NavLink>
              </li>
            </ul>
            <div className={s.menuBurger}>
<Menu right styles={ styles } >
  <NavLink to="/users" className="text-white text-center mb-3 fs-1"><i className='bx bx-user-circle' ></i>{props.user.map(user => user.username)}</NavLink>
            <ul className={s.menu2}>
              <li className={s.menuItem2}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active2 : ""
  } to={"/pizzas"}>pizza</NavLink>
                <ul className={s.dropMenu2}>
                  <li className={s.dropMenuItem2}>
                    <NavLink href="#">sim veg</NavLink>
                  </li>
                  <li className={s.dropMenuItem2}>
                    <NavLink href="#">veg special</NavLink>
                  </li>
                  <li className={s.dropMenuItem2}>
                    <NavLink href="#">veg extravaganza</NavLink>
                  </li>
                  <li className={s.dropMenuItem2}>
                    <NavLink href="#">simply non veg</NavLink>
                  </li>
                </ul>
              </li>
              <li className={s.menuItem2}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/desserts"}>desserts</NavLink>
              </li>
              <li className={s.menuItem2}>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/ice-cream"}>ice-cream</NavLink>
              </li>
              <li className={s.menuItem2}>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/burgers"}>burgers</NavLink>
              </li>
              <li className={s.menuItem2}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/drinks"}>drinks</NavLink>
              </li>
              <li className={s.menuItem2}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/fried-chicken"}>fried-chicken</NavLink>
              </li>
              <li className={s.menuItem2}>
              <NavLink className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? s.active : ""
  } to={"/basket"}>cart <i class='bx bxs-cart-alt' ></i></NavLink>
              </li>
            </ul>
            </Menu>
            </div>
            <div className={s.searchDiv}>
              <input className="form-control rounded-0" type="search" />  
              <button className={s.searchButton}><i class='bx bx-search'></i></button>
            </div>
          </div>

            

        </div>
            </div>
        

      </div>

    </div>
  );
}

export default connect(state => state.pizzaReducer, actions) (Header)

