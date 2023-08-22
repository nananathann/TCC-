import { Routes, Route } from 'react-router-dom'
import App from './App'
import Sobre from './sobre'
import Objetivos from './objetivos'
import Equipamentos from './equipamentos'
import Projeto from './projeto'
import Bibliografia from './bibliografia'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/objetivos" element={<Objetivos />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/equipamentos" element={<Equipamentos />}/>
            <Route path="/projeto" element={<Projeto />}/>
            <Route path="/bibliografia" element={<Bibliografia />}/>
        </Routes>
    )
}
