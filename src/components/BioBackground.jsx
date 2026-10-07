import { useEffect, useMemo, useState } from 'react'

const rng = (s) => () => (s = (s * 16807) % 2147483647) / 2147483647

function helix(x, y, len, angle) {
  const rungs = Math.floor(len / 16),
    step = len / rungs,
    pts = [],
    bars = []
  for (let i = 0; i <= rungs; i++) {
    const off = Math.sin((i * Math.PI * 2) / 8) * 14
    pts.push([i * step, off])
    bars.push([i * step, off])
  }
  const d = (s) =>
    pts
      .map(
        (p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${(s * p[1]).toFixed(1)}`,
      )
      .join(' ')
  return { x, y, angle, p1: d(1), p2: d(-1), bars }
}

function graph(w, h, rand) {
  const nodes = Array.from(
    { length: Math.max(8, Math.round((w * h) / 40000)) },
    () => ({
      x: rand() * w,
      y: rand() * h,
      r: 3 + rand() * 3,
    }),
  )
  const edges = []
  nodes.forEach((a, i) =>
    nodes.slice(i + 1).forEach((b, j) => {
      if (Math.hypot(a.x - b.x, a.y - b.y) < 140) edges.push([a, b])
    }),
  )
  return { nodes, edges }
}

export default function BioBackground() {
  const [{ w, h }, setSize] = useState({ w: 1200, h: 900 })

  useEffect(() => {
    let t
    const update = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight })
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(update, 150)
    }
    update()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(t)
    }
  }, [])

  const { g, helices } = useMemo(() => {
    const rand = rng(42)
    const n = Math.max(2, Math.round((w * h) / 400000))
    return {
      g: graph(w, h, rand),
      helices: Array.from({ length: n }, () =>
        helix(rand() * w, rand() * h, 200 + rand() * 200, rand() * 360),
      ),
    }
  }, [w, h])

  return (
    <svg className="bio-bg" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <g stroke="#2f6b4f" strokeWidth="1">
        {g.edges.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        ))}
      </g>
      <g fill="#3f8f6b">
        {g.nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} />
        ))}
      </g>
      {helices.map((hx, i) => (
        <g
          key={i}
          transform={`translate(${hx.x} ${hx.y}) rotate(${hx.angle})`}
          fill="none"
          strokeWidth="1.4"
        >
          <path d={hx.p1} stroke="#2f6b4f" />
          <path d={hx.p2} stroke="#1f5c7a" />
          {hx.bars.map(([t, o], k) => (
            <line
              key={k}
              x1={t}
              y1={o}
              x2={t}
              y2={-o}
              stroke="#2f6b4f"
              strokeWidth="1"
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
