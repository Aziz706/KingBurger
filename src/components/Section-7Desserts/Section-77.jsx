import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactPaginate from 'react-paginate';
import s from "../Section-3/Section33.module.scss";
import { NavLink } from "react-router-dom";
import Axios from "../Axios";
import { actions } from "../../redux/Dessert";


function Items({ currentItems, price, price2 }) {
  return (
    <div className='d-flex flex-wrap gap-3 my-3'>
      {currentItems &&
        currentItems.length === 0 ? "Sorry B*tch there's nothing about what are u looking for :))" : currentItems.filter(burger => {return burger.price > parseInt(price, 10) && burger.price < parseFloat(price2, 10)}).map((slide, index) => {
          return (
            <div className={s.sliderCard1} key={slide.id} onClick={()=>slide.clickEvent()}>
                        <div className={s.sliderCardImage} style={{backgroundImage:`url(${slide.img})`,backgroundSize:'cover'}}></div>
                        <p className={s.sliderCardTitle}>{slide.name}</p>
                        <p className={s.sliderCardDescription}>{slide.price} <br /> <NavLink to={`/desserts/${slide.id}`}>Buy Now!</NavLink></p>
                        

                    </div>
          );
        })}
    </div>
  );
}
function Items2({ currentItems, price, price2 }) {
  return (
    <div className='d-flex flex-wrap gap-3 my-3'>
      {currentItems &&
        currentItems.length === 0 ? "Sorry B*tch there's nothing about what are u looking for :))" : currentItems.filter(burger => {return burger.price > parseInt(price, 10) && burger.price < parseFloat(price2, 10)}).map((slide, index) => {
          return (
            <div className={s.sliderCard2} key={slide.id} onClick={()=>slide.clickEvent()}>
                        <div className={s.sliderCardImage2} style={{backgroundImage:`url(${slide.img})`,backgroundSize:'cover'}}></div>
                        <div className="d-flex flex-column w-50">
                          <p className={s.sliderCardTitle2}>{slide.name}</p>
                          <p className={"fs-5"}>{slide.dsc}</p>
                        </div>
                        
                        <p className={s.sliderCardDescription2}>{slide.price} <br /> <NavLink to={`/desserts/${slide.id}`}>Buy Now!</NavLink></p>
                        

                    </div>
          );
        })}
    </div>
  );
}

function Section77(props) {
  const [posts, setPosts] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const [value, setValue] = useState(6);
  const [price, setMinPrice] = useState(0)
  const [price2, setMaxPrice] = useState(250)
  
  const [firstBlock, setFirstBlock] = useState(1)
  
  useEffect(() => {
    getPosts()
  }, [search, itemOffset, value * 1, price])

  function getPosts() {
    Axios(`/desserts?name_like=${search}`).then((res) => setPosts(res.data))
  }
  const endOffset = itemOffset + (value * 1);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / (value * 1));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * (value * 1)) % posts.length;
    setItemOffset(newOffset);
  };

  function show1(params) {
    setFirstBlock(params)
  }

  const Values = () => {
    return <select className="custom-select custom-select-lg w-100" value={value} onChange={(e) => setValue(e.target.value)}>
    {
      new Array(6).fill(0).map((item, index) => (
        <option key={index} value={(index + 2) * 3}>{(index + 2) * 3}</option>
      ))
    }
        <option value={"100"}>All</option>
  </select>
  }

  return (
    <div className="container w-100">
      <div>
        <div className="border w-100 p-3 my-4 bg-light text-dark">
          <NavLink className={"text-danger"} to={"/"}>
            <i class="bx bx-home-circle"></i>{" "}
          </NavLink>{" "}
          / Desserts
        </div>

        <h5 className="fw-bold">Desserts</h5>

        <div className={s.burgers}>
              <div >
            <img src="img/dessert.jpg" width={200} alt="" />
          </div>
            <div>
            <p style={{width: "96%"}} className="fw-thinner my-4 mx-5" >
              <strong>American pizza</strong> often has vegetable oil or shortening (often, but not
              always, olive oil) mixed into the dough; this is not as common in
              Italian recipes (for example, the pizza dough recipe in the
              influential Italian cookbook Il cucchiaio d'argento does not use
              oil). This can range from a small amount in relatively lean doughs,
              such as New York style, to a very large amount in some recipes for
              Chicago-style deep-dish dough. In addition, American pizza (at least
              thin-crust) is often made with a very high-gluten flour (often
              13–14% protein content) of the type also used to make bagels; this
              type of flour allows the dough to be stretched rather thinly without
              tearing, similar to strudel or phyllo.
            </p>
            </div>
        </div>
        <hr />


          <div className={s.wrapperItem1}>


            <div className={s.links}>
              <NavLink to={"/pizzas"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Pizza</NavLink>
  <NavLink to={"/desserts"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Desserts</NavLink>
  <NavLink to={"/ice-cream"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Ice-cream</NavLink>
  <NavLink to={"/burgers"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Burgers</NavLink>
  <NavLink to={"/drinks"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Drinks</NavLink> 
  <NavLink to={"/fried-chicken"} className={({ isActive, isPending }) =>
    isPending ? "btn btn-danger" : isActive ? s.active : s.nonActive
  }>Fried-chicken</NavLink>
  <hr />
  <h4 className="fw-bold mt-5">Price</h4>
  <div className="d-flex w-100 gap-3">
    <input className='form-control w-50 rounded-0' placeholder='Min' type="number" onChange={(e) => setMinPrice(e.target.value)} />-
    <input className='form-control w-50 rounded-0' placeholder='Max' type="number" onChange={(e) => setMaxPrice(e.target.value)} />
				
  </div>


            </div>
            
  
         
            
        <div className={s.products}>
          <div className={s.div1}>
            <div className="d-flex">
              <button onClick={() => show1(1)} className="btn btn-light"><i className='bx bxs-grid' ></i></button>
              <button onClick={() => show1(2)} className="btn btn-light"><i class='bx bx-menu'></i></button>
            </div>
            <div className="d-flex w-25">
              <h6 className="my-1 mx-2">Show:</h6>
              <Values />
            </div>
            <div className="d-flex w-50">
              
              <input className='form-control' placeholder='Search...' type="search" onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        
           {
            firstBlock == 1 ? <Items currentItems={currentItems} price={price} price2={price2}/> : <Items2 currentItems={currentItems} price={price} price2={price2}/>
           }
        </div>
        
    
          </div>
      
      
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={s.breakMe}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={s.pagination}
        subContainerClassName={s.pagesPagination}
        activeClassName={s.active2}
      />
          
      </div>

    </div>
  );
}

export default connect((state) => state.dessertReducer, actions)(Section77);
  