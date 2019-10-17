/* Input */
import React from "react";
import { createUseStyles } from "react-jss";
import { css } from "../../styles/variables";

const useStyles = createUseStyles({
  input: {
    position: "relative",
    display: "grid",
    gridTemplateRows: "auto .75rem",
    gridGap: ".75rem"
  },
  input__text: {
    padding: ".5rem",
    margin: "0",
    border: "none",
    borderBottom: `1px solid ${css.colors.gray}`,
    "&:focus": {
      border: "none",
      outline: "none",
      borderBottom: `1px solid ${css.colors.orange}`
    }
  },
  errors: {
    fontSize: ".65rem",
    color: css.colors.error,
    overflow: "scroll",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    [`&::-webkit-scrollbar`]: {
      display: "none"
    }
  }
});

const Input = ({ errors, className, ...props }) => {
  const styles = useStyles();

  return (
    <div className={`${styles.input} ${className || ""}`.trim()}>
      <input {...props} className={styles.input__text} />
      <div className={styles.errors}>{errors ? `- ${errors}` : ""}</div>
    </div>
  );
};

export default Input;
