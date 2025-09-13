import Style from './index.module.less';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import useColorThief from '@/hooks/useColorThief';
const Carousel = () => {
  const images: string[] = [
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62499141508/171e/b108/ef95/4bd925cc0aa95f570e6ea2f71a8381c8.jpg?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62496958174/f5f6/6a88/0e83/9d326c71218fbd23f476d4f0daf73aeb.jpg?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62500886617/4dee/381b/ef8c/370b43de752d86ef533b5bbfbabb1009.png?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62501117320/50e8/e44f/0e1d/111ee7e261954b1259267e67a7423899.jpeg?imageView&quality=89'
  ]

  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const { getColorThief } = useColorThief()


  const changeHandler = async ({ activeIndex }: { activeIndex: number }) => {
    // 加载图片
    const gradient = await getColorThief(images[activeIndex])
    setBackgroundStyle({ background: gradient })
  }

  return (
    <div className={Style.container} style={backgroundStyle}>
      <div className={Style.swiper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: `.${Style.swiperButtonNext}`,
            prevEl: `.${Style.swiperButtonPrev}`,
          }}
          pagination={{ clickable: true, el: `.${Style.swiperPagination}`, }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={changeHandler}
        >
          {
            images.map((url, index) => <SwiperSlide key={url} virtualIndex={index}>
              <div className={Style.swiperItem} >
                <img src={url} alt="轮播图" />
              </div>
            </SwiperSlide>)
          }
        </Swiper>
        <LeftOutlined className={Style.swiperButtonPrev} />
        <RightOutlined className={Style.swiperButtonNext} />
        <div className={Style.swiperPagination}></div>
      </div>
    </div>
  );
}

export default Carousel;