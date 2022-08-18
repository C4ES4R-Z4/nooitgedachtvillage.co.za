import { createUseStyles } from "react-jss";

export default function MobileMenu() {
	const classes = styles();
	return <div className={classes.main}></div>;
}

const styles = createUseStyles({
	main: {},
});
