import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="home__intro">
        <h2>Czym jest PEH?</h2>
        <p>
          Równowaga PEH to nic innego, jak właściwy balans trzech podstawowych
          składników, które musisz uwzględnić w swojej pielęgnacji włosów, by
          były one mocne, nawilżone, sprężyste i gładkie. PEH jest skrótem
          kolejno od: protein (P), emolientów (E) i humektantów (H)
        </p>
        <Link to="/about">
          <button>Dowiedz się więcej</button>
        </Link>
      </div>
      <div className="home__intro">
        <h2>Jakich składników potrzebuję?</h2>
        <p>
          Odpowiedz na pytania i zobacz czego potrzebują Twoje włosy.
        </p>
        <Link to="/test">
          <button>Zrób test</button>
        </Link>

      </div>
      <div className="home__intro">
        <h2>Jak znaleźć odżywkę?</h2>
        <p>
          Sprawdź wyszukiwarkę odżywek po type.
        </p>
        <Link to="/products">
          <button>Wyszukaj odżywkę</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
