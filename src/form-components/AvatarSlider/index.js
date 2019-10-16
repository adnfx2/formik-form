/* AvatarSlider */
import React from "react";
import { createUseStyles } from "react-jss";
import { css } from "../../styles/variables";
import manAvatar from "../../assets/images/man.svg";
import womanAvatar from "../../assets/images/woman.svg";

const useStyles = createUseStyles({
  avatar: {
    position: "absolute",
    bottom: "calc(100%)",
    transform: "translateY(50%)",
    justifySelf: "center",
    width: css.avatar.size,
    height: "0",
    paddingBottom: css.avatar.size,
    background: css.colors.formBg,
    boxShadow: `0 0 ${css.avatar.shadowBlur}px ${css.colors.lightGray}`,
    borderRadius: "50%",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: `-${css.avatar.shadowBlur}px`,
      width: `calc(100% + ${2 * css.avatar.shadowBlur}px)`,
      height: `calc(50% + ${css.avatar.shadowBlur}px)`,
      background: css.colors.formBg
    }
  },
  avatar__selector: {
    display: "grid",
    gridTemplateColumns: "100% 100%",
    clipPath: "circle(50% at 50% 50%)"
  },
  avatar__icon: {
    borderRadius: "50%",
    transform: `scale(${css.avatar.scale})`,
    transition: "175ms transform ease-in",
    "$avatar__selector.shifted &": {
      transform: `translateX(-100%) scale(${css.avatar.scale})`
    }
  }
});

const AvatarSlider = ({ errors, className, value, ...props }) => {
  const styles = useStyles();

  return (
    <div className={styles.avatar}>
      <span
        className={`${styles.avatar__selector} ${
          value ? "shifted" : ""
        }`.trim()}
      >
        <img className={styles.avatar__icon} src={manAvatar} alt="man avatar" />
        <img
          className={styles.avatar__icon}
          src={womanAvatar}
          alt="woman avatar"
        />
      </span>
    </div>
  );
};

export default AvatarSlider;

/*
  ##note:
  This component is currently not very reusable yet, it can be done really quiclky though.
*/
