import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
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
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                className={classes.main}
            >
                {hero_images.map((value, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img src={value} width="100%" />
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
    },
    awards: {
        position: "absolute",
        right: "5%",
        zIndex: "2",
        height: "250px",
    },
});
