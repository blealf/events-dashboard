/* eslint-disable @typescript-eslint/no-explicit-any */

const CloseIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg 
      width="24"
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill={color || "#fff"} />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E2E8F0" />
      <path
        d="M14.625 9.375L9.375 14.625"
        stroke="#334155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.375 9.375L14.625 14.625"
        stroke="#334155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;