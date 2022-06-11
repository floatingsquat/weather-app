import Layout from "../Layout";
import Sidebar from "../components/Sidebar";
import WeatherContent from "../components/WeatherContent";
export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <WeatherContent />
    </Layout>
  );
}
