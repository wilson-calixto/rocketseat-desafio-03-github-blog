import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { PageHome } from './pages/Home'
import { Post } from './pages/Post'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route path="/:number" element={<Post />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
