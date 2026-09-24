import fs from "node:fs";
import path from "node:path";
import { profile } from "@/content/site";

// Evaluated at build time: CV buttons render only when the PDF is present.
export const hasCv = fs.existsSync(path.join(process.cwd(), "public", profile.cvFile));
