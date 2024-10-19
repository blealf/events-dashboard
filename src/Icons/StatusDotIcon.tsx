/* eslint-disable @typescript-eslint/no-explicit-any */

const StatusDotIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="8" cy="8" r="3" fill={color || "#3B82F6"} />
    </svg>
  );
};

export default StatusDotIcon;