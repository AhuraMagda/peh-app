import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="mt-20vh">
      <div className="border-2 border-solid border-main rounded-3xl p-20">
        <h2 className="text-main">Czym jest PEH?</h2>
        <p className="max-w-lg py-20">
          Równowaga PEH to nic innego, jak właściwy balans trzech podstawowych
          składników, które musisz uwzględnić w swojej pielęgnacji włosów, by
          były one mocne, nawilżone, sprężyste i gładkie. PEH jest skrótem
          kolejno od: protein (P), emolientów (E) i humektantów (H)
        </p>
        <Link to="/about">
          <button>Dowiedz się więcej</button>
        </Link>
      </div>
      <div className="border-2 border-solid border-main rounded-3xl p-20">
        <h2 className="text-main">Jakich składników potrzebuję?</h2>
        <p className="max-w-lg py-20">
          Odpowiedz na pytania i zobacz czego potrzebują Twoje włosy.
        </p>
        <Link to="/test">
          <button>Zrób test</button>
        </Link>

      </div>
      <div className="border-2 border-solid border-main rounded-3xl p-20">
        <h2 className="text-main">Jak znaleźć odżywkę?</h2>
        <p className="max-w-lg py-20">
          Sprawdź wyszukiwarkę odżywek po type.
        </p>
        <Link to="/products">
          <button className="p-7 text-white border-1 border-solid border-white bg-main rounded-2xl cursor-pointer">Wyszukaj odżywkę</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
