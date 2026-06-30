interface Props {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="text-center mb-16">

      <p className="uppercase tracking-[8px] text-yellow-400 text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
        {title}
      </h2>

    </div>
  );
}<SectionTitle
subtitle="ABOUT"
title="Where Luxury Feels Personal"
/>