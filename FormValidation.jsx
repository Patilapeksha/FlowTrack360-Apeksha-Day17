import React from "react";
import { useForm } from "react-hook-form";
import "./FormValidation.css";

function FormValidation({ goToRegister }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    alert("Login Successful");
    console.log(data);
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required"
            })}
          />

          {errors.email && (
            <p className="error">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters"
              }
            })}
          />

          {errors.password && (
            <p className="error">
              {errors.password.message}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="link-text">
          New user?

          <span onClick={goToRegister}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default FormValidation;