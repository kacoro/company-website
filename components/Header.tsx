
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
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button onClick={() => { handleChange() }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className={classNames(`collapse navbar-collapse `,{'show':expand})} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Nav />
        {/* <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
   )
} 

// const Header = () => (
   
//   <div className="bd-navbar navbar border-bottom shadow-sm  p-3 px-md-4 mxb-3 bg-white">
//     <div className="container-xl d-flex flex-column flex-md-row align-items-center  ">
//       <img  className="mr-md-auto" src={`images/nav-logo.png`} />
//     {/* <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5> */}
//     <Nav />
//     <a className="btn btn-outline-primary" href="#">Sign up</a>
//     <style jsx>{`
//       .bd-navbar {
//         background-color: #563d7c;
//         box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
//     }
//       `}
      
//       </style>
//       </div>
//   </div>

// );

export default Header;