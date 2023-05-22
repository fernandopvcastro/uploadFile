import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./TextInputs.module.scss";

const Inputs = [
    {
        name: "CSV",
        prop: ".csv",
    },
    {
        name: "TSV",
        prop: ".tsv",
    },
    {
        name: "JSON",
        prop: ".json",
    },
    {
        name: "EXCEL",
        prop: ".xls",
    },
    {
        name: "PARQUET",
        prop: ".parquet",
    },
];

const TextInputs = () => {
    const [url, setUrl] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidUrl(url)) {
            setValidationMessage(false);
        } else {
            setValidationMessage("URL inválida");
        }
    };

    const isValidUrl = (url) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };

    const handleInvalid = (event) => {
        event.target.setCustomValidity(" ");
        if (isValidUrl(url)) {
            setValidationMessage(false);
        } else {
            setValidationMessage("URL inválida");
        }
    };

    const handleInput = (event) => {
        event.target.setCustomValidity(" ");
        if (isValidUrl(url)) {
            setValidationMessage(false);
        } else {
            setValidationMessage("URL inválida");
        }
    };

    return (
        <>
            <div className={styles.inputsContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <span>Data Type</span>
                        <ul>
                            {Inputs.map((input, idx) => {
                                return (
                                    <li key={idx}>
                                        <label htmlFor={idx}>
                                            <input
                                                type="radio"
                                                value={input.prop}
                                                id={idx}
                                                name="radioButton"
                                            />
                                            <span>{input.name}</span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.input}>
                        <span className={validationMessage ? "pb23" : ""}>
                            URL
                        </span>
                        <div className={styles.inputContainer}>
                            <input
                                type="url"
                                value={url}
                                onChange={handleInputChange}
                                onInvalid={handleInvalid}
                                onInput={handleInput}
                                required
                            />
                            {validationMessage && (
                                <Box className={styles.error}>
                                    {validationMessage}
                                </Box>
                            )}
                        </div>
                    </div>
                    <div className={styles.input}>
                        <span>Proxy (Optional)</span>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <button type="submit" className={styles.submit}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TextInputs;
