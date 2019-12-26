import * as React from 'react'

import { Post } from '../../interfaces'

type ListDetailProps = {
  item: Post
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: post,
}) => (
  <div>
    <img className="img-fluid"  src={post.banner} />
    <div className="container-xl my-5">
<h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{__html:post.content}}></div>
  </div>
  </div>
)

export default ListDetail
