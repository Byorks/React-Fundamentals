import  { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout () {
    return (
        <>
        <MainNavigation/>
        {/* Aqui marca o local onde os filhos serão renderizados */}
        <main>
            <Outlet/>
        </main>
        
        </>
    );
}

export default RootLayout;