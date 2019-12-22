import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import ToTop from './ToTop'
import '../styles/theme/default.scss'
type Props = {
  title?: string
}

  
  const Layout : React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
  }) =>(
    <div >
      <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css" rel="stylesheet"/>
      </Head>
      <header></header>
      <Header />
      <div className="container-xl">
      {children}
      </div>
      <Footer/>
      <ToTop scrollStepInPx={40}  delayInMs={16.66} />
    </div>
  );
  
  export default Layout;