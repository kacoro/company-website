import ActiveLink from './ActiveLink'

const Nav = () => (
    <ul className="nav nav-pills flex-column flex-md-row  mt-2 mr-md-2 mt-md-0 ">
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/product">
          <a className="nav-link">Product</a>
        </ActiveLink>
      </li>
     
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li>
    </ul>
)

export default Nav