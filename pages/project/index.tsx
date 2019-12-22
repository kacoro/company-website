import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/Project/List'
import { Project } from '../../interfaces'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  items: Project[]
  pathname: string
}
declare const __NEXT_DATA__: any
const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  // if (process.browser) {
  //   console.log(WithInitialProps)
  //     return __NEXT_DATA__.props.pageProps;
  // }
  const items: Project[] = await sampleFetchWrapper(
    '/api/project'
  )
  
  return { items, pathname }
}

export default WithInitialProps
