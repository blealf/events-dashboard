/* eslint-disable @typescript-eslint/no-explicit-any */

const ReportsIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M2.5 8.33332C2.5 5.19082 2.5 3.61916 3.47667 2.64332C4.45333 1.66749 6.02417 1.66666 9.16667 1.66666H10.8333C13.9758 1.66666 15.5475 1.66666 16.5233 2.64332C17.4992 3.61999 17.5 5.19082 17.5 8.33332V11.6667C17.5 14.8092 17.5 16.3808 16.5233 17.3567C15.5467 18.3325 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3567C2.50083 16.38 2.5 14.8092 2.5 11.6667V8.33332Z"
        stroke={color || "#ADA9BB"}
        strokeWidth="1.5"
      />
      <path
        d="M6.66666 8.33331H13.3333M6.66666 11.6666H10.8333"
        stroke={color || "#ADA9BB"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ReportsIcon;