/* SlideToggle */
import React from "react";
import { createUseStyles } from "react-jss";
import { css } from "../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    fontSize: "0.6rem",
    letterSpacing: "1px"
  },
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
    borderRadius: "1.25rem",
    transition: "150ms all ease-in",
    cursor: "pointer",
    border: `1px solid ${css.colors.gray}`,
    "& span": {
      textAlign: "center",
      padding: ".25rem .5rem"
    },
    "&::before": {
      position: "absolute",
      top: "4px",
      left: "4px",
      content: "''",
      background: css.colors.orange,
      height: "calc(100% - 8px)",
      width: "calc(50% - 8px)",
      borderRadius: "1.25rem",
      transition: "150ms all ease-in"
    }
  }
});

const SlideToggle = ({
  id,
  actionHandler,
  className,
  options,
  value,
  field,
  checked,
  ...props
}) => {
  const styles = useStyles();
  const handler = e => {
    const value = e.target.checked;
    actionHandler && actionHandler(e, value);
    field.onChange(e);
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`.trim()}>
      <input
        {...field}
        checked={checked}
        onChange={handler}
        className={styles.checkbox}
        type="checkbox"
        id={id}
      />
      <label className={styles["slide-toggle"]} htmlFor={id}>
        <span>{options[0]}</span>
        <span>{options[1]}</span>
      </label>
    </div>
  );
};

export default SlideToggle;
