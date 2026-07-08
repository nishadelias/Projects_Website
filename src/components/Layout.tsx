import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__logo">
            Projects
          </Link>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Projects I&apos;ve built</p>
        </div>
      </footer>
    </div>
  )
}
