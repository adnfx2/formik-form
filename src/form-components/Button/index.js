/* Button */
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    margin: "1rem 0",
    padding: ".75rem",
    background: "orange",
    border: "none",
    boxShadow: "0 0 4px orange",
    borderRadius: "1.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#fff",
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
