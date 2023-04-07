import React, { ReactNode } from 'react'

type Nolayoutprops = {
    children: ReactNode;
  };
  
const NoLayout = ({ children }: Nolayoutprops) => {
  return (
    <div>{ children }</div>
  )
}

export default NoLayout