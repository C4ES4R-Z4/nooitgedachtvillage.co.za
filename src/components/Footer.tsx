import { createUseStyles } from "react-jss";

export default function Footer() {
    const classes = styles();
    return <div className={classes.main}></div>;
}

const styles = createUseStyles({
    main: {
        marginTop: "20px",
        height: "75px",
        backgroundColor: "#341906",
        borderTop: "2px solid #B38E43",
    },
});
