// src/components/Layout.jsx
import React, { useState } from "react"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Sidebar fixed di kiri */}
      <Sidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
      />

      {/* Konten utama geser sesuai lebar sidebar */}
      <main
        className={`min-h-screen transition-all duration-300 px-6 py-6 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
