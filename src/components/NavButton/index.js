import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./NavButton.module.scss";

const NavButton = ({ link }) => {
    return (
        <div className={styles.backButton}>
            <Link to={link}>
                <ArrowBackIcon sx={{ color: "#fff" }} /> Back
            </Link>
        </div>
    );
};

export default NavButton;
