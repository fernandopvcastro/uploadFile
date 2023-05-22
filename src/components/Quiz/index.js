import React from "react";
import {
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import questoes from "./questionario.json";
import styles from "./Quiz.module.scss";

const Quiz = () => {
    return (
        <>
            {questoes.map((questao, idx) => {
                return (
                    <Accordion key={idx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${idx}-content`}
                            id={`panel${idx}-header`}
                            sx={{ bgcolor: "#c7d8f6" }}
                        >
                            <p className={styles.acordion__title}>
                                {idx + 1} - {questao.question}
                            </p>
                        </AccordionSummary>
                        <AccordionDetails
                            className={styles.acordion__descriptionContent}
                            sx={{ bgcolor: "#deeaff" }}
                        >
                            {questao.answer
                                .split("\n")
                                .map((paragraph, idx) => {
                                    return (
                                        <>
                                            <Typography key={idx}>
                                                {paragraph}
                                            </Typography>
                                            <br />
                                        </>
                                    );
                                })}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
};

export default Quiz;
