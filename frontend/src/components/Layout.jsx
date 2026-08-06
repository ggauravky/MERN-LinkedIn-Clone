import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] text-[#000000]">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-5">
            {children}
        </main>
    </div>
  )
}

export default Layout
