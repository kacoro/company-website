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
         <div className="min-vh-100">
        <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
        <div className="container-xl my-5">
          <List items={items} />
        </div>
      </div>
      </Layout>
    )
  
}

