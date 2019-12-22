import * as React from 'react'
import { Project } from '../../interfaces'
import Layout from '../../components/Layout'
import { sampleProjectData } from '../../utils/sample-project-data'
import { useRouter } from 'next/router'
import List from '../../components/Product/List'
import Link from 'next/link'

type Props = {
  item?: Project
  errors?: string
}

export default function InitialPropsDetail() {
    const router = useRouter();
    const id = router.query.id
    const items = sampleProjectData
    
    return (
        <Layout title="Users List | Next.js + TypeScript Example">
        <h1>Users List</h1>
        <p>
          Example fetching data from inside <code>getInitialProps()</code>.
        </p>
        <p>You are currently on: </p>
        <List items={items} />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </Layout>
    )
  
}

