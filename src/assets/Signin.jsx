import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      contact: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
      contact: Yup.string().matches(/^[0-9]+$/, "Only numbers are allowed").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" form  flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <form onSubmit={formik.handleSubmit} className=" p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Signup Form</h2>

        <label className="block text-gray-700">Username:</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="w-full p-2 border rounded-lg mb-2"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500">{formik.errors.username}</div>
        ) : null}

        <label className="block text-gray-700">Contact No:</label>
        <input
          type="text"
          name="contact"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contact}
          className="w-full p-2 border rounded-lg mb-2"
        />
        {formik.touched.contact && formik.errors.contact ? (
          <div className="text-red-500">{formik.errors.contact}</div>
        ) : null}

        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border rounded-lg mb-2"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
