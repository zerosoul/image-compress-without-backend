
export function getSizeFormated(size) {
  return size / 1024 > 1024
    ? `${(size / 1024 / 1024).toFixed(2)}M`
    : `${(size / 1024).toFixed(2)}KB`;
}
