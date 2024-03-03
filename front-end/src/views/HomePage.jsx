import { HOME_PAGE_BOXES_DATA } from "../../constants/homePageData";
import InfoBox from "../components/InfoBox";

export default function HomePage() {
  return (
    <div className="mt-20vh pt-10">
      {HOME_PAGE_BOXES_DATA.map((boxData) => (
        <InfoBox key={boxData.header} boxData={boxData} />
      ))}
    </div>
  );
}
