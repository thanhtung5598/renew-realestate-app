import { Meta } from "@/components/templates/meta";
import { Layout } from "@/components/templates/layout";
import { useAppSelector } from "@/store";

const Profile = () => {
  const profile = useAppSelector((state) => state.auth.profile);

  return (
    <Layout meta={<Meta title="Profile" description="Profile Page" />}>
      <div className="p-profile">
        <div style={{ display: "flex" }}>
          <div>Email:</div>
          <div>{profile.email}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Name:</div>
          <div>{profile.name}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
