/* eslint-disable @typescript-eslint/no-explicit-any */

const MenuIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
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
        d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20"
        stroke={color || "#64748B"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;