import Image from "next/image";

function ImageTag({ src, alt, width, height, sizes, style, priority }) {
  const defaultStyles = { width: width || "100%", height: height || "100%" };
  return <Image
    src={src}
    width={(width = 0)}
    height={(height = 0)}
    sizes={sizes || "100vw"}
    style={style || defaultStyles}
    priority={priority}
    alt={alt || ""} />;
}

export default ImageTag;
