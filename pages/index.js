import Sidebar from "../components/Sidebar";
import WeatherContent from "../components/WeatherContent";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <WeatherContent />
    </Layout>
  );
}
