import { createUseStyles } from "react-jss";
import { AiOutlineClose } from "react-icons/ai";
import ScrollLock from "react-scrolllock";
import Contact from "../Contact";
import { useState } from "react";

interface Props {
	isOpen: boolean;
	setIsOpen: Function;
	isContactOpen: boolean;
	setContactOpen: Function;
}

export default function MobileMenu(props: Props) {
	const classes = styles(props);
	return (
		<div className={classes.main}>
			<ScrollLock isActive={props.isOpen} />
			<img src="/logo_white.jpg" className={classes.image} />
			<a className={classes.item} href="https://nooitgedachtvillage/village/">
				HOME (OLD SITE)
			</a>
			<a
				className={classes.item}
				onClick={() => {
					props.setContactOpen(true);
					props.setIsOpen(false);
				}}>
				CONTACT
			</a>
			<a className={classes.item} href="/">
				NEW DEVELOPMENTS
			</a>
			<div className={classes.close} onClick={() => props.setIsOpen(false)}>
				<AiOutlineClose size={35} color="black" />
			</div>
		</div>
	);
}

const styles = createUseStyles({
	main: (props: Props) => ({
		//zIndex: props.isOpen ? "15" : "-1",
		//opacity: props.isOpen ? "1" : "0",
		zIndex: "15",
		position: "absolute",
		height: "100vh",
		width: "100%",
		backgroundColor: "white",
		display: props.isOpen ? "flex" : "none",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "20px",
		color: "black",
	}),
	image: {
		width: "70%",
		marginBottom: "10%",
		marginTop: "-10%",
	},
	item: {
		fontFamily: "Nunito",
		fontSize: "1.35em",
		textDecoration: "none",
		color: "black",
	},
	close: {
		position: "absolute",
		right: "10%",
		top: "5%",
	},
});
