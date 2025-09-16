const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripts/generate-sri.js <file1> [file2]...");
  process.exit(2);
}

function computeSRI(filePath) {
  const data = fs.readFileSync(filePath);
  const hash = crypto.createHash("sha384").update(data).digest("base64");
  return `sha384-${hash}`;
}

args.forEach((rel) => {
  const fp = path.resolve(rel);
  if (!fs.existsSync(fp)) {
    console.error("File not found:", fp);
    return;
  }
  console.log(`${rel} -> ${computeSRI(fp)}`);
});
