import React from 'react';
/**
 * @function Error
 * @param {string} title - The title of the error
 * @param {string} message - The message of the error
 * @returns {JSX.Element} - The Error component
 */
const Error = ({ title, message }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
