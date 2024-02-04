import { useEffect, useState } from "react";
import { Form } from "react-router-dom";


export async function addComment(args) {
  const data = await args.request.formData();
  const author = data.get("author")
  const title = data.get("title")
  const text = data.get("text")

  return fetch("http://localhost:3000/comments", {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      text
    }),
    headers: {
      "content-type": "application/json",
    }
  })
}


export default function ProductCardComments({ productId }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/comments?productId=${productId}`)
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, [productId]);

  console.log(comments);
  return (
    comments && (
      <div>
        <h2 className="text-2xl">Komentarze</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="pt-4">
            <h3 className="text-green-600">{comment.title}</h3>
            <p>{comment.text}</p>
            <p className="text-gray-500">{comment.author}</p>
          </div>
        ))}
        <div className="p-10 border border-solid border-red-100">
          <h3>Dodaj nowy:</h3>
          <Form method="POST" action={`/comments`} className="flex flex-col">
            <label htmlFor="rating">Ocena</label>
            <select className="bg-yellow-100" name="rating" id="rating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <label htmlFor="author">Imię:</label>
            <input className="bg-yellow-100" type="text" name="author" id="author"></input>
            <label htmlFor="title">Tytuł:</label>
            <input className="bg-yellow-100" type="text" name="title" id="title"></input>
            <label htmlFor="text">Treść</label>
            <textarea className="bg-yellow-100" name="text" id="text"></textarea>
            <button className="bg-yellow-300" type="submit">prześlij</button>
          </Form>
        </div>
      </div>
    )
  );
}
