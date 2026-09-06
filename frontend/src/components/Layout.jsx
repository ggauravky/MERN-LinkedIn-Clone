import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] text-[#000000]">
        <div className="bg-[#004182] text-white text-xs text-center py-1.5 px-4 font-medium">
          ⚠️ <strong>Portfolio Demo:</strong> This is an educational MERN LinkedIn clone. Do not enter real LinkedIn credentials.
        </div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-5">
            {children}
        </main>
    </div>
  )
}

export default Layout
