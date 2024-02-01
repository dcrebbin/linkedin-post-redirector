"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && location.search !== "") {
      setIsRedirecting(true);
      let newUrl = location.search.replace("?=", "");

      if (newUrl.indexOf("https://") === -1) {
        newUrl = "https://" + newUrl;
      }
      router.push(newUrl.replaceAll("[dot]", "."));
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isRedirecting ? (
        "Redirecting..."
      ) : (
        <div>
          This is a Redirect Site to Redirect urls from LinkedIn Posts.<br></br>
          In order to circumvent the LinkedIn shortener for added
          <br></br>
          <br></br>
          ✨Brand Awareness✨
          <br></br>
          <br></br>
          Tutorial ^_~
          <br></br>
          <br></br>
          Paste this{" "}
          <a className="underline" href="coolthing.app/?=yoururl.com">
            coolthing.app/?=yoururl[dot]com
          </a>{" "}
          into your LinkedIn!
          <br></br>
          <br></br>
          <a className="underline" href="https://github.com/dcrebbin">
            Github
          </a>
        </div>
      )}
    </main>
  );
}
