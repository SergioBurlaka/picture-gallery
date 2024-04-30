import Link from "next/Link";

import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import UploadButtonSimple from "./UploadButtonSimple";

const TopNav = () => {
  return (
    <nav className="fixed bg-white flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h2>Gallery</h2>
      <Link href="/"> Home </Link>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          <UploadButtonSimple />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
