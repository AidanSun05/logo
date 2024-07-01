import fs from "fs";
import sharp from "sharp";

const iconPath = "img/icon.svg";
const outPath = "out/previews";

const bannerPath = "img/banner.svg";
const bannerOutPath = "out/banner.png";

sharp(bannerPath).toFile(bannerOutPath);

let outText = `# WhaleConnect Logo\n\n![Banner](${bannerOutPath})\n\n## Icon Preview\n\n`;

for (const size of [16, 24, 32, 48, 64, 128, 256]) {
  const previewPath = `${outPath}/icon_${size}.png`;
  sharp(iconPath).resize(size, size).toFile(previewPath);

  outText += `### ${size}x${size}\n\n![${size}x${size}](${previewPath})\n\n`;
}

outText += "## Generate\n\n```shell\nnpm i\nnpm run generate-previews\nnpm run generate-icons\n```\n"

fs.writeFileSync("readme.md", outText);
