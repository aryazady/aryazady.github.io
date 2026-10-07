import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ResumeView from './components/ResumeView.jsx'
import siteData from './data/site.json'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout data={siteData} />}>
        <Route index element={<Navigate to="/industry" replace />} />
        <Route
          path="industry"
          element={<ResumeView data={siteData} view="industry" />}
        />
        <Route path="phd" element={<ResumeView data={siteData} view="phd" />} />
        <Route path="*" element={<Navigate to="/industry" replace />} />
      </Route>
    </Routes>
  )
}
