"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { getGitHubAvatarUrl } from "@/lib/github";

interface ProfileAvatarProps {
  /** Avatar renvoyé par l'API GitHub (serveur) */
  avatarUrl?: string | null;
  className?: string;
  sizes?: string;
}

export function ProfileAvatar({
  avatarUrl,
  className,
  sizes,
}: ProfileAvatarProps) {
  const defaultSrc = getGitHubAvatarUrl(null);
  const [imgSrc, setImgSrc] = useState(() =>
    getGitHubAvatarUrl(avatarUrl ?? null)
  );
  const [loading, setLoading] = useState(!avatarUrl);

  useEffect(() => {
    setImgSrc(getGitHubAvatarUrl(avatarUrl ?? null));
    if (avatarUrl) setLoading(false);
  }, [avatarUrl]);

  useEffect(() => {
    if (avatarUrl) return;

    let cancelled = false;

    async function loadFromGitHub() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data?.user?.avatar_url) return;
        setImgSrc(getGitHubAvatarUrl(data.user.avatar_url));
      } catch {
        /* garde l'URL github.com/username.png */
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadFromGitHub();
    return () => {
      cancelled = true;
    };
  }, [avatarUrl]);

  return (
    <div className="relative h-full w-full">
      {loading && (
        <div
          className="absolute inset-0 animate-pulse rounded-full bg-slate-800"
          aria-hidden
        />
      )}
      <Image
        src={imgSrc}
        alt={`Photo de profil GitHub — ${personalInfo.shortName}`}
        fill
        className={`${className ?? "object-cover"} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        priority
        sizes={sizes ?? "(max-width: 768px) 224px, 320px"}
        onLoad={() => setLoading(false)}
        onError={() => setImgSrc(defaultSrc)}
      />
    </div>
  );
}
