import { createUseStyles } from "react-jss";
import "@fontsource/cantarell";
import "@fontsource/raleway";
import "@fontsource/lora";

export default function DevHeader({ name }: { name: string }) {
    const classes = styles();
    return (
        <div className={classes.main}>
            <div className={classes.nav}>
                <a href="/" className={classes.navItem}>
                    OLD SITE
                </a>
                <a href="/" className={classes.navItem}>
                    NEW DEVELOPMENTS
                </a>
                <a className={classes.navItemActive}>{name.toUpperCase()}</a>
            </div>
            <div className={classes.logo}>
                <img src="/logo_white.jpg" height={140} />
            </div>
            <div className={classes.socials}>
                <img src="/facebook.svg" height={30} />
                <img src="/instagram.svg" height={30} />
                <img src="/phone.svg" height={30} />
                <img src="/mail.svg" height={30} />
                <img src="/location.svg" height={30} />
            </div>
        </div>
    );
}

const styles = createUseStyles({
    main: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        gap: "40px",
        paddingLeft: "20px",
        height: "100px",
        paddingRight: "20px",
    },
    logo: {
        position: "absolute",
        left: "50%",
        top: "0%",
        transform: "translate(-50%, 0)",
        zIndex: "2",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
    },
    nav: {
        color: "black",
        display: "flex",
        gap: "12px",
        fontFamily: "Cantarell",
    },
    socials: {
        color: "black",
        display: "flex",
        gap: "6px",
    },
    navItem: {
        paddingBottom: "2px",
        textDecoration: "none",
        color: "black",
        "&:focus :active": {
            textDecoration: "none",
            color: "black",
        },
        "&:hover": {
            color: "#B38E43",
            borderBottom: "2px solid #B38E43",
            paddingBottom: "0px",
            textDecoration: "none",
        },
    },
    navItemActive: {
        color: "#B38E43",
        borderBottom: "2px solid #B38E43",
    },
    socialsIcon: {
        "&:hover": {
            color: "#B38E43",
        },
    },
});
