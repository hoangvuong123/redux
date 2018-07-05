// @flow

import * as React from 'react'

type LinkType = {
  active: boolean,
  children: React.Node,
  onClick: () => void
}

const Link = ({ active, children, onClick }: LinkType) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

export default Link
