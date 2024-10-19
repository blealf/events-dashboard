/* eslint-disable @typescript-eslint/no-explicit-any */

const AvatarIcon = ({ color, ...otherProps }: {color?: string, otherProps?: any }) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_19214)">
<rect x="1" y="1" width="32" height="32" rx="16" fill="#F3F4F6"/>
<mask id="mask0_1_19214" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="32" height="32">
<circle cx="17" cy="17" r="16" fill="#F1F5F9"/>
</mask>
<g mask="url(#mask0_1_19214)">
<path d="M33 28.992V33.0013H1V29.0066C2.86127 26.5192 5.27721 24.5004 8.05572 23.1107C10.8342 21.721 13.8987 20.9987 17.0053 21.0013C23.544 21.0013 29.352 24.14 33 28.992ZM22.336 13C22.336 14.4144 21.7741 15.771 20.7739 16.7712C19.7737 17.7714 18.4172 18.3333 17.0027 18.3333C15.5882 18.3333 14.2316 17.7714 13.2314 16.7712C12.2312 15.771 11.6693 14.4144 11.6693 13C11.6693 11.5855 12.2312 10.2289 13.2314 9.22872C14.2316 8.22853 15.5882 7.66663 17.0027 7.66663C18.4172 7.66663 19.7737 8.22853 20.7739 9.22872C21.7741 10.2289 22.336 11.5855 22.336 13Z" fill="#CBD5E1"/>
</g>
</g>
<rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#E2E8F0"/>
<defs>
<clipPath id="clip0_1_19214">
<rect x="1" y="1" width="32" height="32" rx="16" fill="white"/>
</clipPath>
</defs>
</svg>
  );
};

export default AvatarIcon;