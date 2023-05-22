import React from "react";
import NavButton from "../../components/NavButton";
import UploadFile from "../../components/UploadFile";
import SearchBar from "../../components/SearchBar";
import TextInputs from "../../components/TextInputs";
import styles from "./Aplicacao.module.scss";

const Aplicacao = () => {
    return (
        <>
            <NavButton link="/" />
            <div className={styles.container}>
                <h2 className={styles.pageTitle}>Load File</h2>
                <UploadFile />
                <h2 className={styles.pageTitle} style={{ paddingTop: "40px" }}>
                    Load from the web
                </h2>
                <TextInputs />
                <SearchBar />
            </div>
        </>
    );
};

export default Aplicacao;
