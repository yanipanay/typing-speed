import React from "react";

function BottomMenu() {
  return (
    <>
      <div className="bottom-menu">
        <div className="reset-icon"></div>
        <div className="reset-esc">
          <span className="key">esc</span> - reset
        </div>
        <div className="words-number">
          <span className="key">15</span>
          <span className="key">30</span>
          <span className="key">60</span>
          <span className="key">90</span> - no. of words
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
