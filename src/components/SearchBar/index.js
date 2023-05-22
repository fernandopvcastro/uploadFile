import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import suggestionsData from "./suggestions.json";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef();

    const handleChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query === "") {
            setSuggestions([]);
        } else {
            const filteredSuggestions = suggestionsData.filter((suggestion) =>
                suggestion.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    };

    const handleSuggestionClick = (suggestionText) => {
        setSearchQuery(suggestionText);
        setSuggestions([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.searchContainer}>
            <div className={styles.input}>
                <input
                    type="text"
                    className={styles.search}
                    value={searchQuery}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <SearchIcon />
            </div>
            <ul className={styles.search__list}>
                {suggestions.map((suggestion, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion.title)}
                    >
                        <span>{suggestion.title}</span>
                        <img
                            src={suggestion.imageUrl}
                            alt={suggestion.title}
                            height={40}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
