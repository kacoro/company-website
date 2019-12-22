import * as React from 'react'

import { Project } from '../../interfaces'

type ListDetailProps = {
  item: Project
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: project,
}) => (
  <div>
    <h1>Detail for {project.name}</h1>
    <p>ID: {project.id}</p>
    <p>banner: <img className="img-fluid"  src={project.banner} /></p>
    <div dangerouslySetInnerHTML={{__html:project.content}}></div>
  </div>
)

export default ListDetail
