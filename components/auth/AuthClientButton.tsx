"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function AuthClientButton({
  session,
}: {
  session: Session | null;
}) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {session ? (
        <Button
          className="ml-auto !bg-blue-500 hover:!bg-blue-500 hover:brightness-130"
          onClick={handleSignOut}
        >
          サインアウト
        </Button>
      ) : (
        <Button
          className="ml-auto !bg-blue-500 hover:!bg-blue-500 hover:brightness-130"
          onClick={handleSignIn}
        >
          サインイン
        </Button>
      )}
    </>
  );
}
