/**
 * Extrait la photo du CV PDF et la sauvegarde dans public/profile.jpg
 * Usage: node scripts/extract-profile.mjs
 *
 * Nécessite: npm install pdf-parse sharp (dev)
 * Fallback: télécharge l'avatar GitHub
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const CV_ID = "14Z1uTOPOtU0aw7GPwaF3Dc4vdEdV-Qrd";
const GITHUB_USER = "tolojanaharystephan";

async function downloadGitHubAvatar() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
  if (!res.ok) throw new Error("GitHub API failed");
  const user = await res.json();
  const imgRes = await fetch(user.avatar_url);
  const buffer = Buffer.from(await imgRes.arrayBuffer());
  writeFileSync(join(publicDir, "profile.jpg"), buffer);
  console.log("✓ Avatar GitHub sauvegardé dans public/profile.jpg");
}

async function downloadCvPdf() {
  const url = `https://drive.google.com/uc?export=download&id=${CV_ID}`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error("CV download failed");
  const buffer = Buffer.from(await res.arrayBuffer());
  const cvPath = join(publicDir, "cv.pdf");
  writeFileSync(cvPath, buffer);
  console.log("✓ CV PDF téléchargé dans public/cv.pdf");
  return cvPath;
}

async function extractFromPdf() {
  try {
    const pdfParse = (await import("pdf-parse")).default;
    const cvPath = await downloadCvPdf();
    const fs = await import("fs");
    const dataBuffer = fs.readFileSync(cvPath);
    const data = await pdfParse(dataBuffer);

    if (data.info?.Creator || data.numpages) {
      console.log(`PDF analysé: ${data.numpages} page(s)`);
    }

    // pdf-parse ne extrait pas les images — fallback GitHub
    console.log("ℹ Extraction image PDF non supportée sans outil externe.");
    await downloadGitHubAvatar();
  } catch (err) {
    console.warn("Extraction PDF:", err.message);
    await downloadGitHubAvatar();
  }
}

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

extractFromPdf().catch(async () => {
  console.warn("Fallback avatar GitHub...");
  await downloadGitHubAvatar();
});
