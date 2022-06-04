import Layout from "../Layout";
import Sidebar from "../components/Sidebar";
import WeatherContent from "../components/WeatherContent";
import SearchBar from "../components/SearchBar";
export default function Home() {
  return (
    <Layout>
      <Sidebar />
      {/* <SearchBar /> */}
      <WeatherContent />
    </Layout>
  );
}
