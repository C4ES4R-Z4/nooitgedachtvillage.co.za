import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { createUseStyles } from "react-jss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
    const classes = styles();
    return (
        <>
            <img src="/property-awards.png" className={classes.awards} />
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                className={classes.main}
            >
                <SwiperSlide>
                    <img src="/entrance1.jpg" width="100%" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/brickface.jpg" width="100%" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/interior1.jpg" width="100%" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/landscape.jpg" width="100%" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

const styles = createUseStyles({
    main: {
        position: "relative",
    },
    awards: {
        position: "absolute",
        right: "5%",
        zIndex: "2",
        height: "250px",
    },
});
