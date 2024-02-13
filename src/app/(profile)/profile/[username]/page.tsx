import ProfileCard from "@/components/profile/ProfileCard";
import ProfileForm from "@/components/profile/ProfileForm";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({
  params: { username },
}: ProfilePageProps) {
  console.log(username);
  return (
    <main
      className="px-4 md:px-0 flex flex-col md:flex-row items-center md:space-x-8 max-w-5xl 
    mx-auto text-center py-8"
    >
      <ProfileCard />
      <ProfileForm />
    </main>
  );
}
