import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import AuthClientButton from "./AuthClientButton"

export default async function AuthServerButton() {
    const supabase = createServerComponentClient({ cookies });
    const { data : user } = await supabase.auth.getSession();
    const session = user.session;

  return (
    <AuthClientButton session={session}/>
  )
}
