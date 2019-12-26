import Link from 'next/link'
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { PostLinkType } from '../interfaces'
import SwipeableViews from 'react-swipeable-views';
import { virtualize,autoPlay,bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import Pagination from '../components/Swipe/Pagination';

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));

import * as React from 'react'
import { useState } from 'react';
function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}
const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const PostLink: React.FunctionComponent<PostLinkType> = ({ id,title}) => (
  <li>  
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{title}</a>
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

function slideRenderer(params: { index: any; key: any; }) {
  const { index, key } = params;

  switch (mod(index, 3)) {
    case 0:
      return (
        <div key={key} >
           <img className="img-fluid"  src={`/images/banner/banner1.png`} />
        </div>
      );

    case 1:
      return (
        <div key={key} >
         <img className="img-fluid"  src={`/images/banner/banner2.png`} />
        </div>
      );

    case 2:
      return (
        <div key={key} >
          <img className="img-fluid"  src={`/images/banner/banner3.png`} />
        </div>
      );

    default:
      return null;
  }
}
const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const [index, setIndex] = useState(0)
    function handleChangeIndex(index: number){
        setIndex(mod(index,3))
    }

    return (
      <Layout>
        <div className="swiper">
      <EnhancedSwipeableViews  index={index} onChangeIndex={handleChangeIndex} enableMouseEvents slideRenderer={slideRenderer} />
      <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />
      </div>
      <div className="container-xl">
        <div className="my-5 d-flex justify-content-center align-content-around flex-wrap flex-row"> 
        <div className="col-6 col-md text-center">
            <img src="/images/index/product-logo11.png" alt="图片加载失败" />
            <p className="product-name">飞缴</p>
            <p className="product-info">聚合财税支付平台</p>
            </div>
            <div className="col-6 text-center">
            <img src="/images/index/product-logo2.png" alt="图片加载失败" />
            <p className="product-name">飞缴</p>
            <p className="product-info">聚合财税支付平台</p>
            </div>
            <div className="col  text-center">
            <img src="/images/index/product-logo3.png" alt="图片加载失败" />
            <p className="product-name">飞缴</p>
            <p className="product-info">聚合财税支付平台</p>
            </div>
            <div className="col  text-center">
            <img src="/images/index/product-logo4.png" alt="图片加载失败" />
            <p className="product-name">飞缴</p>
            <p className="product-info">聚合财税支付平台</p>
            </div>
            <div className="col text-center">
            <img src="/images/index/product-logo5.png" alt="图片加载失败" />
            <p className="product-name">飞缴</p>
            <p className="product-info">聚合财税支付平台</p>
            </div>
           
   
        </div>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
     
      </div>
      
      <style jsx>{`
        .swiper{
          position:relative;
        }
        .product-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: rgba(30, 42, 54, 0.8);
          margin: .2rem 0 0 0;
      }
      .product-info {
        font-size: 1rem;
        color: rgba(30, 42, 54, 0.6);
        margin: .22rem 0 0 0;
    }
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