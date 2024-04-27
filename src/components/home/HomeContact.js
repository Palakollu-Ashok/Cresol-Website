import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { popupForm, popupFormGoogleSheet } from "../../services/api";
import { useNavigate } from "react-router-dom";
import StyledForm from "./style/home-contact";

const HomeContact = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const [fileUploaded, setFileUploaded] = useState(false);
  const [serverError, setServerError] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const countryCodes = [
    { label: "+91 - India", value: "+91" },
    { label: "+1 - United States", value: "+1" },
    { label: "+44 - United Kingdom", value: "+44" },
    { label: "+1 - Canada", value: "+1" },
    { label: "+61 - Australia", value: "+61" },
  ];

  const InquriesData = [
    {
      id: 1,
      name: "UI/UX Design",
    },
    {
      id: 2,
      name: "Web Development",
    },
    {
      id: 3,
      name: "Mobile app Development",
    },
    {
      id: 4,
      name: "Testing",
    },
    {
      id: 5,
      name: "Digital Marketing",
    },
  ];

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const onSubmit = (data) => {
    data.phoneNumber = selectedCountryCode + " " + data.phoneNumber;

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

    popupFormGoogleSheet(data, setFileUploaded(true))
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(data);
          setFileUploaded(false);
          reset();
          navigate("/thanks");
          setTimeout(() => {
            navigate("/");
          }, 10000);
          popupForm(data, setFileUploaded(true)).then((res) => {
            console.log("contact form res ", res);
          });
        }
      })
      .catch((err) => {
        alert("Failed to Submit!");
        console.log(err);
      });
  };

  return (
    <StyledForm>
      <div className="justify-center main-wrapper">
        <div className="contact-details">
          <div className="text-center">
            <h2 className="main">Contact Form</h2>
          </div>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label htmlFor="fullName" className="text-black ">
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

            <div className="w-full">
              <label htmlFor="Email" className="text-black ">
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

            <div className="w-full">
              <label htmlFor="Enquiries" className="text-black ">
                Which service you're looking for?{" "}
                <span className="text-[#EB1414]">*</span>
              </label>

              <select
                aria-describedby="Enquiries_error"
                id="Enquiries"
                name="Enquiries"
                className={`block w-full lg:p-[6px] p-[2px] border border-black/20 rounded-[4px]  bg-white focus:outline-none text-black ${
                  errors.enquiries ? "border-[#EB1414]" : ""
                }`}
                {...register("enquiries", {
                  required: "Services is required",
                })}
                onKeyUp={() => {
                  trigger("enquiries");
                }}
              >
                <option value="">Select Service</option>
                {InquriesData.map((c, idx) => (
                  <option value={c.InquriesData} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.enquiries && (
                <small className="text-[#EB1414]" id="Enquiries_error">
                  {errors.enquiries.message}
                </small>
              )}
            </div>

            <div className="lg:col-span-2 w-full md:flex justify-between md:space-x-[4%]">
              <div className="w-full">
                <label htmlFor="countryCode" className="text-black">
                  Country Code <span className="text-[#EB1414]">*</span>
                </label>
                <select
                  id="countryCode"
                  name="countryCode"
                  className={`input-style ${
                    errors.countryCode ? "border-[#EB1414]" : ""
                  }`}
                  {...register("countryCode", {
                    required: "Country Code is required",
                  })}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  value={selectedCountryCode}
                  onKeyUp={() => {
                    trigger("countryCode");
                  }}
                >
                  <option value="" disabled>
                    Select Country Code
                  </option>
                  {countryCodes.map((code) => (
                    <option key={code.value} value={code.label}>
                      {code.label}
                    </option>
                  ))}
                </select>

                {errors.countryCode && (
                  <small className="text-[#EB1414]" id="CountryCode_error">
                    {errors.countryCode.message}
                  </small>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="Phone Number" className="text-black ">
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

export default HomeContact;
