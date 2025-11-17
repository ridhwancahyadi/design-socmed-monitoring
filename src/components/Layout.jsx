import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">
        <Header />

        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
