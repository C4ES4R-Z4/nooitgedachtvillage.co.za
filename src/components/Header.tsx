import { createUseStyles } from "react-jss";
import "@fontsource/cantarell";
import "@fontsource/raleway";

export default function Header() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <div className={classes.nav}>
                <a className={classes.navItem}>CONTACT</a>
                <a className={classes.navItem}>GALLERY</a>
                <a className={classes.navItemActive}>HOME</a>
            </div>
            <div className={classes.logo}>
                <img src="/logo_white.jpg" height={100} />
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap: "40px",
    },
    logo: {},
    nav: {
        color: "black",
        display: "flex",
        gap: "12px",
        fontFamily: "Cantarell",
        minWidth: "20%",
        justifyContent: "flex-end",
    },
    socials: {
        color: "black",
        minWidth: "20%",
        display: "flex",
        gap: "6px",
        justifyContent: "flex-start",
    },
    navItem: {
        paddingBottom: "2px",
        "&:hover": {
            color: "#B38E43",
            borderBottom: "2px solid #B38E43",
            paddingBottom: "0px",
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
