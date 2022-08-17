import { createUseStyles } from "react-jss";

export default function Row() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <img src="/villagetop.jpg" />
            <img src="/villageside.jpg" />
            <img src="/entrance1.jpg" />
            <img src="/interior1.jpg" />
            <img src="/statue.jpg" />
            <img src="/interior2.jpg" />
        </div>
    );
}

const styles = createUseStyles({
    main: {
        height: "30vh",
        width: "100vw",
        display: "flex",
        overflow: "hidden",
    },
});
