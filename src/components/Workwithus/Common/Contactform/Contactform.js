import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import CareerFromStyle from "../../styles/careersFormStyle";

function Contactform() {
  const [fileUploaded, setFileUploaded] = useState(false);

  const positionList = [
    // {
    //   id: 1,
    //   position: "ReactJs Developer",
    // },
    // {
    //   id: 2,
    //   position: "Laravel Developer",
    // },
    // {
    //   id: 3,
    //   position: "Web Designer",
    // },
    {
      id: 1,
      position: "Digital Marketing",
    },

    {
      id: 2,
      position: "Business Development",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 50000);
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const onSubmit = async (data) => {
    setFileUploaded(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("position", data.position);
    formData.append("file", data.file[0]);

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

    try {
      const response = await axios.post(
        "https://cresolinfoserv-forms.onrender.com/careers-form",
        formData
      );
      if (response.status === 200) {
        setFileUploaded(false);
        reset();
        alert("Application submitted successfully");
      } else {
        console.log("Failed to send application");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CareerFromStyle>
      <div className="main-wrapper">
        <div className="contact-details">
          <div className="text-start">
            <h2 className="main">Apply for this position</h2>
          </div>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label htmlFor="Name">
                Name <span className="text-[#EB1414]">*</span>
              </label>

              <input
                id="Name"
                name="Name"
                type="text"
                className={`input-style ${
                  errors.name ? "border-[#EB1414]" : ""
                }`}
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Please enter valid name",
                  },
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-[#EB1414]" id="Name_error">
                  {errors.name.message}
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
              <label htmlFor="Phone_Number">
                Phone Number <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Phone_Number_error"
                id="Phone_Number"
                name="Phone_Number"
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

            <div>
              <label htmlFor="Select_position">
                Select position <span className="text-[#EB1414]">*</span>
              </label>
              <select
                name="Select_position"
                id="Select_position"
                className="input-style"
                {...register("position", {
                  required: "Position is required",
                })}
                onKeyUp={() => {
                  trigger("position");
                }}
              >
                <option value="">Select position</option>

                {positionList.map((c, idx) => (
                  <option value={c.position} key={c.position}>
                    {c.position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <small className="text-[#EB1414]" id="Select_position_error">
                  {errors.position.message}
                </small>
              )}
            </div>

            <div className="w-full sm:col-span-2">
              <label htmlFor="upload file">
                Upload Resume/CV <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                className={`input-style ${
                  errors.file ? "border-[#EB1414]" : ""
                }`}
                {...register("file", {
                  required: "File Upload is required",
                  pattern: {
                    value: /(\.pdf|\.xlsx|\.docx)$/i,
                    message: ".pdf or .xlsx or .docx  is required",
                  },
                })}
              />
              {errors.file && (
                <small className="text-[#EB1414]" id="Phone_Number_error">
                  {errors.file.message}
                </small>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || fileUploaded}
              aria-live="polite"
              aria-atomic="true"
              className="submit-button"
            >
              {isSubmitting || fileUploaded ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </CareerFromStyle>
  );
}

export default Contactform;
