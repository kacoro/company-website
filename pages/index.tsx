import Link from 'next/link'
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { PostLinkType } from '../interfaces'
import Swiper from '../components/Swiper/Swiper';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}


const PostLink: React.FunctionComponent<PostLinkType> = ({ id, title }) => (
  <li className="d-flex align-items-center">
    <i className="rank mr-3"></i>
    <Link href="/p/[id]" as={`/p/${id}`}>
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

function Solution(solustions: { id: string | number, name: string; info: string; img: string; }[]) {

  return (
    <div className="row my-5" >
      {solustions.map((item, index) => {
        return <Link key={index} href="/solution/[id]" as={`/solution/${item.id}`}>
          <div className="col-4 col-md text-center">
            <img className="product-img" src={item.img} alt="图片加载失败" />
            <p className="product-name">{item.name}</p>
            <p className="product-info">{item.info}</p>
          </div>
        </Link>
      })}
      <style jsx >{`
.product-img{
  max-width:100%
}
    .product-name {
      font-size: .9rem;
      color: rgba(30, 42, 54, 0.8);
      margin: .2rem 0 0 0;
  }
  .product-info {
    font-size: .8rem;
    color: rgba(30, 42, 54, 0.6);
    margin: .22rem 0 0 0;
}
`}</style>
    </div>
  )
}

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const banners = [`/images/banner/banner1.png`, `/images/banner/banner2.png`, `/images/banner/banner3.png`]
  const solustions = [
    { id: 1, name: `解决方案一`, info: `信息`, img: `/images/index/product-logo1.png`, href: `/solustion/1` },
    { id: 2, name: `解决方案二`, info: `信息`, img: `/images/index/product-logo2.png`, href: `/solustion/2` },
    { id: 3, name: `解决方案三`, info: `信息`, img: `/images/index/product-logo3.png`, href: `/solustion/3` },
    { id: 4, name: `解决方案四`, info: `信息`, img: `/images/index/product-logo4.png`, href: `/solustion/4` },
    { id: 5, name: `解决方案五`, info: `信息`, img: `/images/index/product-logo5.png`, href: `/solustion/5` },
  ]
  return (
    <Layout>
      {Swiper(banners)}
      <div className="container-xl">
        {Solution(solustions)}

      </div>
      <div style={{ background: "#edf4fa" }}>
        <div className="container-xl ">
          <div className="row">
            <ul className="col-6 my-5 ">
              {getPosts().map(post => (
                <PostLink key={post.id} id={post.id} title={post.title} />
              ))}
            </ul>
            <ul className="col-6 my-5">
              {getPosts().map(post => (
                <PostLink key={post.id} id={post.id} title={post.title} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        
        li {
          list-style: none;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};
export default Index;