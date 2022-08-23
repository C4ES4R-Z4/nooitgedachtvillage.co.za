import { createUseStyles } from "react-jss";
//import ReCAPTCHA from "react-google-recaptcha";
import ScrollLock from "react-scrolllock";
import MediaQuery, { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useState } from "react";

export default function Contact({ isOpen, setClose, source }: any) {
	const [loading, setLoading] = useState(false);
	const [turing, setTuring] = useState(false);
	const classes = styles({ isOpen });
	const isMobile = useMediaQuery({
		query: "(max-width: 900px)",
	})
		? classes.mainMobile
		: classes.main;

	return (
		<div className={isMobile}>
			<ScrollLock isActive={isOpen} />
			<div className={classes.heading}>
				<div className={classes.highHeading}>CONTACT US</div>
				<div>Name: Kem Westdyk</div>
				<div>Cel: 083 406 3961</div>
				<div>Email: kem@remey.co.za</div>
			</div>
			<form className={classes.form}>
				<div className={classes.inputContainer}>
					Name:{" "}
					<input type="text" name="name" id="name-input" placeholder="" className={classes.input} required></input>
				</div>
				<div className={classes.inputContainer}>
					Email:{" "}
					<input type="text" name="email" id="email-input" placeholder="" className={classes.input} required></input>
				</div>
				<div className={classes.inputContainer}>
					Cell:{" "}
					<input type="text" name="cell" id="cell-input" placeholder="" className={classes.input} required></input>
				</div>
				<div className={classes.inputContainer}>
					Enquiry:{" "}
					<textarea
						rows={3}
						name="enquiry"
						id="enquiry-input"
						placeholder=""
						className={classes.textarea}
						required></textarea>
				</div>
				<input type="hidden" value={source ? source : "Home Page"} />
			</form>
			{/*<ReCAPTCHA sitekey="6LewBw8hAAAAAN1VXE8AXa7TfIhr6rdSJjbt_sQq" theme="light" onChange={() => {}} />*/}
			<div className={classes.buttons}>
				<div className={classes.close} onClick={() => setClose(false)}>
					CLOSE
				</div>
				<div
					className={classes.submit}
					onClick={() => {
						if (!turing) {
							setLoading(true);
							let bodyFormData = new FormData();
							const n1 = (document.getElementById("name-input") as HTMLInputElement) || null;
							const n2 = (document.getElementById("email-input") as HTMLInputElement) || null;
							const n3 = (document.getElementById("cell-input") as HTMLInputElement) || null;
							const n4 = (document.getElementById("enquiry-input") as HTMLInputElement) || null;

							let n1val = n1 === null ? "" : n1.value;
							let n2val = n2 === null ? "" : n2.value;
							let n3val = n3 === null ? "" : n3.value;
							let n4val = n4 === null ? "" : n4.value;

							bodyFormData.append("name", n1val);
							bodyFormData.append("email", n2val);
							bodyFormData.append("cell", n3val);
							bodyFormData.append("message", n4val);
							bodyFormData.append("source", source);
							axios({
								method: "post",
								url: "https://developments.nooitgedachtvillage.co.za/contact.php",
								data: bodyFormData,
								headers: {
									"Content-Type": "multipart/form-data",
								},
							}).then(() => {});
							setTimeout(() => {
								setLoading(false);
								setClose(false);
							}, 2000);
						}
					}}>
					SUBMIT
				</div>
			</div>
		</div>
	);
}

const styles = createUseStyles({
	main: ({ isOpen }: { isOpen: boolean }) => ({
		position: "fixed",
		zIndex: "10",
		padding: "40px",
		backgroundColor: "white",
		left: "50%",
		top: "50%",
		opacity: "1",
		transform: "translate(-50%, -50%)",
		border: "2px solid #B38E43",
		display: isOpen ? "flex" : "none",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minWidth: "400px",
		maxWidth: "500px",
		maxHeight: "600px",
		overflow: "hidden",
	}),
	mainMobile: ({ isOpen }: { isOpen: boolean }) => ({
		position: "fixed",
		zIndex: "10",
		backgroundColor: "white",
		height: "100vh",
		width: "80%",
		paddingLeft: "calc(10%)",
		paddingRight: "calc(10%)",
		display: isOpen ? "flex" : "none",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	}),
	heading: {
		color: "black",
		textAlign: "center",
		fontSize: "16px",
	},
	highHeading: {
		fontSize: "35px",
		fontFamily: "eb garamond",
		color: "#B38E43",
		textAlign: "center",
		marginBottom: "10px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		color: "black",
		paddingTop: "20px",
		gap: "10px",
		marginBottom: "20px",
	},
	inputContainer: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		gap: "5px",
	},
	input: {
		backgroundColor: "white",
		border: "1px solid #B38E43",
		color: "#B38E43",
		width: "70%",
		outline: "none",
		"&:focus": {
			color: "black",
			backgroundColor: "lightgray",
		},
	},
	textarea: {
		backgroundColor: "white",
		border: "1px solid #B38E43",
		color: "#B38E43",
		width: "70%",
		outline: "none",
		"&:focus": {
			color: "black",
			backgroundColor: "lightgray",
		},
		minWidth: "70%",
		maxWidth: "70%",
		maxHeight: "200px",
		minHeight: "50px",
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
		gap: "10px",
		marginTop: "20px",
	},
	close: {
		color: "black",
		padding: "5px",
		border: "1px solid black",
		"&:hover": {
			border: "1px solid #B38E43",
			color: "#B38E43",
		},
		cursor: "pointer",
	},
	submit: {
		color: "black",
		padding: "5px",
		border: "1px solid black",
		"&:hover": {
			border: "1px solid #B38E43",
			color: "#B38E43",
		},
		cursor: "pointer",
	},
});
