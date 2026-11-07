/*
  RESPONSIVE IMAGES
  Each optimized image has a smaller copy (name-800.webp or name-600.webp) so
  phones download a fraction of the full file. Sizes are listed here so the
  browser can reserve space before the image loads (no layout jump).

  Adding a new image: put name.webp and name-800.webp in public/img/optimized/
  and add a line below.
*/

const SIZES = {
  "/img/optimized/zohocrmplus.webp": [1600, 752, 800],
  "/img/optimized/incoming-call-crm.webp": [1600, 782, 800],
  "/img/optimized/konect.webp": [1600, 1018, 800],
  "/img/optimized/secureloan.webp": [1600, 773, 800],
  "/img/optimized/xpay.webp": [1200, 1642, 800],
  "/img/optimized/gategold.webp": [1400, 1400, 600],
  "/img/optimized/creastech.webp": [1400, 1400, 600],
  "/img/optimized/frictionless.webp": [1400, 1400, 600],
  "/img/optimized/jomabel.webp": [1353, 632, 600],
};

const smallCopy = (src, w) => src.replace(/\.webp$/, `-${w}.webp`);

/*
  Spread the result onto an <img>:
    <img {...responsive(src, "(max-width: 900px) 100vw, 600px")} alt="..." />
  Unknown images just get their src.
*/
export function responsive(src, sizes) {
  const info = SIZES[src];
  if (!info) return { src };

  const [width, height, small] = info;
  return {
    src,
    srcSet: `${smallCopy(src, small)} ${small}w, ${src} ${width}w`,
    sizes,
    width,
    height,
  };
}

// The small copy on its own, for thumbnails
export function thumbnail(src) {
  const info = SIZES[src];
  return info ? smallCopy(src, info[2]) : src;
}
