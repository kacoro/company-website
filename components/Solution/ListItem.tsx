import * as React from 'react'
import Link from 'next/link'

import { Project } from '../../interfaces'

type Props = {
  data: Project
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/solution/[id]" as={`/solution/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
