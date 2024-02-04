import { useEffect, useState } from "react";

export default function ProductCardComments({ productId }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/comments?productId=${productId}`)
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, [productId]);

  console.log(comments);
  return (
    comments && (<div>
      <h2 className="text-2xl">Komentarze</h2>
      {comments.map((comment) => (
          <div key={comment.id} className="pt-4">
            <h3 className="text-green-600">{comment.title}</h3>
            <p>{comment.text}</p>
            <p className="text-gray-500">{comment.author}</p>
          </div>
      ))}

    </div>)
  );
}
