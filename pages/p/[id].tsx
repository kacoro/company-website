import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import dynamic from 'next/dynamic';

const Highlight = dynamic(() => import('react-highlight'));
import marked from 'marked';
marked.setOptions({
  gfm: true,
  breaks: true
});
export default function Post() {
  const router = useRouter();
  const content = `
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.
  
  ### This is a title
  
  And here's the content.
  ~~~js
  export default () => (
    <div>
      <p>Next.js is great!</p>
    </div>
  )
  ~~~
  `
  return (
    <Layout title={`${router.query.id}`}>
      
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Highlight innerHTML>{marked(content
        )}
        </Highlight>
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
}