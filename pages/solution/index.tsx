import * as React from 'react'
import { Project } from '../../interfaces'
import Layout from '../../components/Layout'
import { sampleProjectData } from '../../utils/sample-project-data'
import { useRouter } from 'next/router'
import List from '../../components/Solution/List'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
type Props = {
  item?: Project
  errors?: string
}

export default function InitialPropsDetail() {
  const router = useRouter();
  const id = router.query.id
  const items = sampleProjectData
  const breadcrumbs = [{
    name:'solution',href:'/solution'
  }]
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <div className="vh-100">
        <img className="img-fluid" src={`/images/banner/dabbyTeam.png`} />
        <div className="container-xl">
          <Breadcrumb  data={breadcrumbs} />
          <List items={items} />
        
        </div>

      </div>
    </Layout>
  )

}

