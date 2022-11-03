export function convertHexToRgb(hex: string) {
  if (hex.length !== 6) {
    if (hex[0] === '#') {
      hex = hex.slice(1, hex.length);
    } else {
      throw new Error('Invalid hex string');
    }
  }

  return hex.match(/.{1,2}/g)!.map(part => parseInt(part, 16));
}

export function getAppPreviewBackground({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}): string {
  const primaryRgb = convertHexToRgb(primary);
  const secondaryRgb = convertHexToRgb(secondary);

  return `linear-gradient(0deg, rgba(${primaryRgb[0]},${primaryRgb[1]},${primaryRgb[2]},1) 0%, rgba(${secondaryRgb[0]},${secondaryRgb[1]},${secondaryRgb[2]},1) 100%)`;
}
