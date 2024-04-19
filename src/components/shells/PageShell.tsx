import React from 'react'

export default function PageShell({children}) {
  return (
    <div className="items-center bg-[#050505] flex flex-col flex-nowrap gap-6 min-h-content justify-start overflow-hidden p-6 relative w-[1200px]">
      {children}
    </div>
  )
}