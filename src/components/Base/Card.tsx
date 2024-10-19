
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`p-4 border border-border-card-border rounded-[2px] dark:bg-main-dark dark:border-none ${className}`}>
      {children}
    </div>
  )
}

export default Card