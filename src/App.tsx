import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <BrowserRouter basename="/Projects_Website">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
