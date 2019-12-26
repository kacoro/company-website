import * as React from 'react'
import { Post } from '../../interfaces'
import Layout from '../../components/Layout'
import { samplePostData } from '../../utils/sample-post-data'
import { useRouter } from 'next/router'
import List from '../../components/Post/List'
import Link from 'next/link'

type Props = {
  item?: Post
  errors?: string
}

export default function InitialPropsDetail() {
  const router = useRouter();
  const id = router.query.id
  const items = samplePostData

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <div className="min-vh-100">
        <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
        <div className="container-xl my-5">
          <List items={items} />
        </div>
      </div>
    </Layout>
  )

}

