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

const PostLink: React.FunctionComponent<PostLinkType> = ({ id,title}) => (
  <li>  
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>· {title}</a>
    </Link>
    
    <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </li>
);
const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
      <Layout>
      <img className="img-fluid"  src={`/images/banner/banner1.png`} />
      <div className="container-xl">
      <ul>

        {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
      </div>
      
      <style jsx>{`
      
        ul {
          padding: 0;
        }

        li {
          list-style: none;
        }

      `}</style>
      </Layout>
    )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '': navigator.userAgent;
  return { userAgent };
};
  export default Index;