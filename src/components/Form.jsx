import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    contactNumber: "",
    emailAddress: "",
    occupation: "",
    employerName: "",
    employerAddress: "",
    idProof: "",
    FullLegalName: "",
    rentalStartDate: "",
    rentalEndDate: "",
    rentAmount: "",
    securityDeposit: "",
    specialTerms: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "idProof" && !isNaN(value) && value.length <= 12) {
      setFormData({
        ...formData,
        [name]: value,
      });
      if (value.length === 12) {
        setTimeout(() => {
          toast.success("Your ID proof is checked and validated.");
        }, 0);
      }
    } else if (name !== "idProof") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        validationErrors[key] = "This field is required";
      }
    });
    setFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      toast.success("Form submitted successfully");
      console.log("Form submitted:", formData);
    } else {
      Object.values(validationErrors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Form</h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            style={{
              marginBottom: "15px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label
              htmlFor={key}
              style={{
                fontWeight: "bold",
                marginBottom: "5px",
                marginRight: "10px",
              }}
            >
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </label>
            <input
              type={key === "emailAddress" ? "email" : "text"}
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
        ))}
        <h2 style={{ textAlign: "center" }}>Rental Agreement Details</h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="rentalStartDate"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Rental/Lease Agreement Start Date:
          </label>
          <input
            type="date"
            id="rentalStartDate"
            name="rentalStartDate"
            value={formData.rentalStartDate}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="rentalEndDate"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Rental/Lease Agreement End Date:
          </label>
          <input
            type="date"
            id="rentalEndDate"
            name="rentalEndDate"
            value={formData.rentalEndDate}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="rentAmount"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Rent Amount:
          </label>
          <input
            type="text"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="securityDeposit"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Security Deposit Amount:
          </label>
          <input
            type="text"
            id="securityDeposit"
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="specialTerms"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Any Special Terms or Conditions of the Agreement:
          </label>
          <textarea
            id="specialTerms"
            name="specialTerms"
            value={formData.specialTerms}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              minHeight: "100px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign Smart Contract
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
