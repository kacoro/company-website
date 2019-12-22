
import Link from 'next/link'
import Nav from './Nav'

const Header = () => (
  <div className="bd-navbar border-bottom shadow-sm  p-3 px-md-4 mxb-3 bg-white">
    <div className="container-xl d-flex flex-column flex-md-row align-items-center  ">
      <img  className="mr-md-auto" src={`images/nav-logo.png`} />
    {/* <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5> */}
    <Nav />
    <a className="btn btn-outline-primary" href="#">Sign up</a>
    <style jsx>{`
      .bd-navbar {
        background-color: #563d7c;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
    }
      `}
      
      </style>
      </div>
  </div>
);

export default Header;