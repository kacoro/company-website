import * as React from 'react'

import { Project } from '../../interfaces'

type ListDetailProps = {
  item: Project
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: project,
}) => (
  <div>
    <img className="img-fluid"  src={project.banner} />
    <div className="container-xl my-5">
    <div dangerouslySetInnerHTML={{__html:project.content}}></div>
    </div>
  </div>
)

export default ListDetail
