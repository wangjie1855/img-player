import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import styles from './style.css';
// import axios from 'axios';
// import qs from 'qs'

// const noneImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";

class SlowTransition extends Component {
  // constructor(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     list: [],
  //   }
  // }

  // componentWillMount() {

  // }

  componentDidMount() {
    console.log('SlowTransition componentDidMount()');
    this.instanceSwiper();
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
      // loop: true,
      slidesPerView: 'auto',
      // slidesPerView: 1,
      on: {
        slideChangeTransitionEnd: function () {
          // console.log('slideChangeTransitionEnd: function ()');
          this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
          // console.log('是否是末尾位置', this.isEnd);
          if (this.isEnd) {
            console.log('是末尾位置');
          }
        },
        slideChangeTransitionStart: function () {
          // console.log('slideChangeTransitionStart: function ()');
          this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
          // console.log('是否是末尾位置', this.isEnd);
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span></span><i></i></div>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
      observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
    });

  }

  componentWillReceiveProps(nextProps) {
    console.log('SlowTransition componentWillReceiveProps')//, nextProps)
    const { list: oldList } = this.props

    const { list: newList } = nextProps

    if (oldList !== newList) {

      this.swiperObj.destroy();

      this.swiperObj = null;

      this.instanceSwiper()

    }
  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('SlowTransition componentWillUpdate(nextProps, nextState)');
    this.swiperObj.update();

    this.swiperObj.slideTo(0, 1000, false);
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

  componentWillUnmount() {
    console.log('SlowTransition componentWillUnmount');

    if (this.swiperObj.destroy) { // 销毁swiper

      this.swiperObj.destroy();

      this.swiperObj = null;

    }

  }

  render() {
    // console.log('render');
    const { list } = this.props

    return (
      <div className={styles.swiperFather}>
        <h2>{this.props.title}
        </h2>

        {/* /swiper-no-swiping关闭鼠标滑动  ${styles.con}设置轮播组件的宽高*/}

        <div className={`swiper-container swiper-no-swiping ${styles.con}`} style={{ overflow: 'hidden' }}>

          <div className={`swiper-wrapper ${styles.con}`}>
            { //...more//添加自己的业务代码
              list && list.length > 0 && list.map((item, index) => {
                return (
                  <div className="swiper-slide" key={`swiper${index}`}>

                    <div className="title">{`作品${index}`}</div>
                    <img
                      data-src={item}
                      className="swiper-lazy"
                      alt="{图片}"

                    >
                    </img>

                  </div>
                )
              })
            }
          </div>

        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

      </div>
    );
  }
}

// App.propTypes = {

// };

export default SlowTransition;