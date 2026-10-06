import Image from "next/image";

type EditorialImageProps = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string };

export function EditorialImage({ src, alt, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: EditorialImageProps) {
  return <div className={`image-frame ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes={sizes} /></div>;
}
