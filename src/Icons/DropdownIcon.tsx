/* eslint-disable @typescript-eslint/no-explicit-any */

const DropdownIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M10.1666 7.16666L7.99998 9.5L5.83331 7.16666"
        stroke={color || "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  );
};

export default DropdownIcon;