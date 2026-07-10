import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

function Register({ goToValidation }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    alert("Registration Successful");
    console.log(data);

    goToValidation();
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="error">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="error">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password ||
                "Passwords do not match",
            })}
          />

          {errors.confirmPassword && (
            <p className="error">
              {errors.confirmPassword.message}
            </p>
          )}

          <button type="submit">
            Register
          </button>
        </form>

        <p className="link-text">
          Already have an account?

          <span onClick={goToValidation}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;