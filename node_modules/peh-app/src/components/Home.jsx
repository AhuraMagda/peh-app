import { Link } from "react-router-dom";

function Home() {
  const tables = [
    {
      header: "Czym jest PEH?",
      description:
        "Równowaga PEH to nic innego, jak właściwy balans trzech podstawowych składników, które musisz uwzględnić w swojej pielęgnacji włosów, by były one mocne, nawilżone, sprężyste i gładkie. PEH jest skrótem kolejno od: protein (P), emolientów (E) i humektantów (H)",
      btnPath: "/about",
      btnText: "Dowiedz się więcej",
    },
    {
      header: "Jakich składników potrzebuję?",
      description:
        "Odpowiedz na pytania i zobacz czego potrzebują Twoje włosy.",
      btnPath: "/test",
      btnText: "Zrób test",
    },
    {
      header: "Jak znaleźć odżywkę",
      description: "Sprawdź wyszukiwarkę odżywek po type.",
      btnPath: "/products",
      btnText: "Wyszukaj odżywkę",
    },
  ];

  return (
    <main className="mt-20vh pt-10">
      {tables.map((table) => (
        <div
          key={table.header}
          className="border-2 border-solid border-main rounded-3xl p-10 mt-5"
        >
          <h2 className="text-main text-2xl">{table.header}</h2>
          <p className="max-w-lg py-5">{table.description}</p>
          <Link to={table.btnPath}>
            <button className="bg-main border border-solid border-white px-5 py-3 rounded-3xl text-white hover:bg-white hover:text-main hover:border-main transition-all">{table.btnText}</button>
          </Link>
        </div>
      ))}
    </main>
  );
}

export default Home;
