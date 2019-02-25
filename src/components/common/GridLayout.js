import React from 'react';

const GridLayout = props => {
  let gridLayout = (x = 10, y = 10) => {
    let columns = [];
    let rows = []
    for(let i = 0; i < x; i++) {
      rows.push(<div key={i} style={{margin: 10, backgroundColor: "blue", height: 10, width: 10, flex: 1, flexDirection: "column"}}>{i}</div>)
    }
    for(let i = 0; i < y; i++) {
      columns.push(<div key={i} style={{display: "flex", flexDirection: "row"}}>{rows}</div>)
    }
    return columns
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>{gridLayout(props.x, props.y)}</div>
  )
}

export default GridLayout;