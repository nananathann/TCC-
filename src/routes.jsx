import { Routes, Route } from 'react-router-dom'
import App from './App'
import Objetivos from './Objetivos'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/objetivos" element={<Objetivos />}/>
        </Routes>
    )
}
