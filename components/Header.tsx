
import Link from 'next/link'
import Nav from './Nav'
import { useState } from 'react'
import classNames from 'classnames'
function Header(){
  const [expand, setExpand] = useState(false)
  function handleChange(){
    setExpand(!expand)
  }
   return(
    <nav className="navbar navbar-expand-md navbar-light bg-light bd-navbar fixed-top">
      <div className="container-xl  ">
      <img  className="mr-md-auto" src={`/images/nav-logo.png`} />
      <button onClick={() => { handleChange() }} className="navbar-toggler" type="button" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className={classNames(`collapse navbar-collapse justify-content-end`,{'show':expand})} >
        <Nav />
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
    </div>
      <style jsx>{`
     .bd-navbar {
         box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
     }
    `}
      </style>
  </nav>
   )
} 

export default Header;