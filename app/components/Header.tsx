import { Link } from "@remix-run/react";
import { useState } from "react";
import ArticlesPopup from "./ArticlePopup";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div>
          <Link to="/">
            <img src="/favicon.ico" alt="Sicierto" />
          </Link>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          {false ? (
            <Link to="/">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Home
              </button>
            </Link>
          ) : (
            <Link to="/queue">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Queue
              </button>
            </Link>
          )}

          <button
            onClick={togglePopup}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            + Create Video
          </button>
        </div>
      </header>
      {showPopup && <ArticlesPopup onClose={togglePopup} />}
    </>
  );
}
