//  Home Page
import './page.css'
export default function HomePage() {
  return (
    <main className="flex bg-gray-800 text-white min-h-screen">
    <button className='helpbutton'></button>
    <div className="welcome-section">
    <h1 className='welcome'>Welcome to</h1>
    <h1 className="logo">LunarLoom</h1>
     <button className='bg-blue-500 getstartbtn'>Get Started</button>
    </div>
     <p className='copyrighttag text-center'>Copyright © 2023 LunarLoom 
LunarLoom Web Socket Service - WebSocket Service for LunarLoom End To End Encrypted Chat App</p>
  </main>
  )
}
