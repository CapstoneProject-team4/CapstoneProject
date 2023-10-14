import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


export default function EditPost({ token, role }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  const editPostStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f6f2f7", /* Light pink background color */
    border: "1px solid #e6e1e5", /* Light pink border */
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "24px",
    color: "#ca226b", /* Pink title color */
    marginBottom: "20px",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const labelStyle = {
    fontSize: "16px",
    color: "#000", /* Black label color */
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #e6e1e5", /* Light pink border for input */
    borderRadius: "5px",
    backgroundColor: "#fff", /* White input background */
  };

  const buttonStyle = {
    backgroundColor: "#ca226b", /* Pink button background */
    color: "#fff", /* White button text color */
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e73d8d", /* Darker pink on hover */
  };

  return (
    <>
      <Navbar token={token} role={role} />
      <div style={editPostStyle}>
        <h2 style={titleStyle}>Edit Product</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            ImgUrl:
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Brand:
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Quantity:
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Color:
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Description:
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Price:
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Size:
            <input
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={inputStyle}
            />
          </label>
          <button style={buttonStyle}>Submit</button>
        </form>
      </div>
    </>
  );
}
