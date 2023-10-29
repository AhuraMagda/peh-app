

import { Link } from "react-router-dom"



function Home() {
    return (
        <main>
            <h2>This is a home page</h2>
            <Link to="/products">Sprawdź odżywki</Link>
        </main>
    )
}

export default Home;