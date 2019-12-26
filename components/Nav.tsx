import ActiveLink from './ActiveLink'

const Nav = () => (
    <ul className="nav nav-pills flex-column flex-md-row  mt-2 mr-md-2 mt-md-0 ">
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">首页</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/solution">
          <a className="nav-link">解决方案</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/product">
          <a className="nav-link">产品</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/news">
          <a className="nav-link">新闻</a>
        </ActiveLink>
      </li>
      <li className="nav-item">
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">关于</a>
        </ActiveLink>
      </li>
    </ul>
)

export default Nav