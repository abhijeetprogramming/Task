import React from "react";
import './ViewToggle.css';

const ViewToggle = ({ gridView, setGridView }) => {
  return (
    <div className="view-toggle">
      <button
        className={gridView ? "active" : ""}
        onClick={() => {
          setGridView(true);
        }}
      >
        Grid View
      </button>
      <button
        className={!gridView ? "active" : ""}
        onClick={() => {
          setGridView(false);
        }}
      >
        List View
      </button>
    </div>
  );
};

export default ViewToggle;
