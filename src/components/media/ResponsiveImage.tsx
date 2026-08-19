type ResponsiveImageProps = {
  name: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  treatment?: "cinematic" | "product" | "natural";
  fullBleed?: boolean;
};

export function ResponsiveImage({
  name,
  alt,
  width,
  height,
  className = "",
  priority = false,
  treatment = "natural",
  fullBleed = false,
}: ResponsiveImageProps) {
  const classes = [
    "responsive-image",
    "image-reveal",
    `${treatment}-image`,
    fullBleed ? "full-bleed" : "",
    className,
  ].filter(Boolean).join(" ");

  return <picture className={classes} data-image-treatment={treatment}>
    <source media="(max-width: 760px)" srcSet={`/images/v2/optimized/${name}-sm.webp`} />
    <img
      src={`/images/v2/optimized/${name}-lg.webp`}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  </picture>;
}
