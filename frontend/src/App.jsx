import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  return (
    <>
    {/* <h1 className="text-3xl font-bold text-orange-500 text-center mt-10">
      Tailwind is working 🚀
    </h1> */}
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Make sure main expands to fill space */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
    
  )
}

export default App
