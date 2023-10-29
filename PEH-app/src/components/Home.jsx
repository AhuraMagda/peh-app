

import { useSearchParams } from 'react-router-dom';
import Products from './Products';


function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    return (
  
    <main className='home'>
        <div className='home__nav'>
            <button onClick={()=>setSearchParams({type: "emolientowa"})}>emolietowe</button>
            <button onClick={()=>setSearchParams({type: "proteinowa"})}>proteinowe</button>
            <button onClick={()=>setSearchParams({type: "humektantowa"})}>humektantowe</button>
            <button onClick={()=>setSearchParams({})}>wszystkie</button>
        </div>

        <div className='home__content'>
            <Products typeFilter={typeFilter} searchParams={searchParams} />  
        </div>

    </main>


    )
}

export default Home;