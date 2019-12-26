import * as React from 'react'
import Link from 'next/link'

import { Post, PostLinkType } from '../../interfaces'

type Props = {
  data: Post
}
const PostLink: React.FunctionComponent<PostLinkType> = ({ id, title }) => (
  <li className="d-flex align-items-center">
    <i className="rank mr-3"></i>
    <Link href="/news/[id]" as={`/news/${id}`}>
      <a className="news-title">{title}</a>
    </Link>
    <span className="news-date ml-auto" >{new Date().toLocaleDateString()}</span>

    <style jsx>{`
        .rank{
          float: left;
          display: inline-block;
          width: .5rem;
          
          height: .5rem;
          background: #7b8191;
        }
        li {
          font-size:.8rem;
          list-style:none;
          margin: 5px 0;
          color:#7b8191;
        }

        a {
          color:#7b8191;
          cursor: pointer;
          text-decoration: none;
          
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </li>
);

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
    <PostLink key={data.id} id={data.id} title={data.title} />
)

export default ListItem
