

import { Link, useSearchParams } from 'react-router-dom';
import ProductsList from './ProductsList';


function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    return (
  
    <main className='home'>
        <div className='home__nav'>
            <Link to="..">HOME</Link>
            <button onClick={()=>setSearchParams({type: "emolientowa"})}>emolietowe</button>
            <button onClick={()=>setSearchParams({type: "proteinowa"})}>proteinowe</button>
            <button onClick={()=>setSearchParams({type: "humektantowa"})}>humektantowe</button>
            <button onClick={()=>setSearchParams({})}>wszystkie</button>
        </div>

        <div className='home__content'>
            <ProductsList typeFilter={typeFilter} searchParams={searchParams} />  
        </div>

    </main>


    )
}

export default Products;