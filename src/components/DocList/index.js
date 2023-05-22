import React from "react";
import styles from "./DocList.module.scss";

const docsType = ["csv", "TSV", "XLS", "XLSX", "JSON", "PARQUET"];

const DocList = () => {
    return (
        <ul className={styles.docs__list}>
            {docsType.map((item, idx) => {
                return (
                    <li key={idx} className={styles.docs__item}>
                        <span>{item}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default DocList;
