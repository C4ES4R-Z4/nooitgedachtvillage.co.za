import { createUseStyles } from "react-jss";
import "@fontsource/lora";

export function NewDevelopments() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <h1 className={classes.heading}>New Developments</h1>
            <p className={classes.text}>
                Nooitgedacht is now under new ownership (Remey.co.za)
            </p>
            <div className={classes.selling}>
                <div
                    className={classes.sellingBox}
                    style={{ backgroundImage: `url("/village_close.jpg")` }}
                >
                    <div className={classes.inner}>Village Close</div>
                </div>
                <div
                    className={classes.sellingBox}
                    style={{ backgroundImage: `url("/simonsberg_manor.jpg")` }}
                >
                    <div className={classes.inner}>Simonsberg Manor</div>
                </div>
                <div
                    className={classes.sellingBox}
                    style={{ backgroundImage: `url("/terraces.jpg")` }}
                >
                    <div className={classes.inner}>The Terraces</div>
                </div>
            </div>
        </div>
    );
}

const styles = createUseStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        color: "#B38E43",
        fontFamily: "Lora",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    text: {
        color: "black",
        fontFamily: "Lora",
    },
    selling: {
        display: "flex",
        gap: "20px",
    },
    sellingBox: {
        color: "black",
        height: "200px",
        width: "300px",
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
        fontFamily: "Lora",
        position: "absolute",
        bottom: "10%",
    },
});
