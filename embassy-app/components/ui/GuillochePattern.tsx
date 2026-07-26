// The guilloché engraved-line pattern is the site's one deliberate
// signature element (see design spec): the fine radiating line
// engraving seen on official documents, passports, and currency,
// used here instead of stock photography or a gradient hero.
//
// It's generated procedurally (a few dozen path points) rather than
// shipped as a large pasted SVG blob, so it stays cheap on the wire.
// Pure presentation, so it's rendered as a Server Component with
// aria-hidden — it never carries meaning that needs to reach
// assistive technology.

function rosettePaths(
  count: number,
  cx: number,
  cy: number,
  color: string,
  opacity: number
): string[] {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const phase = i * ((Math.PI * 2) / count) * 0.6;
    const rBase = 40 + i * 14;
    const amp = 60;
    const freq = 2.2;
    const steps = 90;
    const pts: string[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = (s / steps) * Math.PI * 2;
      const r = rBase + amp * Math.sin(freq * t + phase);
      const x = cx + r * Math.cos(t);
      const y = cy + r * 0.62 * Math.sin(t);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    paths.push(
      `<path d="M${pts.join(" L")} Z" fill="none" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`
    );
  }
  return paths;
}

export function GuillocheRosette({
  className,
  color = "#0F2A22",
  opacity = 0.08,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const width = 900;
  const height = 700;
  const paths = rosettePaths(18, width * 0.62, height * 0.5, color, opacity);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: paths.join("") }}
    />
  );
}

function bandPaths(
  width: number,
  height: number,
  count: number,
  color: string,
  opacity: number
): string[] {
  const paths: string[] = [];
  const cy = height / 2;
  for (let i = 0; i < count; i++) {
    const phase = i * 0.35;
    const amp = 14 * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.7)));
    const steps = 120;
    const pts: string[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = t * width;
      const y =
        cy +
        amp * Math.sin(3 * Math.PI * 2 * t + phase) * Math.sin(Math.PI * t);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    paths.push(
      `<path d="M${pts.join(" L")}" fill="none" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`
    );
  }
  return paths;
}

export function GuillocheBand({
  className,
  color = "#C9A659",
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const width = 1400;
  const height = 64;
  const paths = bandPaths(width, height, 9, color, opacity);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: paths.join("") }}
    />
  );
}
