import { FaGithub } from "react-icons/fa";

export default function GithubButton() {
  return (
    <button
      className="bg-[#483375] w-full flex items-center justify-center text-white
       space-x-2 py-2.5 rounded-sm hover:bg-opacity-90 mt-2.5"
    >
      <FaGithub size="24px" />
      <span className="text-sm">Login with Github</span>
    </button>
  );
}
