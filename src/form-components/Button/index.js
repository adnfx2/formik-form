import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    padding: ".5rem",
    background: "orange",
    border: "none",
    boxShadow: "0 0 8px orange",
    borderRadius: "1rem",
    cursor: "pointer",
    "&:active": {
      transform: "translateY(1px)",
      outline: "none"
    }
  }
});

const Submit = ({ label, className, ...props }) => {
  const styles = useStyles();

  return (
    <button className={`${styles.button} ${className || ""}`.trim()} {...props}>
      {label}
    </button>
  );
};

export default Submit;
