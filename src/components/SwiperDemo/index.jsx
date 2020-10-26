import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Swiper from 'swiper';

import 'swiper/css/swiper.css';

import styles from './style.css';

class App extends Component {
  // constructor(props) {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.instanceSwiper()
  }

  instanceSwiper() {

    this.swiperObj = new Swiper('.swiper-container', {
      autoplay: {// 自动滑动
        delay: 3000, //3秒切换一次
        // stopOnLastSlide: false,
        disableOnInteraction: false,//
      },
      speed: 700,
      allowTouchMove: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
      },
      centeredSlides: true,
      spaceBetween: 50,
      slidesOffsetBefore: 40,
      loop: true,
      slidesPerView: 'auto',
      // slidesPerView: 1,
      on: {
        slideChangeTransitionEnd: function () {
          this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
        },
        slideChangeTransitionStart: function () {
          this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
        },
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
      observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span></span><i></i></div>';
        },
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });

  }

  componentWillReceiveProps(nextProps) {
    const { list: oldList } = this.props

    const { list: newList } = nextProps

    if (oldList !== newList) {

      this.swiperObj.destroy();

      this.swiperObj = null;

      this.instanceSwiper()

    }
  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {
    this.swiperObj.update();

    this.swiperObj.slideTo(0, 1000, false);
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

    if (this.swiperObj.destroy) { // 销毁swiper

      this.swiperObj.destroy();

      this.swiperObj = null;

    }

  }

  render() {
    const { list } = this.props

    return (
      <div className={styles.swiperFather}>

        {/* /swiper-no-swiping关闭鼠标滑动  ${styles.con}设置轮播组件的宽高*/}

        <div className={`swiper-container swiper-no-swiping ${styles.con}`} style={{ overflow: 'hidden' }}>

          <div className={`swiper-wrapper ${styles.con}`}>
            {
              list && list.length > 0 && list.map((item, index) => {
                return (
                  <div className="swiper-slide" key={`swiper${index}`}>

                    <div class="title">{item}</div>
                    <img
                      src="img/picture-1.jpg"
                      srcset="img/picture-1-2x.jpg 2x"
                      class="swiper-lazy"
                    // alt={noneImg}
                    >
                    </img>

                    {/* ...more//添加自己的业务代码 */}

                  </div>
                )
              })
            }
          </div>

        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;