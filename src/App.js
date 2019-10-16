import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { createUseStyles } from "react-jss";
import AvatarSlider from "./form-components/AvatarSlider";
import Input from "./form-components/Input";
import Button from "./form-components/Button";
import SlideToggle from "./form-components/SlideToggle";
import { css } from "./styles/variables";

const genderOptions = ["female", "male"];
const isChildOptions = ["child", "adult"];

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    padding: "1rem"
  },
  "form-wrapper": {
    position: "relative",
    display: "grid",
    maxWidth: "300px",
    marginTop: css.avatar.size / 2 /*half the height of the avatar*/,
    padding: "1rem",
    background: css.colors.formBg,
    boxShadow: `0 0 8px ${css.colors.lightGray}`,
    borderRadius: "8px"
  },

  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: ".5rem",
    padding: "0 1rem"
  },
  form__title: {
    margin: "5rem 0 1.25rem 0",
    paddingTop: "0",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  form__field: {
    margin: ".25rem 1.25rem"
  },
  "grid-all-columns": {
    gridColumn: "1/-1"
  },
  "justify-self-end": {
    justifySelf: "end"
  }
});

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Invalid title")
    .max(50, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Invalid firstname")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Invalid lastname")
    .max(20, "Too Long!")
    .required("Required")
});

const FormTest = () => {
  const [avatar, setAvatar] = useState(false);
  const styles = useStyles();

  return (
    <div className={styles["container"]}>
      <h1>Hello</h1>
      <div className={styles["form-wrapper"]}>
        <AvatarSlider value={avatar} />
        <h1 className={styles.form__title}>Anywhere in your app!</h1>
        <Formik
          initialValues={{
            title: "",
            firstName: "",
            lastName: "",
            gender: false,
            isChild: false
          }}
          validationSchema={SignupSchema}
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
              <Input
                className={styles["grid-all-columns"]}
                type="title"
                name="title"
                placeholder="Title..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                errors={errors.title && touched.title && errors.title}
              />
              <Input
                className={styles["grid-all-columns"]}
                type="firstName"
                name="firstName"
                placeholder="Firstname..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                errors={
                  errors.firstName && touched.firstName && errors.firstName
                }
              />
              <Input
                className={styles["grid-all-columns"]}
                type="lastName"
                name="lastName"
                placeholder="Lastname..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                errors={errors.lastName && touched.lastName && errors.lastName}
              />
              <Field
                name="gender"
                id="gender"
                checked={values.gender}
                options={genderOptions}
                actionHandler={(e, value) => setAvatar(value)}
                component={SlideToggle}
              />
              <Field
                className={styles["justify-self-end"]}
                name="isChild"
                id="isChild"
                checked={values.isChild}
                options={isChildOptions}
                component={SlideToggle}
              />
              <Button
                className={styles["grid-all-columns"]}
                type="submit"
                disabled={isSubmitting}
                label="Submit"
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default FormTest;
