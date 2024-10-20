/* eslint-disable @typescript-eslint/no-explicit-any */

const InfoIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
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
        d="M8 8.66666V9.99999" 
        stroke={color || "#64748B"} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M8.33333 5.99999C8.33333 6.18409 8.1841 6.33332 8 6.33332C7.81591 6.33332 7.66667 6.18409 7.66667 5.99999C7.66667 5.81589 7.81591 5.66666 8 5.66666C8.1841 5.66666 8.33333 5.81589 8.33333 5.99999Z"
        stroke={color || "#64748B"}
      />
      <path
        d="M12.8333 7.99999C12.8333 10.6694 10.6694 12.8333 8 12.8333C5.33062 12.8333 3.16667 10.6694 3.16667 7.99999C3.16667 5.33061 5.33062 3.16666 8 3.16666C10.6694 3.16666 12.8333 5.33061 12.8333 7.99999Z"
        stroke={color || "#64748B"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;