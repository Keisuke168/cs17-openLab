import * as React from "react"
import { Global } from "@emotion/react"

const Layout = ({ children, className = `` }) => (
  <React.Fragment>
    <Global
      styles={() => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
          margin: `0px`,
          fontFamily: `Times-New-Roman`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `auto`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `sans-serif`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
      })}
    />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
