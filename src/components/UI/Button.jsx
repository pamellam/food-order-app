/**
 * Creates a button component with the given properties.
 * @param {string} children - The text or element to display inside the button.
 * @param {boolean} [textOnly=false] - Whether to display the button with only text.
 * @param {string} [className] - Additional CSS classes to apply to the button.
 * @param {Object} [props] - Additional properties to apply to the button element.
 * @returns {JSX.Element} The button component.
 */
const Button = ({ children, textOnly, className, ...props }) => {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
