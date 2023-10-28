


import { Outlet } from "react-router-dom"



function Layout() {
    return (
    <div className='page-wrapper'>
        <header>
            <h1>Znajdź odżywkę jakiej potrzebujesz</h1>
        </header>
        <Outlet />

    </div>
    )
}

export default Layout;