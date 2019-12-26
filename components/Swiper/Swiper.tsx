
import * as React from 'react'
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, autoPlay, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import Pagination from './Pagination';

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));


function Swiper(props: string[]) {
  const [index, setIndex] = useState(0)
  function handleChangeIndex(index: number) {
    setIndex(mod(index, 3))
  }
  function slideRenderer(params: { index: any; key: any; }) {
    const { index, key } = params;
    var now = mod(index, 3)
    return (
      <div key={key} >
        <img className="img-fluid" src={props[now]} />
      </div>
    );
  }
  return (
    <div className="swiper">
      <EnhancedSwipeableViews interval={5000} index={index} onChangeIndex={handleChangeIndex} enableMouseEvents slideRenderer={slideRenderer} />
      
      <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />

  <a className="carousel-control-prev" onClick={()=>{
    handleChangeIndex(index-1)
  }} href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo"  onClick={()=>{
    handleChangeIndex(index+1)
  }}  data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
      <style jsx>{`
            .swiper{
              position:relative
            }
          `}</style>
    </div>
  )

}

export default Swiper