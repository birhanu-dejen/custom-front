"use client";

import React from "react";
import GoogleIcon from "./icons/googleIcon";

type Provider = "google"; // add more providers here if needed

interface SocialProviderConfig {
  provider: Provider;
  icon: React.ComponentType<{ className?: string }>;
  defaultText: string;
}

const SOCIAL_PROVIDERS: SocialProviderConfig[] = [
  {
    provider: "google",
    icon: GoogleIcon,
    defaultText: "Sign up with Google",
  },
  // add more providers here if needed
];

interface SocialProps {
  /** Optional text to override the default button text */
  text?: string;
}

const Social: React.FC<SocialProps> = ({ text }) => {
  const handleSignIn = (provider: Provider) => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/${provider}`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="space-y-3">
      {SOCIAL_PROVIDERS.map(({ provider, icon: Icon, defaultText }) => (
        <button
          key={provider}
          onClick={() => handleSignIn(provider)}
          className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer"
        >
          <Icon className="w-6 h-6" />
          <span>{text ?? defaultText}</span>
        </button>
      ))}
    </div>
  );
};

export default Social;
