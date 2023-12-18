// SuccessPage.js
import React from 'react';

const SuccessPage = ({ onOkClick }) => {
  return (
    <div className="text-center mt-40 text-lg font-bold">
      <h2>Your message has been sent!</h2>
      <button onClick={onOkClick} className="bg-third mt-5 w-16 p-3 text-white cursor-pointer rounded-2xl font-semibold hover:bg-primary">
        OK
      </button>
    </div>
  );
};

export default SuccessPage;
