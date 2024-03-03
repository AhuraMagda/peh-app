import { Link } from "react-router-dom";

export default function HomePageInfoBox({ boxData }) {
  return (
    <div
      key={boxData.header}
      className="border-2 border-solid border-main rounded-3xl p-10 mt-5"
    >
      <h2 className="text-main text-2xl">{boxData.header}</h2>
      <p className="max-w-lg py-5">{boxData.description}</p>
      <Link to={boxData.btnPath}>
        <button className="bg-main border border-solid border-white px-5 py-3 rounded-3xl text-white hover:bg-white hover:text-main hover:border-main transition-all">
          {boxData.btnText}
        </button>
      </Link>
    </div>
  );
}
