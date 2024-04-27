import axios from "axios";

const devUrls = {
  tst: "dev.tst.cresolInfoserv.work",
  api: "https://cresolinfoserv-forms.onrender.com",
};

let urls = devUrls;

const api = axios.create({
  baseURL: urls.api,
});

//Contact Form

export const contactForm = (args) =>
  api.post("/contact-form", {
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    companyName: args.companyName,
    enquiries: args.enquiries,
  });

export const googleSheetContactForm = (args) =>
  api.post("/googleSheet/contact-form", {
    submissionDate: args.submissionDate,
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    companyName: args.companyName,
    enquiries: args.enquiries,
  });

//Home Contact Form

export const popupForm = (args) =>
  api.post("/home-contact-form", {
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    enquiries: args.enquiries,
  });

export const popupFormGoogleSheet = (args) =>
  api.post("/googleSheet/home-contact-form", {
    submissionDate: args.submissionDate,
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    enquiries: args.enquiries,
  });

//DGM Form

export const dgmForm = (args) =>
  api.post("/dgm-form", {
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    description: args.description,
    domain: args.domain,
  });

export const dgmGoogleSheet = (args) =>
  api.post("/googleSheet/dgm-form", {
    submissionDate: args.submissionDate,
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    description: args.description,
    domain: args.domain,
  });

//Career Form

export const careerForm = (args) =>
  api.post("/careers-form", {
    name: args.name,
    phoneNumber: args.phoneNumber,
    email: args.email,
    position: args.position,
  });

export const careerGoogleSheet = (args) =>
  api.post("/googleSheet/careers-form", {
    submissionDate: args.submissionDate,
    name: args.name,
    phoneNumber: args.phoneNumber,
    email: args.email,
    position: args.position,
  });

//Services Form

export const servicesForm = (args) =>
  api.post("/services-form", {
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    enquiries: args.enquiries,
    description: args.description,
  });

export const servicesGoogleSheet = (args) =>
  api.post("/googleSheet/services-form", {
    submissionDate: args.submissionDate,
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    email: args.email,
    enquiries: args.enquiries,
    description: args.description,
  });
