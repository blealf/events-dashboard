/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

/**
 * The `Button` component in TypeScript React generates a button with dynamic styling based on props
 * like type, outlined, and disabled status.
 * @param  - The `Button` component you provided is a React functional component that generates a
 * button element with customizable styles based on the props passed to it. Here's a breakdown of the
 * parameters and functionality of the `Button` component:
 * @returns The `Button` component is returning a `<button>` element with dynamically generated CSS
 * classes based on the props and functions used within the component. The classes include styles for
 * background color, text color, border, padding, cursor behavior, and more. The `bgColor` function
 * determines the background color classes based on the `type` prop. The final `btnClasses` string
 * combines all the necessary classes
 */
const Button = (
  {
    className,
    children,
    disabled,
    outlined,
    type,
    ...otherProps
  }: {
    className?: string
    children: React.ReactNode
    disabled?: boolean
    outlined?: boolean
    type?: 'primary' | 'secondary' | 'danger' | 'success'
    [key: string]: any
  }
) => {

  /**
   * The function `bgColor` returns a string representing the background color and additional classes
   * based on the input type.
   * @returns The `bgColor` function returns a string based on the `type` parameter. If the `type` is
   * 'primary', it returns a string with the classes 'bg-primary', 'border-none', and 'text-text-dark'.
   * If the `type` is 'secondary', it returns a string with the classes 'bg-secondary', 'border-none',
   * 'text-text-dark', and '!text-text
   */
  const bgColor = () => {
    const otherClasses = `border-none text-text-dark`
    switch(type) {
      case 'primary':
        return `bg-primary ${otherClasses}`
      case 'secondary':
        return `bg-secondary ${otherClasses} !text-text-light`
      case 'danger':
        return `bg-danger ${otherClasses}`
      case 'success':
        return `bg-success ${otherClasses}`
      default:
        return 'bg-transparent border border-button-outline text-text-light'
    }
  }

  /* The `btnClasses` constant is a string that contains a combination of CSS classes and dynamic
  values based on the props and functions used in the `Button` component. Here's a breakdown of what
  each part of the string represents: */
  const btnClasses = `py-2 px-4 rounded-[2px] flex items-center justify-center gap-2
    cursor-pointer text-[14px] font-[400] text-text-light
    ${bgColor()}
    ${outlined && 'border border-button-button-outline text-text-alt-light'}
    ${disabled && 'cursor-not-allowed bg-gray-300 text-white'}
    ${className || ''} 
  `
  return (
    <button
      type="button"
      className={btnClasses}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button