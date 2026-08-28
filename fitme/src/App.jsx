import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Section from './Section'
import Background from './Background'
import Fetch from './Fetch'
// import Lastpage from './Lastpage'
import Rice from './Rice'
import Dishes from './Dishes'
import Page from './Page'
// import Rest from './Rest'

function LoginModal({ onClose }) {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login form submitted:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
     <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5">
       <div className="mb-5 flex items-center justify-between">
         <h2 className="text-2xl font-bold text-black">Welcome back</h2>
         <button
           type="button"
           onClick={onClose}
           className="text-2xl text-gray-500 transition hover:text-black"
           aria-label="Close login form"
         >
           ×
         </button>
       </div>

       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
             className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
             placeholder="you@example.com"
           />
         </div>

         <div>
           <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
           <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required
             className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
             placeholder="••••••••"
           />
         </div>

         <button
           type="submit"
           className="w-full rounded-lg bg-amber-600 px-4 py-2.5 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-lg"
         >
           Log In
         </button>
       </form>
     </div>
    </div>
  )
}

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
     <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f7f5f0] text-slate-900">
       <Nav onOpenLogin={() => setIsLoginOpen(true)} />
       <Section />
       <Background />
       <Fetch />
       {/* <Lastpage /> */}
       <Rice onOpenLogin={() => setIsLoginOpen(true)} />
       <Dishes />
       <Page />
       {/* <Rest onOpenLogin={() => setIsLoginOpen(true)} /> */}
     </div>

     {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </>
  )
}

export default App
