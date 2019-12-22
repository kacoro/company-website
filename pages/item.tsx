import Link from 'next/link'
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { PostLinkType } from '../interfaces'
import * as React from 'react'
function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}
const ItemLink: React.FunctionComponent<PostLinkType> = ({ id,title}) => (
  <li>
    <Link href="/item/[id]" as={`/item/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
      <Layout>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <ul>
        {getPosts().map(post => (
          <ItemLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
      </Layout>
    )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '': navigator.userAgent;
  return { userAgent };
};
  export default Index;