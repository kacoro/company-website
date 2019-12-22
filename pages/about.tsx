import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import '../styles/theme/about.scss'
const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">

    <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
    <div className="container-xl">

      <ul>
        <li>
          <Link href="/">
            <a>团队简介</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>联系我们</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>加入我们</a>
          </Link>
        </li>
      </ul>


    </div>
    <style jsx>{`
      
      ul {
        float:left;
        width: 100%;
        height: 60px;
        margin: 75px 0 0 0;
      }

      li {
        list-style: none;
        float: left;
        width:33%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #3e9ac8;
        background: #ffffff;
        border-bottom: 1px solid #3e9ac8;
      }

      ul a {
        text-decoration: none;     
       }
    `}</style>
  </Layout>
)

export default AboutPage