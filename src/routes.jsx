import { Routes, Route } from 'react-router-dom'
import App from './App'
import Objetivos from './Objetivos'
import Sobre from './sobre'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/objetivos" element={<Objetivos />}/>
            <Route path="/sobre" element={<Sobre />}/>
        </Routes>
    )
}
