import Image from "next/image";
import Link from "next/link";

export default function ProfileHeader() {
  return (
    <header className="px-4 md:px-8 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/qryptell.png"
            alt="logo"
            width={120}
            height={40}
            priority
            quality={100}
          />
        </Link>
        <Image
          src="/avatar.png"
          alt="logo"
          width={40}
          height={40}
          loading="lazy"
          className="w-12 h-12 rounded-full"
        />
      </nav>
    </header>
  );
}
