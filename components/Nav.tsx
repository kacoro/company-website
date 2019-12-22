import ActiveLink from './ActiveLink'

const Nav = () => (
    <ul className="nav my-2 my-md-0 mr-md-3">
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