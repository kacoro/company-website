import * as React from 'react'
import { NextPageContext } from 'next'

import { Project } from '../../interfaces'
import Layout from '../../components/Layout'
import Detail from '../../components/Solution/Detail'
import { sampleProjectData } from '../../utils/sample-project-data'
import { useRouter } from 'next/router'

type Props = {
  item?: Project
  errors?: string
}

export default function InitialPropsDetail() {
    const router = useRouter();
    const id = router.query.id
    const item = sampleProjectData.find((data: { id: number }) => data.id === Number(id))
    
    return (
      <Layout
        title={`${
          item ? item.name : 'User Detail'
        } | Next.js + TypeScript Example`}
      >
        {item && <Detail item={item} />}
      </Layout>
    )
  
}

