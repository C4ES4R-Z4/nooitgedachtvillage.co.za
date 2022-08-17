import { createUseStyles } from "react-jss";
import "@fontsource/lora/700.css";
import "@fontsource/lora/700-italic.css";

function SellBox({
    image,
    name,
    price,
    link,
}: {
    image: string;
    name: string;
    price: string;
    link?: string;
}) {
    const classes = styles();
    return (
        <a
            className={classes.sellingBox}
            style={{ backgroundImage: `url("${image}")` }}
            href={link}
        >
            <div className={classes.inner}>
                <div>{name}</div>
                <div className={classes.price}>from R{price}</div>
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
                <div className={classes.text}>
                    Nooitgedacht is now under new ownership (Remey.co.za)
                </div>
                <div className={classes.forsale}>For Sale:</div>
            </div>
            <div className={classes.selling}>
                <SellBox
                    name="Village Close"
                    image={"/village_close.jpg"}
                    link={"/village-close"}
                    price="4.9m"
                />
                <SellBox
                    name="Simonsberg Manor"
                    image={"/simonsberg_manor.jpg"}
                    link={"/simonsberg-manor"}
                    price="4.2m"
                />
                <SellBox
                    name="The Terraces"
                    image={"/terraces.jpg"}
                    link={"/terraces"}
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
        fontSize: "2.2em",
    },
    text: {
        color: "black",
        fontFamily: "Lora",
    },
    forsale: {
        fontFamily: "Lora",
        fontWeight: "700",
        fontStyle: "italic",
        color: "#B38E43",
        fontSize: "1.5em",
    },
    textContainer: {
        padding: "2%",
        paddingBottom: "1%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
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
