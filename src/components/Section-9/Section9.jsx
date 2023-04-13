import React from 'react'
import s from "./Section9.module.scss"
function Section9() {
  return (
    <>
    
    <section className='container w-100'>
        <div className={s.wrapper}>
            <div className={s.wrapperItem}>
                <div className="container text-center">
                  <h2>Deal Of The Day</h2>
                  <div className={s.borders}>
                   <div style={{backgroundColor: "#c00a27"}} className="border-0"><span>0</span> <br />Days</div>
                   <div style={{backgroundColor: "#c00a27"}} className="border-0"><span>00</span> <br />Hours</div>
                   <div style={{backgroundColor: "#c00a27"}} className="border-0"><span>00</span> <br />Minutes</div>
                   <div style={{backgroundColor: "#c00a27"}} className="border-0"><span>00</span> <br />Seconds</div>
                  </div>
                  <div className={s.flex}>
                    <h2>Free</h2>
                    <p>pizza <br /> diablo</p>
                  </div>
                  <p className='fz-2'>WITH HOUR NEXT ONLINE ORDER</p>
                </div>
            </div>
        </div>
        
    </section>
    {/* <nav style={{width: "100vw", marginLeft: "-20px", paddingLeft: "200px", display: "flex", marginTop: "80px"}} className="navbar navbar-expand-lg navbar-light bg-light">
  <h2 className="navbar-brand my-2" href="#">Connect with us</h2>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto my-3">
      <li className="nav-item">
        <a className="nav-link" href="#"><i style={{fontSize:"30px"}} className='bx bxl-facebook'></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i style={{fontSize:"30px"}} className='bx bxl-twitter' ></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i style={{fontSize:"30px"}} class='bx bxl-instagram' ></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i style={{fontSize:"30px"}} class='bx bxl-pinterest-alt' ></i></a>
      </li>
      <li className='mx-5'><h2 className="navbar-brand my-2">Newsletter</h2></li>
      
    </ul>
    
    <span className="navbar-text w-50 d-flex">
      <input placeholder='Email *' type="email" className='form-control w-75 rounded-0 bg-transparent' />
      <button style={{backgroundColor: "#c00a27", fontWeight: "600"}} className='btn rounded-0 w-25 text-white p-2 mx-3'>SUBSCRIBE</button>
    </span>
  </div>
</nav> */}
<div style={{marginBottom: "-65px", marginTop: "80px"}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.111967233406!2d37.025932700268285!3d55.80976762027352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b543e9713812b9%3A0xfdb6eb6aa7f95425!2sMakdonal&#39;ds!5e1!3m2!1sen!2s!4v1679648482250!5m2!1sen!2s" height={450} style={{border:"0", width: "100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</>
  )
}

export default Section9