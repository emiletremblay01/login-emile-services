import { auth, signOut } from "@/auth";
import CardWebsite from "@/components/card-website";
import { Button } from "@/components/ui/button";
import { getUserByEmail } from "@/data/user";

import Link from "next/link";
export default async function SettingsPage() {
  const session = await auth();

  const email = session?.user.email;
  if (!email) {
    return <div>Not logged in</div>;
  }

  const user = await getUserByEmail(email);
  if (!user) {
    return <div>User not found</div>;
  }

  const { websites, name } = user;

  return (
    <div className="container w-full flex flex-col">
      <div className="w-full flex h-20 items-center justify-between">
        <div className="text-xl font-semibold text-muted-foreground">
          Emile Tremblay Services
        </div>

        <form
          className=""
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
      <main className="flex flex-col">
        <div className="text-4xl w-full text-center my-10 font-bold">
          Hi {name}
        </div>
        <div className="flex flex-col">
          {websites && websites.length > 0 ? (
            <>
              <div className="text-2xl font-bold mb-2">Websites</div>
              <div className="flex flex-col gap-2 mb-4">
                {websites.map((website) => (
                  <CardWebsite key={website.url} website={website} />
                ))}
              </div>
              <div className="w-full text-center">
                For any changes or new websites, please contact me at{" "}
                <Link
                  className="underline transition hover:text-muted-foreground italic"
                  href="mailto:emile.t.business@gmail.com"
                >
                  emile.t.business@gmail.com
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-lg font-bold mb-2">You have no website!</div>
              <div>
                Write me at{" "}
                <Link
                  className="underline transition hover:text-muted-foreground italic"
                  href="mailto:emile.t.business@gmail.com"
                >
                  emile.t.business@gmail.com
                </Link>{" "}
                so we can discuss your needs and I can create a website for you!
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
