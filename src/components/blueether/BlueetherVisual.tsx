export function BlueetherVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`blueether-visual ${compact ? "is-compact" : ""}`} aria-label="BLUEETHER strategic system diagram">
    <svg viewBox="0 0 900 520" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="be-glow"><stop offset="0" stopColor="#fff" stopOpacity=".18"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
      </defs>
      <circle className="be-glow" cx="450" cy="260" r="220" fill="url(#be-glow)"/>
      <g className="be-orbits">
        <ellipse cx="450" cy="260" rx="340" ry="164"/>
        <ellipse cx="450" cy="260" rx="250" ry="220"/>
        <ellipse cx="450" cy="260" rx="150" ry="118"/>
      </g>
      <g className="be-lines">
        <path d="M450 260 L130 148 L270 420 L690 394 L770 124 Z"/>
        <path d="M450 260 L270 104 L130 330 L584 70 L770 332 Z"/>
      </g>
      <g className="be-nodes">
        <circle cx="130" cy="148" r="6"/><circle cx="270" cy="420" r="6"/><circle cx="690" cy="394" r="6"/><circle cx="770" cy="124" r="6"/>
        <circle cx="270" cy="104" r="4"/><circle cx="130" cy="330" r="4"/><circle cx="584" cy="70" r="4"/><circle cx="770" cy="332" r="4"/>
      </g>
    </svg>
    <div className="be-core"><span>BE</span><small>01 / SYSTEM</small></div>
    <span className="be-tag tag-a">Intelligence</span><span className="be-tag tag-b">Governance</span><span className="be-tag tag-c">Opportunity</span>
    <div className="be-caption"><span>BLUEETHER</span><small>Strategic intelligence & systems</small></div>
  </div>;
}
