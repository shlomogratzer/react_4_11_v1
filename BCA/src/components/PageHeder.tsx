import React from 'react'

interface Props{
    title:string
    subtitle:string
}

const PageHeder = ({title,subtitle}:Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default PageHeder
