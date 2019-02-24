import React from 'react';

export const FlexRow = props => {
  return (
    <div className="FlexRow">
      {props.children}
    </div>
  )
}
export const FlexColumn = props => {
  return (
    <div className="FlexColumn">
      {props.children}
    </div>
  )
}