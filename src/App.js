import React from "react";
import { Formik } from "formik";
import { createUseStyles } from "react-jss";
import manAvatar from "./assets/images/man.svg";
import womanAvatar from "./assets/images/woman.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const css = {
  colors: {
    bodyBackground: "#f2f4f8",
    formBg: "#fff",
    formShadow: "#bcbcbc"
  },
  avatar: {
    size: "40%",
    shadowBlur: "8" /*pixels*/,
    scale: "0.8"
  }
};

const useStyles = createUseStyles({
  "app-body": {
    minHeight: "100%",
    height: "100%",
    background: css.colors.bodyBackground,
    display: "grid",
    justifyContent: "center",
    alignContent: "center"
  },
  "form-wrapper": {
    position: "relative",
    display: "grid",
    minWidth: "300px",
    padding: "1rem",
    background: css.colors.formBg,
    boxShadow: `0 0 8px ${css.colors.formShadow}`,
    borderRadius: "8px"
  },
  avatar: {
    position: "absolute",
    bottom: "calc(100%)",
    transform: "translateY(50%)",
    justifySelf: "center",
    width: css.avatar.size,
    height: "0",
    paddingBottom: css.avatar.size,
    background: css.colors.formBg,
    boxShadow: `0 0 ${css.avatar.shadowBlur}px ${css.colors.formShadow}`,
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
    clipPath: "circle(50% at 50% 50%)",
    "&:hover $avatar__icon": {
      transform: `translateX(-100%) scale(${css.avatar.scale})`
    }
  },
  avatar__icon: {
    borderRadius: "50%",
    transform: `scale(${css.avatar.scale})`,
    transition: "175ms transform ease-in"
  },
  form: {
    display: "grid"
  },
  form__title: {
    margin: "5rem 0 1.25rem 0",
    paddingTop: "0",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  form__input: {
    margin: "1rem",
    border: "none",
    padding: "1rem"
  }
});

const FormTest = () => {
  const styles = useStyles();

  return (
    <div className={styles["app-body"]}>
      <div className={styles["form-wrapper"]}>
        <div className={styles.avatar}>
          <span className={styles.avatar__selector}>
            <img
              className={styles.avatar__icon}
              src={manAvatar}
              alt="man avatar"
            />
            <img
              className={styles.avatar__icon}
              src={womanAvatar}
              alt="woman avatar"
            />
          </span>
        </div>
        <h1 className={styles.form__title}>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <span>
                  <FontAwesomeIcon icon={faCoffee} />
                </span>
                <input
                  className={styles.form__input}
                  placeholder="Your email"
                />
              </div>
              {errors.email && touched.email && errors.email}
              <input
                className={styles.form__input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default FormTest;

/*
  <div>
    Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
    from
    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </div>
*/

/*
"&::before": {
  position: "absolute",
  content: "''",
  width: "150%",
  height: "55%",
  left: "-25%",
  top: "50%",
  background: "inherit"
},
"&::after": {
  position: "absolute",
  content: "''",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  borderRadius: "50%",
  background: "inherit"
}
*/
