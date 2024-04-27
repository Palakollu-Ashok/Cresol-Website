import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { contactForm, googleSheetContactForm } from "../../services/api";
import { useNavigate } from "react-router-dom";
import StyledForm from "./styles/contactForm";

function FormPage() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

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
      name: "UI / UX",
    },
    {
      id: 2,
      name: "Web Development",
    },
    {
      id: 3,
      name: "Mobile App Development",
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

  const contactDetailsData = [
    {
      id: 1,
      title: "For General enquiries:",
      mail: " info@cresolinfoserv.com",
    },
    // {
    //   id: 2,
    //   title: "For Business enquiries:",
    //   mail: "services@cresolinfoserv.com",
    // },
  ];

  const [fileUploaded, setFileUploaded] = useState(false);

  //disable button function
  const [change, setChange] = useState(false);
  function buttonHandler() {
    setChange(!change);
  }

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 50000);
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

    googleSheetContactForm(data, setFileUploaded(true))
      .then((res) => {
        if (res.status === 200) {
          setFileUploaded(false);
          reset();
          navigate("/thanks");
          setTimeout(() => {
            navigate("/");
          }, 10000);
          contactForm(data, setFileUploaded(true)).then((res) => {});
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
          <h3 className="main">
            we work across countries like India, USA, UK, Australia -Connect us
            for Global business
          </h3>

          <div>
            {contactDetailsData.map((d, idx) => (
              <div>
                <h4 className="description">{d.title}</h4>
                <a href={`mailto:${d.mail}`} className="mails">
                  {d.mail}
                </a>
              </div>
            ))}
          </div>
          <div>
            <h3 className="main">Location</h3>
            <img src="/assets/Talktoexpert/Map1.jpg" alt="" />
          </div>
        </div>

        <div className="form-wrapper">
          <h2 className="text-2xl font-semibold text-black">
            Need assistance? please fill the form
          </h2>

          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <div className="flex items-center space-x-1 text-black">
                <label htmlFor="First Name">What’s your full name?</label>
                <p className="text-[#EB1414]">*</p>
              </div>

              <input
                id="fullName"
                name="fullName"
                type="text"
                aria-describedby="Name_error"
                className={`input-style ${
                  errors.fullName ? "border-b-[#EB1414]" : ""
                }`}
                {...register("fullName", {
                  required: "Name is required",
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

            <div className="w-full ">
              <div className="flex items-center space-x-1 text-black">
                <label htmlFor="Email">What’s your email address?</label>
                <p className="text-[#EB1414]">*</p>
              </div>

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
              <div className="flex items-center space-x-1 text-black">
                <label htmlFor="First Name">What’s your phone number?</label>
                <p className="text-[#EB1414]">*</p>
              </div>

              <input
                name="phoneNumber"
                type="text"
                id="phoneNumber"
                aria-describedby="Phone_Number_error"
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

            <div className="w-full ">
              <div className="flex items-center space-x-1 text-black">
                <label htmlFor="First Name"> What’s your company name?</label>
                <p className="text-[#EB1414]">*</p>
              </div>

              <input
                type="text"
                aria-describedby="Company_Name_error"
                id="companyName"
                name="companyName"
                className={`input-style ${
                  errors.websits ? "border-[#EB1414]" : ""
                }`}
                {...register("companyName", {
                  required: "Company Name is required",
                })}
                onKeyUp={() => {
                  trigger("companyName");
                }}
              />
              {errors.companyName && (
                <small className="text-[#EB1414]" id="Company_Name_error">
                  {errors.companyName.message}
                </small>
              )}
            </div>

            <div className="w-full ">
              <div className="flex items-center space-x-1 text-black">
                <label htmlFor="First Name">
                  Which service you're looking for?
                </label>
                <p className="text-[#EB1414]">*</p>
              </div>

              <select
                aria-describedby="Enquiries_error"
                id="Enquiries"
                name="Enquiries"
                className={`input-style ${
                  errors.enquiries ? "border-[#EB1414]" : ""
                }`}
                {...register("enquiries", {
                  required: "Select Enquiries is required",
                })}
                onKeyUp={() => {
                  trigger("enquiries");
                }}
              >
                <option value="">Choose from a list here</option>
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

            <div className="checkbox-style ">
              <input onChange={buttonHandler} type="checkbox" name="" id="" />
              <p className="text-black">
                I agree to talk about my project with Cresol Infoserv
              </p>
            </div>

            <button
              type="submit"
              // role="status"
              aria-live="polite"
              aria-atomic="true"
              disabled={change || fileUploaded ? false : true}
              className="submit-button"
            >
              {isSubmitting || fileUploaded ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </StyledForm>
  );
}

export default FormPage;
