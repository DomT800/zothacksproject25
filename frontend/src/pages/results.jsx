import React, { useState } from "react";
import Card from "@/components/Card";
import ModalV2 from "@/components/ModalV2";
import "./Results.css";

const Results = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="results-container">
      <div className="results-header">
        <p>Showing results for: </p>
      </div>

      <main className="card-grid">
        {/* You can duplicate or map these to simulate more cards */}
        <div className="card-wrapper">
          <button className="card-button" onClick={() => setIsOpen(true)}>
            <Card />
          </button>
        </div>
        <div className="card-wrapper">
          <Card />
        </div>
        <div className="card-wrapper">
          <Card />
        </div>
        <div className="card-wrapper">
          <Card />
        </div>
        <div className="card-wrapper">
          <Card />
        </div>
        <div className="card-wrapper">
          <Card />
        </div>
      </main>

      {isOpen && <ModalV2 setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Results;
