import { Outlet } from "react-router-dom"
const RootLayout = () => {
  return (
    <div className="min-h-screen space-y-10">
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-4xl font-bold text-white">Products Manager</h1>
        </div>
      </header>
      <main className="mx-auto max-w-6xl p-10 bg-white shadow-md rounded-lg">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout