import { createUseStyles } from "react-jss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Header from "./components/Header";
import { useState } from "react";
import Contact from "./Contact";

const images = [
	"/one.jpg",
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

interface Option {
	name: string;
	desc: string;
	brochure: string;
	images: string[];
}

export default function DevelopmentPage(props: Option) {
	const classes = styles();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={classes.main}>
			<div>
				<Header />
				<Contact isOpen={isOpen} setClose={setIsOpen} />
				<div className={classes.textContainer}>
					<div className={classes.heading}>{props.name}</div>
					<div className={classes.forsale}>{props.desc}</div>
					<div className={classes.buttonContainer}>
						<div className={classes.button} onClick={() => setIsOpen(true)}>
							ENQUIRE
						</div>
						<a className={classes.button} href={props.brochure} target="_blank">
							DOWNLOAD BROCHURE
						</a>
					</div>
				</div>
			</div>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation={true}
				pagination={{ clickable: true }}
				className={classes.swiper}>
				{props.images.map((value, key) => {
					return (
						<SwiperSlide key={key} className={classes.slide}>
							<img src={`${value}`} width="100%" />
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
		maxWidth: "100vw",
	},
	swiper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	slide: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		color: "#B38E43",
		fontFamily: "EB Garamond",
		textTransform: "uppercase",
		letterSpacing: "2px",
		fontSize: "2.2em",
	},
	text: {
		color: "black",
		fontFamily: "Nunito",
		fontSize: "16px",
	},
	forsale: {
		fontFamily: "eb garamond",
		width: "60%",
		minWidth: "300px",
		fontWeight: "400",
		color: "black",
		fontSize: "1.35em",
	},
	textContainer: {
		textAlign: "center",
		paddingTop: "40px",
		paddingBottom: "10px",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		display: "flex",
		gap: "10px",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		padding: "5px",
		color: "black",
		fontFamily: "Nunito",
		border: "1px solid black",
		textDecoration: "none",
		cursor: "pointer",
		"&:hover": {
			border: "1px solid #B38E43",
			color: "#B38E43",
			textDecoration: "none",
		},
		"&:active :focus": {
			textDecoration: "none",
		},
	},
});
