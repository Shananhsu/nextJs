import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  //重新轉跳回首頁
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooop...</h1>
      <h2>這個頁面消失在宇宙中了</h2>
      <p>
        回到
        <Link href="/">
          <a>首頁</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
