/* eslint-disable @typescript-eslint/no-explicit-any */

const SearchIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
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
        d="M16.0417 16.0417L12.9167 12.9167M3.95833 9.16667C3.95833 6.29019 6.29018 3.95834 9.16666 3.95834C12.0431 3.95834 14.375 6.29019 14.375 9.16667C14.375 12.0432 12.0431 14.375 9.16666 14.375C6.29018 14.375 3.95833 12.0432 3.95833 9.16667Z"
        stroke={color || "#94A3B8"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;