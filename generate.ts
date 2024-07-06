import sharp from "sharp";

const iconPath = "img/icon.svg";
const outPath = "out/previews";

const bannerPath = "img/banner.svg";
const bannerOutPath = "out/banner.png";

sharp(bannerPath).toFile(bannerOutPath);

for (const size of [16, 24, 32, 48, 64, 128, 256]) {
  const previewPath = `${outPath}/icon_${size}.png`;
  sharp(iconPath).resize(size, size).toFile(previewPath);
}
