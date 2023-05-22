import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <>
            <div className={styles.container}>
                <CircularProgress size={70} />
            </div>
        </>
    );
};

export default Loading;
