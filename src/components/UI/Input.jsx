/**
 * @param {string} label - The input label
 * @param {string} id - The input id
 * @param {Object} props - The input props
 * @returns {JSX.Element} The input element
 */
const Input = ({ label, id, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
};

export default Input;
