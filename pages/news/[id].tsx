import * as React from 'react'
import { NextPageContext } from 'next'

import {  Post } from '../../interfaces'
import Layout from '../../components/Layout'
import Detail from '../../components/Post/Detail'
import { samplePostData } from '../../utils/sample-post-data'
import { useRouter } from 'next/router'

type Props = {
  item?: Post
  errors?: string
}

export default function InitialPropsDetail() {
    const router = useRouter();
    const id = router.query.id
    const item = samplePostData.find((data: { id: number }) => data.id === Number(id))
    
    return (
      <Layout
        title={`${
          item ? item.title : 'User Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <Detail item={item} />}
      </Layout>
    )
  
}

