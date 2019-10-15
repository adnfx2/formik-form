import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
  checkbox: {
    display: "none",
    "&:checked + $slide-toggle": {
      "&::before": {
        marginLeft: "50%"
      }
    }
  },
  "slide-toggle": {
    position: "relative",
    display: "inline-grid",
    padding: ".5rem",
    gridColumnGap: "1rem",
    gridTemplateColumns: "1fr 1fr",
    background: "#d0d0d0",
    borderRadius: "1.25rem",
    transition: "150ms all ease-in",
    cursor: "pointer",
    "& span": {
      textAlign: "center"
    },
    "&::before": {
      position: "absolute",
      content: "''",
      background: "rgba(0,0,0,.1)",
      height: "100%",
      width: "50%",
      borderRadius: "1.25rem",
      transition: "150ms all ease-in"
    }
    /*"&::after": {
      position: "absolute",
      content: "''",
      display: "inline-block",
      width: "calc(1.25rem - 5px)",
      height: "calc(1.25rem - 5px)",
      top: "2.5px",
      left: "2.5px",
      borderRadius: "50%",
      background: "red"
    }*/
  }
});

const SlideToggle = ({ id, className, options, label, ...props }) => {
  const styles = useStyles();

  return (
    <div className={`${styles.wrapper} ${className || ""}`.trim()}>
      <input {...props} className={styles.checkbox} type="checkbox" id={id} />
      <label className={styles["slide-toggle"]} htmlFor={id}>
        <span>{options[0]}</span>
        <span>{options[1]}</span>
      </label>
    </div>
  );
};

export default SlideToggle;
