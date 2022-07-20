import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { History } from './pages/History';
import { Home } from './pages/Home';

export function Router(){
    return(
        <Routes>
            {/* "path='/'" para dizer que esse layout deve estar em todas rotas com '/' no começo */}
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/history' element={<History/>}/>
            </Route>
        </Routes>     
    );
}