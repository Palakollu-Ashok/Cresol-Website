import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { servicesForm, servicesGoogleSheet } from "../../services/api";
import StyledForm from "./styles/serviceForm";

const ServiceForm = ({ title }) => {
  const {
    register,
    handleSubmit,

    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [fileUploaded, setFileUploaded] = useState(false);

  const [serverError, setServerError] = useState("");

  const predefinedCCEmails = ["praveen.y@trendsofttech.co.in"];

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const onSubmit = (data) => {
    const submissionDate = new Date();

    const formattedDate = `${submissionDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(submissionDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${submissionDate.getFullYear()} ${submissionDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${submissionDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${submissionDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    data.submissionDate = formattedDate;
    servicesGoogleSheet(data, setFileUploaded(true))
      .then((res) => {
        if (res.status === 200) {
          alert("Application submitted successfully");
          setFileUploaded(false);
          reset();
          servicesForm(data, setFileUploaded(true)).then((res) => {
            if (res.status === 200) {
              setFileUploaded(false);
            }
          });
        }
      })
      .catch((err) => {
        alert("Failed to Submit");
      });
  };

  return (
    <StyledForm>
      <div className="main-wrapper">
        <div className="contact-details">
          <div className="text-center">
            <h2 className="main">Contact Form</h2>
          </div>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label htmlFor="fullName">
                Name <span className="text-[#EB1414]">*</span>
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                className={`input-style ${
                  errors.fullName ? "border-[#EB1414]" : ""
                }`}
                {...register("fullName", {
                  required: "Full Name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Please enter valid name",
                  },
                })}
                onKeyUp={() => {
                  trigger("fullName");
                }}
              />
              {errors.fullName && (
                <small className="text-[#EB1414]" id="Name_error">
                  {errors.fullName.message}
                </small>
              )}
            </div>
            <div>
              <label htmlFor="Email">
                Email <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Email_error"
                id="Email"
                name="Email"
                className={`input-style ${
                  errors.email ? "border-[#EB1414]" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter valid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-[#EB1414]" id="Email_error">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div>
              <label htmlFor="Phone Number">
                Phone Number <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Phone_Number_error"
                id="phoneNumber"
                name="phoneNumber"
                className={`input-style ${
                  errors.phoneNumber ? "border-[#EB1414]" : ""
                }`}
                {...register("phoneNumber", {
                  required: "Phone Number is required",

                  pattern: {
                    value: /^\d*(?:\.\d{1,2})?$/,
                    message: "Please enter valid Phone Number",
                  },
                  maxLength: {
                    value: 10,
                    message: "Please enter 10 Digit Phone Number",
                  },
                  minLength: {
                    value: 10,

                    message: "Please enter  10 Digit Phone Number",
                  },
                })}
                onKeyUp={() => {
                  trigger("phoneNumber");
                }}
              />
              {errors.phoneNumber && (
                <small className="text-[#EB1414]" id="Phone_Number_error">
                  {errors.phoneNumber.message}
                </small>
              )}
            </div>

            <div className="w-full">
              <input
                id="fullName"
                name="fullName"
                type="hidden"
                value={title}
                {...register("enquiries", {})}
              />
            </div>
            <div className="w-full sm:col-span-3">
              <label htmlFor="Phone Number">Enquiry Description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                className={`input-style ${
                  errors.description ? "border-[#EB1414]" : ""
                }`}
                {...register("description", {})}
              />
            </div>
            <button
              type="submit"
              aria-live="polite"
              aria-atomic="true"
              className="submit-button"
              disabled={isSubmitting || fileUploaded}
            >
              {isSubmitting || fileUploaded ? "Please wait..." : "Submit"}
            </button>
          </form>
          {serverError && <p className="text-[#EB1414]">{serverError}</p>}
        </div>
      </div>
    </StyledForm>
  );
};

export default ServiceForm;
