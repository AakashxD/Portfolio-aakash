import React from "react";
import Heading from "./heading";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <>
      <section className="flex flex-col gap-8 mt-16">
        <Heading title="Skills" />

        <article className="flex items-center gap-2 px-6 flex-wrap">
          {[
            "ReactJs",
            "JavaScript",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "TailwindCSS",
            "Redis",
            "NodeJs/ExpressJs",
            "WebSockets",
            "Git/Github",
            "NextJs"
          ].map((item, index) => (
            <Badge
              key={index}
              className="h-10 bg-accent text-sm text-foreground rounded-md px-4"
            >
              {item}
            </Badge>
          ))}
        </article>
      </section>
    </>
  );
}
