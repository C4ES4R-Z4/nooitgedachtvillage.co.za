import { createUseStyles } from "react-jss";
import "@fontsource/lora/700.css";
import "@fontsource/lora/700-italic.css";
import "@fontsource/eb-garamond";
import "@fontsource/eb-garamond/700.css";
import "@fontsource/eb-garamond/700-italic.css";
import "@fontsource/eb-garamond/400-italic.css";
import "@fontsource/nunito";
import "@fontsource/nunito/400-italic.css";

function SellBox({
	image,
	name,
	price,
	link,
	secondary,
}: {
	image: string;
	name: string;
	price: string;
	link?: string;
	secondary?: string;
}) {
	const classes = styles();
	const value = price !== "" ? `from R${price}` : secondary;
	return (
		<a className={classes.box} href={link}>
			<div className={classes.image} style={{ backgroundImage: `url("${image}")` }}></div>
			<div className={classes.boxText}>
				<div>{name}</div>
				<div className={classes.priceText}>{value}</div>
			</div>
		</a>
	);
}

export function NewDevelopments() {
	const classes = styles();
	return (
		<div className={classes.main}>
			<div className={classes.textContainer}>
				<div className={classes.heading}>New Developments</div>
				<div className={classes.text}>Nooitgedacht is now under new ownership</div>
				<div className={classes.forsale}>For Sale:</div>
			</div>
			<div className={classes.selling}>
				<SellBox name="VILLAGE CLOSE" image={"/village_close.jpg"} link={"/village-close"} price="4.3m" />
				<SellBox name="SIMONSBERG MANOR" image={"/simonsberg_manor.jpg"} link={"/simonsberg-manor"} price="4.2m" />
				<SellBox name="THE TERRACES" image={"/terraces.jpg"} link={"/the-terraces"} price="3.3m" />
				<SellBox name="APARTMENTS" image={"/apartments.jpg"} price="" secondary="Launching Soon" />
			</div>
		</div>
	);
}

const styles = createUseStyles({
	box: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textDecoration: "none",
	},
	image: {
		height: "200px",
		width: "300px",
		backgroundColor: "black",
		backgroundSize: "cover",
	},
	boxText: {
		color: "#B38E43",
		fontSize: "1.5em",
		fontFamily: "eb garamond",
		textAlign: "center",
		paddingTop: "10px",
		textDecoration: "none",
		letterSpacing: "2px",
		"&:hover :focus :active": {
			color: "#B38E43",
			textDecoration: "none",
		},
	},
	priceText: {
		fontSize: "16px",
		color: "black",
		fontFamily: "nunito",
		fontStyle: "italic",
		fontWeight: "400",
		paddingTop: "5px",
		letterSpacing: "0px",
	},
	main: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: "2%",
		paddingBottom: "2%",
	},
	heading: {
		color: "#B38E43",
		fontFamily: "EB Garamond",
		textTransform: "uppercase",
		letterSpacing: "2px",
		fontSize: "2.2em",
		"@media (max-width: 900px)": {
			fontSize: "2em",
		},
	},
	text: {
		color: "black",
		fontFamily: "Nunito",
		fontSize: "16px",
	},
	forsale: {
		fontFamily: "eb garamond",
		fontWeight: "400",
		fontStyle: "italic",
		color: "#B38E43",
		fontSize: "1.5em",
	},
	textContainer: {
		paddingBottom: "1%",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		"@media (max-width: 900px)": {
			paddingTop: "20px",
			paddingBottom: "20px",
		},
	},
	selling: {
		display: "flex",
		gap: "20px",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "5%",
		marginRight: "5%",
	},
	sellingBox: {
		color: "black",
		height: "30vh",
		width: "25vw",
		maxHeight: "200px",
		maxWidth: "300px",
		minHeight: "100px",
		minWidth: "240px",
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		display: "flex",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		borderRadius: "8px",
		position: "relative",
		margin: "5px",
		"&:hover": {
			border: "5px solid #B38E43",
			margin: "0px",
			cursor: "pointer",
		},
	},
	inner: {
		backgroundColor: "white",
		padding: "5px",
		paddingLeft: "15px",
		paddingRight: "15px",
		borderRadius: "8px",
		color: "#B38E43",
		fontSize: "1.2em",
		fontWeight: "bold",
		fontFamily: "eb garamond",
		position: "absolute",
		bottom: "10%",
	},
	price: {
		fontSize: "0.8em",
		color: "black",
		fontFamily: "eb garamond",
		fontStyle: "italic",
	},
});
