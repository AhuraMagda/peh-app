import { useLoaderData, useNavigate } from "react-router-dom";
import ProductCardComments from "./ProductCardComments";
import { useState } from "react";

function ProductCard() {
  // TODO dodać komentarze
  // dodać ocenę
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleShowComments = () => {
    setCommentsVisible(true);
  };

  const product = useLoaderData();
  let navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <button onClick={() => navigate(-1)}>wróć</button>
        <img src={`/${product.img}`} className="h-48" />
        <h2 className="p-2.5 text-2xl">{product.name}</h2>
        <p className="text-xl">OCENA: 3.5⋆</p>
        <p className="py-6 max-w-sm">{product.ingredients.join(", ")}</p>
      </div>

      {commentsVisible ? (
        <ProductCardComments productId={product.id} />
      ) : (
        <button onClick={handleShowComments}>pokaż komentarze </button>
      )}
    </>
  );
}

export default ProductCard;
