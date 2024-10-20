/* eslint-disable @typescript-eslint/no-explicit-any */

const ArrowDownRight = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25" 
        stroke={color || "#FCF7FF"}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" />

    </svg>
  );
};

export default ArrowDownRight;