import fs from "fs";
import sharp from "sharp";

const iconPath = "img/icon.svg";
const outPath = "out/previews";

const bannerPath = "img/banner.svg";
const bannerOutPath = "out/banner.png";

sharp(bannerPath).toFile(bannerOutPath);

let outText = `# WhaleConnect Logo

Licensed under CC BY-ND 4.0

[![CC BY-ND](https://licensebuttons.net/l/by-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nd/4.0/)

## Banner

![Banner](${bannerOutPath})

## Icon Preview

`;

for (const size of [16, 24, 32, 48, 64, 128, 256]) {
  const previewPath = `${outPath}/icon_${size}.png`;
  sharp(iconPath).resize(size, size).toFile(previewPath);

  outText += `### ${size}x${size}\n\n![${size}x${size}](${previewPath})\n\n`;
}

outText += `## Generate

\`\`\`shell
npm i
npm run generate-ico
npm run generate-icns
npm run generate-previews
\`\`\`
`

fs.writeFileSync("readme.md", outText);
