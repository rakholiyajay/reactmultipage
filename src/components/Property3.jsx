import React, { useState } from "react";
import { Link } from "react-router-dom";

function Property3() {
  const [bigPhotoUrl, setBigPhotoUrl] = useState(
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
  ); // State to store the URL of the big photo

  const PhotosUrl1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D";
  const PhotosUrl2 =
    "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D";
  const PhotosUrl3 =
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb3BlcnR5fGVufDB8fDB8fHww";
  const PhotosUrl4 =
    "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb3BlcnR5fGVufDB8fDB8fHww";
  return (
    <div
      className="product-container"
      style={{
        textAlign: "center",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      <h1>Gandhi Gruh</h1>
      <div
        className="photos"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <img
          src={bigPhotoUrl} // Use state variable for big photo URL
          alt="Product"
          style={{
            width: "65%",
            height: "440px",
            borderRadius: "10px",
          }}
        />
        <div
          className="small-photos"
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "130px",
          }}
        >
          <img
            src={PhotosUrl1}
            alt="Product"
            style={{
              width: "20%",
              height: "auto",
              marginRight: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setBigPhotoUrl(PhotosUrl1)}
          />
          <img
            src={PhotosUrl2}
            alt="Product"
            style={{
              width: "20%",
              height: "auto",
              marginRight: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setBigPhotoUrl(PhotosUrl2)}
          />
          <img
            src={PhotosUrl3}
            alt="Product"
            style={{
              width: "20%",
              height: "auto",
              marginRight: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setBigPhotoUrl(PhotosUrl3)}
          />
          <img
            src={PhotosUrl4}
            alt="Product"
            style={{
              width: "20%",
              height: "auto",
              marginRight: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => setBigPhotoUrl(PhotosUrl4)}
          />
        </div>

        <div
          className="description"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <p
            style={{
              marginRight: "410px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
                marginLeft: "0px",
              }}
            >
              Property Type :
            </span>
            Such as residential, commercial, land, etc.
          </p>
          <p
            style={{
              marginRight: "427px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Location :
            </span>
            Including the address, city, state, and zip code.
          </p>
          <p>
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Description :
            </span>
            A detailed description highlighting the key features, amenities, and
            selling points of the property.
          </p>
          <p
            style={{
              marginRight: "585px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Price :
            </span>
            The listing price of the property.
          </p>
          <p
            style={{
              marginRight: "119px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Images :
            </span>
            High-quality images showcasing the interior, exterior, and
            surroundings of the property.
          </p>
          <p
            style={{
              marginRight: "37px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Property Size :
            </span>
            Including the total area, number of bedrooms, bathrooms, and other
            relevant dimensions.
          </p>
          <p
            style={{
              marginRight: "175px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Features and Amenities :
            </span>
            Such as parking space, garden, swimming pool, balcony, etc.
          </p>
          <p
            style={{
              marginRight: "120px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Property Condition :
            </span>
            Whether it's new, under construction, or resale, and its overall
            condition.
          </p>
          <p
            style={{
              marginRight: "183px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Floor Plan :
            </span>
            If available, a floor plan detailing the layout and dimensions of
            the property.
          </p>
          <p
            style={{
              marginLeft: "126px",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Contact Information :
            </span>
            Details of the real estate agent or agency handling the property
            listing, including contact name, email, and phone number.
          </p>
        </div>
        <Link to="/form" style={{ textDecoration: "none", margin: "0 5px" }}>
          <button
            className="redirect-button"
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 9px #999",
              transition: "0.3s",
            }}
            onClick={() => console.log("Redirect clicked")} // Add your redirection logic here
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Redirect
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Property3;
