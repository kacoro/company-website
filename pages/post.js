import { useRouter } from 'next/router';
import WithLayout from '../components/WithLayout';

const Content = () => {
    const router = useRouter();
    return (
      <>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </>
    );
  };
const Page = () => {
  const router = useRouter();

  return (
    <Content />
  );
};

export default WithLayout(Page);