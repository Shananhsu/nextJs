import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.svg" width={128} height={77}/>
      </div>
      <Link href="/">
        <a>首頁</a>
      </Link>
      <Link href="/about">
        <a>關於我</a>
      </Link>
      <Link href="/ninjas">
        <a>人物介紹</a>
      </Link>
    </nav>
  );
};

export default Navbar;
