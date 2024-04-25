import Images from "~/components/Images";

import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="mx-auto px-10">
      <SignedOut>
        <div className="h-full w-full text-2xl"> Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
