import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { getUserByEmail } from "@/data/user";

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

  const { websites } = user;

  return (
    <div className="container w-full flex flex-col">
      <div className="w-full flex  h-20 items-center justify-between">
        <div className=" text-xl font-semibold text-muted-foreground">
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
        <div className="text-4xl w-full text-center mt-10 font-bold">
          Bonjour {user.name}
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold">Websites</div>
          <div className="flex flex-col">
            {websites.map((website) => (
              <div key={website.url} className="flex flex-col">
                <div className="text-lg">{website.url}</div>
                <div className="text-lg">{website.nip}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
