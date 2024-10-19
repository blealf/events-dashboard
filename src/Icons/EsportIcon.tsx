/* eslint-disable @typescript-eslint/no-explicit-any */

const ExportIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
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
          d="M3.16663 9.83333V10.8333C3.16663 11.9379 4.06206 12.8333 5.16663 12.8333H10.8333C11.9379 12.8333 12.8333 11.9379 12.8333 10.8333V9.83333M7.99996 9.5V3.16666M7.99996 9.5L5.83329 7.16666M7.99996 9.5L10.1666 7.16666"
          stroke={color || "#141414"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExportIcon;