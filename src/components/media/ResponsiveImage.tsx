type ResponsiveImageProps = {
  name: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function ResponsiveImage({ name, alt, width, height, className = "", priority = false }: ResponsiveImageProps) {
  return <picture className={`responsive-image ${className}`}>
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
