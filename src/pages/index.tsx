import { Meta } from "@/components/templates/meta";
import { Layout } from "@/components/templates/layout";
import HomeContainer from "@/containers/home/home.component";

const Home = () => {
  return (
    <Layout meta={<Meta title="Home" description="Home Page" />}>
      <HomeContainer />
    </Layout>
  );
};

export default Home;
