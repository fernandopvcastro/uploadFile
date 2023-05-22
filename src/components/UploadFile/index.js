import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import DocList from "../DocList";
import Loading from "../Loading";
import styles from "./UploadFile.module.scss";

const UploadFile = () => {
    const [files, setFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        handleFiles(droppedFiles);
    };

    const handleFiles = (selectedFiles) => {
        const updatedFiles = [...files];
        let error = "";
        setIsDragging(false);
        setLoading(true);
        setTimeout(() => {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];

                const allowedExtensions = [
                    ".csv",
                    ".tsv",
                    ".xls",
                    ".xlsx",
                    ".json",
                    ".parquet",
                ];
                const fileExtension = file.name
                    .substring(file.name.lastIndexOf("."))
                    .toLowerCase();
                if (allowedExtensions.includes(fileExtension)) {
                    const maxSize = 20 * 1024 * 1024;

                    if (file.size <= maxSize) {
                        file.id = Math.random().toString(36).substring(7);
                        updatedFiles.push(file);
                    } else {
                        error = `the file ${file.name} exceeds the allowed size.`;
                    }
                } else {
                    error = `the file ${file.name} has an invalid extension.`;
                }
            }
            setFiles(updatedFiles);
            setErrorMessage(error);
            setLoading(false);
        }, 5000);
    };

    const removeItem = (id) => {
        const updatedFiles = files.filter((file) => file.id !== id);
        setFiles(updatedFiles);
    };

    const divClassName = `${styles.form} ${
        isDragging ? styles.form__active : ""
    }`;
    return (
        <>
            {loading && <Loading />}
            <form
                action=""
                className={divClassName}
                onClick={() => document.querySelector(".input-field").click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    multiple
                    accept=".csv, .tsv, .xls, .xlsx, .json, .parquet"
                    className={`input-field ${styles.inputField}`}
                    hidden
                    onChange={(event) => {
                        const selectedFiles = event.target.files;
                        handleFiles(selectedFiles);
                    }}
                />

                <CloudUploadIcon
                    className={styles.iconCloud}
                    fontSize="large"
                />
                <p className={styles.uploadTitle}>
                    Drop data files here to upload, or click to select files
                </p>
                <DocList />
            </form>

            {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}

            {files.length > 0 && (
                <ul className={styles.uploadedContainer}>
                    {files.map((file) => (
                        <li key={file.id}>
                            <DescriptionIcon />
                            <span className={styles.uploadedContent}>
                                <span>{file.name}</span>
                                <DeleteIcon
                                    onClick={() => removeItem(file.id)}
                                    className={styles.delete}
                                />
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default UploadFile;
