import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const IconButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={`inline-flex items-center justify-center gap-2 ${rest.className ?? ''}`}>
      {children}
    </button>
  )
}
