

import { useSearchParams } from 'react-router-dom';
import Products from './Products';





function Main() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    return (
        <>
        <header>
            <h1>Znajdź odżywkę jakiej potrzebujesz</h1>
            <nav>
                <button onClick={()=>setSearchParams({type: "emolientowa"})} >emolietowe</button>
                <button onClick={()=>setSearchParams({type: "proteinowa"})} >proteinowe</button>
                <button onClick={()=>setSearchParams({type: "humektantowa"})} >humektantowe</button>
                <button onClick={()=>setSearchParams({})} > wszystkie</button>
            </nav>
        </header>

        <main>
        <Products typeFilter={typeFilter} />  
    </main>
        </>

    )

}

export default Main;