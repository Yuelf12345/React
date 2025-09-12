import Style from './index.module.less';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ColorThief from 'colorthief';
import { useState } from 'react';
const Carousel = () => {
  const images: string[] = [
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62499141508/171e/b108/ef95/4bd925cc0aa95f570e6ea2f71a8381c8.jpg?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62496958174/f5f6/6a88/0e83/9d326c71218fbd23f476d4f0daf73aeb.jpg?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62500886617/4dee/381b/ef8c/370b43de752d86ef533b5bbfbabb1009.png?imageView&quality=89',
    'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/62501117320/50e8/e44f/0e1d/111ee7e261954b1259267e67a7423899.jpeg?imageView&quality=89'
  ]

  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const colorthief = new ColorThief();

  // 创建并加载图片的辅助函数
  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // 处理跨域问题
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const changeHandler = async ({ activeIndex }: { activeIndex: number }) => {
    // 加载图片
    const img = await loadImage(images[activeIndex]);

    // 获取调色板
    const colors = colorthief.getPalette(img, 5);
    // 将颜色转换为RGB字符串
    const colorStrings = colors.map((color: number[]) =>
      `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    );
    // 设置渐变背景
    const gradient = `linear-gradient(135deg, ${colorStrings[0]} 0%, ${colorStrings[1]} 25%, ${colorStrings[2]} 50%, ${colorStrings[3]} 75%, ${colorStrings[4]} 100%)`;
    setBackgroundStyle({
      background: gradient
    });
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
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
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