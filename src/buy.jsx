import React, { useState } from "react";
import styled from "styled-components";

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    occupation: "",
    aadharNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form data
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      occupation: "",
      aadharNumber: "",
    });
    // Hide the form
    setShowForm(false);
  };

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Real Estate Search</h2>

      <div className="container grid grid-three-column">
        {/* Property cards */}
        {/* Include your property cards here */}
      </div>

      {/* Search Bar */}
      {/* Include your search bar here */}

      {/* Form */}
      {showForm && (
        <FormWrapper>
          <h3>Enter Your Details</h3>
          <form onSubmit={handleSubmit}>
            <FormField>
              <label>Full Legal Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <label>Occupation:</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <FormField>
              <label>Aadhar Card Number:</label>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                required
              />
            </FormField>
            <Button type="submit">Submit</Button>
          </form>
        </FormWrapper>
      )}

      {/* Link to sign smart contracts */}
      <div className="sign-contracts">
        <a href="/smart-contracts">
          Sign Smart Contracts <span>&#10148;</span>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Your existing styles here */
`;

const FormWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Services;
