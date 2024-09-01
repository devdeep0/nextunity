"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UnityGame() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const container = document.createElement("div");
    container.id = "unity-container";
    document.body.appendChild(container);

    const iframe = document.createElement("iframe");
    iframe.src = `/unity-webgl/index.html?${searchParams.toString()}`;
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    container.appendChild(iframe);

    return () => {
      document.body.removeChild(container);
    };
  }, [searchParams]);

  return null; // No UI for this component
}

export default function UnityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnityGame />
    </Suspense>
  );
}