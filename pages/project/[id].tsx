import * as React from 'react'
import { NextPageContext } from 'next'

import { Project } from '../../interfaces'
import Layout from '../../components/Layout'
import Detail from '../../components/Project/Detail'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
  item?: Project
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query
      const item = await sampleFetchWrapper(
        `/api/project/${Array.isArray(id) ? id[0] : id}`
      )
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  render() {
    const { item, errors } = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

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
}

export default InitialPropsDetail
