import { Link } from "react-router-dom";

function Home() {
  return (
    <main class="home">
      <div className="home__intro">
        <h2>Czym jest PEH?</h2>
        <p>
          Równowaga PEH to nic innego, jak właściwy balans trzech podstawowych
          składników, które musisz uwzględnić w swojej pielęgnacji włosów, by
          były one mocne, nawilżone, sprężyste i gładkie. PEH jest skrótem
          kolejno od: protein (P), emolientów (E) i humektantów (H)
        </p>
        <Link to="/products">
          <button>Sprawdź odżywki</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
