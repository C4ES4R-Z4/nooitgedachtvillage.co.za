import { createUseStyles } from "react-jss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DevHeader from "./components/DevHeader";
import Hero from "./components/Hero";

function Slide({ image }: { image: string }) {
    const classes = styles();
    return (
        <SwiperSlide className={classes.slide}>
            <img src={image} width="100%" />
        </SwiperSlide>
    );
}

const images = [
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",
    "/four.jpg",
    "/five.jpg",
    "/six.jpg",
    "/seven.jpg",
    "/eight.jpg",
    "/nine.jpg",
    "/ten.jpg",
    "/eleven.jpg",
    "/twelve.jpg",
    "/thirteen.jpg",
];

export default function DevelopmentPage({
    name,
    prefix,
}: {
    name: string;
    prefix: string;
}) {
    const classes = styles();
    return (
        <div className={classes.main}>
            <div>
                <DevHeader name={name} />
                <Hero />
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                className={classes.swiper}
            >
                {images.map((value, key) => {
                    return (
                        <SwiperSlide key={key} className={classes.slide}>
                            <img src={`/${prefix}/${value}`} width="100%" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

const styles = createUseStyles({
    main: {
        display: "flex",
        flexDirection: "column",
    },
    swiper: {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    slide: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
