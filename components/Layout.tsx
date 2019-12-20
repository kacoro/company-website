import * as React from 'react'
import Header from './Header'
import Head from 'next/head'
import ToTop from './ToTop'
type Props = {
  title?: string
}
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    overflow:'hidden'
  };
  
  const Layout : React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
  }) =>(
    <div style={layoutStyle}>
      <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      <Header />
      {children}
      <ToTop scrollStepInPx={1}  delayInMs={16.66} />
    </div>
  );
  
  export default Layout;