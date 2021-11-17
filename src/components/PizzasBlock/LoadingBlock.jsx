import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingBlock() {
    return (
        <ContentLoader
        className ='pizza-block'
        speed={2}
        width={260}
        height={535}
        viewBox="0 0 260 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="280" rx="6" ry="6" width="260" height="24" />
        <rect x="0" y="325" rx="6" ry="6" width="260" height="81" />
        <rect x="0" y="431" rx="6" ry="6" width="58" height="27" />
        <rect x="86" y="419" rx="30" ry="30" width="174" height="50" />
      </ContentLoader>
    )
}

export default LoadingBlock
