import React from "react";
import NavButton from "../../components/NavButton";
import Quiz from "../../components/Quiz";
import styles from "./Questionario.module.scss";

const Questionario = () => {
    return (
        <>
            <NavButton link="/" />
            <div className={styles.container}>
                <Quiz />
            </div>
        </>
    );
};

export default Questionario;
