import React from "react";
import styled from "styled-components";

// Import images for property cards
import house1 from "./components/images/house1.jpg";
import house2 from "./components/images/house2.jpg";
import house3 from "./components/images/house3.jpg";
import house4 from "./components/images/house4.jpg";
import { Link } from "react-router-dom";
import Property1 from "./components/Property1";

const Search = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Real Estate Search</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          style={{
            marginBottom: "40px",
            width: "300px",
            height: "30px",
          }}
          type="text"
          placeholder="Search for properties"
        />
        <button
          style={{
            marginLeft: "20px",
            marginBottom: "40px",
            width: "90px",
            height: "30px",
          }}
        >
          Search
        </button>
      </div>

      {/* Property Cards */}
      <div className="container grid grid-three-column">
        {/* Property Card 1 */}
        <div
          className="card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            margin: "20px auto",
          }}
        >
          <figure style={{ margin: "0", padding: "0" }}>
            <img
              src={house1}
              alt="Shanti Houses"
              style={{
                width: "100%",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
          </figure>
          <div className="card-data" style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Shanti Houses
            </h3>
            <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
              Beautiful 3-bedroom house with a garden in peaceful surroundings.
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "14px" }}>
              <strong>Address:</strong> 123 Shanti Nagar, Ahmedabad
            </p>
            <div
              className="buttons"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                to="/property1"
                style={{ textDecoration: "none", margin: "0 5px" }}
              >
                <button
                  className="buy-btn"
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  BUY
                </button>
              </Link>
              <button
                className="rent-btn"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#FFC107",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                RENT
              </button>
            </div>
          </div>
        </div>

        {/* Property Card 2 */}
        <div
          className="card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            margin: "20px auto",
          }}
        >
          <figure style={{ margin: "0", padding: "0" }}>
            <img
              src={house2}
              alt="Laxmi Vilas"
              style={{
                width: "100%",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
          </figure>
          <div className="card-data" style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Laxmi Vilas
            </h3>
            <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
              Luxurious villa with modern amenities and a pool.
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "14px" }}>
              <strong>Address:</strong> 456 Laxmi Road, Ahmedabad
            </p>
            <div
              className="buttons"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                to="/property2"
                style={{ textDecoration: "none", margin: "0 5px" }}
              >
                <button
                  className="buy-btn"
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  BUY
                </button>
              </Link>
              <button
                className="rent-btn"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#FFC107",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                RENT
              </button>
            </div>
          </div>
        </div>
        {/* Property Card 3 */}
        <div
          className="card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            margin: "auto",
          }}
        >
          <figure style={{ margin: "0", padding: "0" }}>
            <img
              src={house3}
              alt="Gandhi Gruh"
              style={{
                width: "100%",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
          </figure>
          <div className="card-data" style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
              Gandhi Gruh
            </h3>
            <p style={{ margin: "0 0 10px", fontSize: "16px" }}>
              Luxurious villa with modern amenities and a pool.
            </p>
            <p style={{ margin: "0 0 10px", fontSize: "14px" }}>
              <strong>Address:</strong> 456 Laxmi Road, Ahmedabad
            </p>
            <div
              className="buttons"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                to="/property3"
                style={{ textDecoration: "none", margin: "0 5px" }}
              >
                <button
                  className="buy-btn"
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  BUY
                </button>
              </Link>
              <button
                className="rent-btn"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#FFC107",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                RENT
              </button>
            </div>
          </div>
        </div>

        {/* Add more property cards as needed */}
      </div>
    </Wrapper>
  );
};

// Styled component for the Search component
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: #f4f4f4; /* Real estate-themed background color */

  .container {
    max-width: 120rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 auto;
  }

  .card {
    width: 300px; /* Set a specific width for the card */
    height: auto; /* Allow the height to adjust based on content */
    margin: 0 auto; /* Center the card horizontally on the page */
    border: 0.1rem solid rgba(170, 170, 170, 0.4);
    border-radius: 0.5rem;
    overflow: hidden;

    figure {
      margin: 0;

      img {
        width: 100%;
        height: 200px; /* Set a specific height for image cropping */
        object-fit: cover; /* Crop images to fit specified dimensions */
      }
    }

    .card-data {
      padding: 1.5rem;

      h3 {
        margin-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: bold;
        color: #333; /* Adjusted text color */
      }

      p {
        margin-bottom: 0.5rem; /* Adjusted spacing */

        strong {
          font-weight: bold; /* Bold text style */
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      button {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-family: inherit; /* Use the same font as the rest of the text */
        font-size: inherit; /* Use the same font size as the rest of the text */
      }

      .buy-btn {
        background-color: #007bff; /* Blue color for Buy button */
        color: #fff; /* White text color */
      }

      .rent-btn {
        background-color: #28a745; /* Green color for Rent button */
        color: #fff; /* White text color */
      }
    }
  }

  .search-bar {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type="text"] {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
      font-family: inherit; /* Use the same font as the rest of the text */
      font-size: inherit; /* Use the same font size as the rest of the text */
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #007bff; /* Blue color for Search button */
      color: #fff; /* White text color */
      border: none;
      cursor: pointer;
      font-family: inherit; /* Use the same font as the rest of the text */
      font-size: inherit; /* Use the same font size as the rest of the text */
    }
  }
`;

export default Search;
