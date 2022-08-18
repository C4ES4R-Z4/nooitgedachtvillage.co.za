import { createUseStyles } from "react-jss";
import "@fontsource/cantarell";
import "@fontsource/cantarell/700.css";
import "@fontsource/raleway";
import "@fontsource/lora";
import "@fontsource/nunito";
import { useState } from "react";
import Contact from "../Contact";
import MediaQuery from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

export default function Header() {
	const classes = styles();
	const [isContactOpen, setContactOpen] = useState(false);
	const [isMobileMenu, setMobileMenu] = useState(false);

	return (
		<>
			<MediaQuery minWidth={900}>
				<div className={classes.main}>
					<Contact isOpen={isContactOpen} setClose={setContactOpen} />
					<div className={classes.nav}>
						<a className={classes.navItem} href="https://nooitgedachtvillage.co.za/village">
							HOME (OLD SITE)
						</a>
						<a className={classes.navItem} onClick={() => setContactOpen(true)}>
							CONTACT
						</a>
						<a className={classes.navItem} href="/">
							NEW DEVELOPMENTS
						</a>
					</div>
					<div className={classes.logo}>
						<img src="/logo_white.jpg" className={classes.image} />
					</div>
					<div className={classes.socials}>
						<a href="https://www.facebook.com/Nooitvillage" target="_blank">
							<img src="/facebook.svg" height={30} />
						</a>
						<a href="https://www.instagram.com/nooitgedacht_village/" target="_blank">
							<img src="/instagram.svg" height={30} />
						</a>
						<a href="tel:079 863 7347" target="_blank">
							<img src="/phone.svg" height={30} />
						</a>
						<a href="mailto:kem@remey.co.za" target="_blank">
							<img src="/mail.svg" height={30} />
						</a>
						<a
							href="https://www.google.com/maps/place/Nooitgedacht+Village/@-33.872744,18.820745,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcdad209328764f:0xabffa3798694487b!8m2!3d-33.8727379!4d18.8207423"
							target="_blank">
							<img src="/location.svg" height={30} />
						</a>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={900}>
				<MobileMenu isOpen={isMobileMenu} setIsOpen={setMobileMenu} />
				<div className={classes.mobileHeader}>
					<div className={classes.mobileMenu} onClick={() => setMobileMenu(true)}>
						<GiHamburgerMenu color="black" size={25} />
					</div>
					<img src="/logo_white.jpg" className={classes.imageMobile} />
				</div>
			</MediaQuery>
		</>
	);
}

const styles = createUseStyles({
	mobileHeader: {
		minHeight: "100px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: "10px",
		position: "relative",
		paddingRight: "10px",
	},
	imageMobile: {
		height: "75px",
	},
	mobileMenu: {
		position: "absolute",
		right: "5%",
		top: "60%",
		transform: "translate(-5%, -60%)",
	},
	main: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
		gap: "40px",
		paddingLeft: "40px",
		height: "75px",
		paddingRight: "40px",
		paddingTop: "20px",
	},
	logo: {
		position: "absolute",
		left: "50%",
		top: "0%",
		transform: "translate(-50%, 0)",
		zIndex: "2",
		paddingLeft: "20px",
		paddingRight: "20px",
	},
	image: {
		height: "85px",
	},
	nav: {
		color: "black",
		display: "flex",
		gap: "12px",
		fontFamily: "Nunito",
		fontSize: "16px",
	},
	socials: {
		color: "black",
		display: "flex",
		gap: "6px",
	},
	navItem: {
		paddingBottom: "2px",
		fontFamily: "Nunito",
		cursor: "pointer",
		textDecoration: "none",
		color: "black",
		"&:hover": {
			color: "#B38E43",
			borderBottom: "2px solid #B38E43",
			paddingBottom: "0px",
			textDecoration: "none",
		},
		"&:active :focus": {
			color: "black",
			textDecoration: "none",
		},
	},
	navItemActive: {
		color: "#B38E43",
		cursor: "pointer",
		fontFamily: "Nunito",
		borderBottom: "2px solid #B38E43",
	},
	socialsIcon: {
		"&:hover": {
			color: "#B38E43",
		},
	},
});
