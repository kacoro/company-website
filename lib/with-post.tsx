import React from 'react'
import Layout from '../components/Layout'
import marked from 'marked'
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
const Highlight = dynamic(() => import('react-highlight'));
marked.setOptions({
  gfm: true,
  breaks: true
})

type Props = {
   title:string
   content:string
}
const PostPage:NextPage<Props> = (props:Props) => {
  return(
      <Layout title={props.title}>
      <h1>{props.title}</h1>
      <div>
        <Highlight innerHTML>{marked(props.content)}</Highlight>
      </div>
    </Layout>
    )
}
const withPost = (props:Props) =>{
      return ()=>(
        <PostPage title={props.title} content={props.content} />
      )
      
}
export default withPost
