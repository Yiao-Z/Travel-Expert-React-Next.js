/* Alvin made this file */
import ChinaMap from "../ChinaMap";
import SiteHeader from "../apptopbar";

export const metadata = {
  title: "Cities & Regions | Travel China",
  description: "Explore China's provinces and regions with our interactive map.",
};

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ChinaMap />
      </main>
    </>
  );
}
