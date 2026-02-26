import { useEffect } from "react";

export function useHmsr() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hmsr = params.get("hmsr");
    if (hmsr) {
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `hmsr=${encodeURIComponent(hmsr)}; domain=.a9app.cn; path=/; max-age=${maxAge}; SameSite=Lax`;
    }
  }, []);
}
