import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.buttons}>
            <Link to="/quiz" title="Questionário">
                Quiz
            </Link>
            <Link to="app">Application</Link>
        </div>
    );
};

export default Home;
