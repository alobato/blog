import React from 'react'
import Highlight from 'react-highlight.js'

const Lab = ({ posts }) => {
  return (
    <div>

      <div style={{ color: '#28234a' }}>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 100 }}>
          Thin
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 300 }}>
          Light
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 400 }}>
          Regular
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 500 }}>
          Medium
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 600 }}>
          SemiBold
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 700 }}>
          Bold
        </div>
        <div style={{ fontFamily: 'Hero New', fontSize: 64, fontWeight: 800 }}>
          ExtraBold
        </div>
        <Highlight language='javascript'>
          const a = 'b';
        </Highlight>
      </div>

    </div>
  )
}

export default Lab
