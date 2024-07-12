import type { Website } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
export default function CardWebsite({ website }: { website: Website }) {
  const { url, nip, infos, name } = website;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{infos}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4 gap-2 items-center w-full">
          <div className="font-semibold">URL:</div>
          <Button asChild variant="outline">
            <Link href={url} target="_blank">
              {url}
            </Link>
          </Button>
        </div>
        {nip.length > 0 && (
          <div className="flex gap-2 items-center w-full">
            <div className="font-semibold">NIP:</div>
            <div className="border rounded-md p-2 px-4 h-10 py-2 text-sm font-medium inline-flex items-center justify-center whitespace-nowrap">
              {nip}
            </div>
            <Button size="icon" variant="outline">
              <Pencil1Icon />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
