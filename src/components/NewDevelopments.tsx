import { createUseStyles } from "react-jss";
import "@fontsource/lora/700.css";
import "@fontsource/lora/700-italic.css";

function SellBox({
    image,
    name,
    price,
}: {
    image: string;
    name: string;
    price: string;
}) {
    const classes = styles();
    return (
        <div
            className={classes.sellingBox}
            style={{ backgroundImage: `url("${image}")` }}
        >
            <div className={classes.inner}>
                <div>{name}</div>
                <div className={classes.price}>from R{price}</div>
            </div>
        </div>
    );
}

export function NewDevelopments() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <h1 className={classes.heading}>New Developments</h1>
            <p className={classes.text}>
                Nooitgedacht is now under new ownership (Remey.co.za)
            </p>
            <div className={classes.selling}>
                <SellBox
                    name="Village Close"
                    image={"/village_close.jpg"}
                    price="4.9m"
                />
                <SellBox
                    name="Simonsberg Manor"
                    image={"/simonsberg_manor.jpg"}
                    price="4.2m"
                />
                <SellBox
                    name="The Terraces"
                    image={"/terraces.jpg"}
                    price="2.9m"
                />
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
    price: {
        fontSize: "0.8em",
        color: "black",
        fontFamily: "Lora",
        fontStyle: "italic",
    },
});
