/* eslint-disable @typescript-eslint/no-explicit-any */

const ArrowDownRight = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
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
        d="M11.5 5.83333V11.5H5.83333M11.3333 11.3333L4.5 4.5" 
        stroke="#F43F5E" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownRight;