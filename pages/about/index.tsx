import * as React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example" >
    <div className="vh-100">

   
    <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
    <div className="container-xl">
    <div className="about ">
        <h1 className="pt-5">关于我们</h1>
        <p>本站使用next来实现一个纯静态的网站,并可以使用now命令发布到网上。</p>
        
    </div>
    </div>    
    </div>
   
  </Layout>
)

export default AboutPage