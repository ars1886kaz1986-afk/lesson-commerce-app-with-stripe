import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthServerButton from "./auth/AuthServerButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getSession();

  return (
    <div className="flex py-4 px-6 border-b border-gray-200">
      <Link href="/">
        <Button variant={"outline"}>ホーム</Button>
      </Link>
      {user.session && (
        <Link href={"/dashboard"} className="ml-4">
          <Button variant={"outline"}>ダッシュボード</Button>
        </Link>
      )}
      <Link href="/pricing" className="ml-4">
        <Button variant={"outline"}>価格</Button>
      </Link>
      <div className="ml-auto">
        <AuthServerButton />
      </div>
    </div>
  );
}
