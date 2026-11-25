import { mkdirSync, writeFileSync } from "node:fs";

// One-liner for the One-Liner Marathon: a deadpan turn — the search for
// one true self finds a committee instead.
const joke =
  "I went on a silent retreat to find myself \u2014 I was outvoted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
