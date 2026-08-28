import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__logo">
            Nishad&apos;s Projects
          </Link>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Nishad&apos;s Projects</p>
        </div>
      </footer>
    </div>
  )
}
