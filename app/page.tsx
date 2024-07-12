"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}
