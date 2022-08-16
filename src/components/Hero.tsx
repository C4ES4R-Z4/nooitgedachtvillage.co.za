import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { createUseStyles } from "react-jss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const hero_images = [
    "/entrance1.jpg",
    "/brickface.jpg",
    "/interior1.jpg",
    "/landscape.jpg",
    "/entrance2.jpg",
    "/statue.jpg",
    "/interior2.jpg",
    "/village.jpg",
    "/winelands.jpg",
];

export default function Hero() {
    const classes = styles();
    return (
        <>
            <img src="/property-awards.png" className={classes.awards} />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1.8}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className={classes.main}
                loop={true}
            >
                {hero_images.map((value, key) => {
                    return (
                        <SwiperSlide key={key} className={classes.slide}>
                            <img src={value} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

const styles = createUseStyles({
    main: {
        position: "relative",
        width: "100%",
    },
    slide: {
        height: "50%",
    },
    awards: {
        position: "absolute",
        right: "5%",
        zIndex: "2",
        height: "250px",
    },
});
