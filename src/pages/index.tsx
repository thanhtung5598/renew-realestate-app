import { Meta } from "@/components/templates/meta";
import { Layout } from "@/components/templates/layout";
import { useAppSelector } from "@/store";

const Home = () => {
  const sample = useAppSelector((state) => state.sample);

  return (
    <Layout meta={<Meta title="Home" description="Home Page" />}>
      <div>Home</div>
      <div>{sample.value}</div>
    </Layout>
  );
};
export default Home;
