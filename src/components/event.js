import * as React from 'react'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import { ParallaxLayer } from "@react-spring/parallax"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { StaticImage } from 'gatsby-plugin-image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-cards"

import SwiperCore, {
    EffectCards
  } from 'swiper';
SwiperCore.use([EffectCards, Autoplay]);

const EnjoyEvent = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
`

const slide = css`
    width: 60%;
    @media (max-width: 420px){
        width: 90%;
    }
    margin: 10px auto;
`

const bg = css`
    background: #F8F8FF;
    z-index: -1;
`

const Event = ({offset, factor=1}) => {
    return (
            <React.Fragment>
            <ParallaxLayer speed={0.1} offset={offset} factor={factor}>
                <EnjoyEvent>
                    <h1>Enjoy Event!!</h1>
                    <h2>研究生活は研究も大事だけど、イベントも大事！</h2>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        spaceBetween={100}
                        slidesPerView={1}
                        effect='cards'
                        navigation
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        css={slide}
                        >
                        <SwiperSlide>
                            <StaticImage src="../images/event/0.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../images/event/1.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage src="../images/event/2.jpg"/>
                        </SwiperSlide>
                    </Swiper>
                    
                </EnjoyEvent>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={offset} factor={factor} css={bg} />
            </React.Fragment>
    )
}
export default Event