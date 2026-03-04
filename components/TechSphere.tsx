import React, { useRef, useEffect } from 'react';

// ── Tech list ─────────────────────────────────────────────────────────────────
// Use `slug` for SimpleIcons CDN:  https://simpleicons.org  (find the slug there)
// Use `imageUrl` for anything SimpleIcons doesn't have → drop file in /public/images/tech/
interface TechIcon {
    name: string;
    color: string;
    slug?: string;      // SimpleIcons → https://cdn.simpleicons.org/{slug}
    imageUrl?: string;  // local path or any external URL (takes priority over slug)
}

const ICONS: TechIcon[] = [
    // ── Cloud (local PNGs kept for reliability) ──────────────────────────────
    { name: 'AWS', color: '#FF9900', imageUrl: '/images/tech/aws.png' },
    { name: 'Azure', color: '#0078D4', imageUrl: '/images/tech/azure.png' },
    // ── DevOps / Infra ───────────────────────────────────────────────────────
    { name: 'Docker', color: '#2496ED', slug: 'docker' },
    { name: 'Terraform', color: '#844FBA', slug: 'terraform' },
    { name: 'GitHub Actions', color: '#2088FF', slug: 'githubactions' },
    { name: 'Kubernetes', color: '#326CE5', slug: 'kubernetes' },
    { name: 'Jenkins', color: '#D24939', slug: 'jenkins' },
    { name: 'Linux', color: '#FCC624', slug: 'linux' },
    // ── Languages / Frameworks ───────────────────────────────────────────────
    { name: 'Python', color: '#3776AB', slug: 'python' },
    { name: 'TypeScript', color: '#3178C6', slug: 'typescript' },
    { name: 'React', color: '#61DAFB', slug: 'react' },
    { name: 'Go', color: '#00ADD8', slug: 'go' },
    { name: 'Bash', color: '#4EAA25', slug: 'gnubash' },
    { name: 'Vue', color: '#4FC08D', slug: 'vue.js' },
    // ── Data ─────────────────────────────────────────────────────────────────
    { name: 'PostgreSQL', color: '#4169E1', slug: 'postgresql' },
    { name: 'Llama (Meta)', color: '#0082FB', slug: 'meta' },
];

// ── Fibonacci sphere distribution ────────────────────────────────────────────
function spherePoints(n: number) {
    const pts: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = phi * i;
        pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
    }
    return pts;
}

function rotateY([x, y, z]: [number, number, number], a: number): [number, number, number] {
    return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
}
function rotateX([x, y, z]: [number, number, number], a: number): [number, number, number] {
    return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
}

export const TechSphere: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const anglesRef = useRef({ y: 0, x: 0.3 });
    const mouseVelRef = useRef({ dy: 0, dx: 0 });
    const isDraggingRef = useRef(false);
    const lastMouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);
    const radiusRef = useRef(100); // updated by ResizeObserver

    const basePoints = spherePoints(ICONS.length);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // ── Recalculate radius whenever the container resizes ────────────────────
        const ro = new ResizeObserver(() => {
            const { width, height } = container.getBoundingClientRect();
            radiusRef.current = Math.min(width, height) * 0.38;
        });
        ro.observe(container);

        const items = Array.from(container.querySelectorAll<HTMLElement>('.sphere-item'));

        const render = () => {
            if (!isDraggingRef.current) {
                anglesRef.current.y += 0.004 + mouseVelRef.current.dy * 0.02;
                anglesRef.current.x += mouseVelRef.current.dx * 0.02;
                mouseVelRef.current.dy *= 0.92;
                mouseVelRef.current.dx *= 0.92;
            }

            const { y: ay, x: ax } = anglesRef.current;
            const R = radiusRef.current;

            basePoints.forEach(([px, py, pz], i) => {
                let [rx, ry, rz] = rotateY([px, py, pz], ay);
                [rx, ry, rz] = rotateX([rx, ry, rz], ax);

                const depth = (rz + 2) / 3;        // 0.33 … 1
                const opacity = Math.max(0.12, depth);
                const el = items[i];
                if (!el) return;
                el.style.transform = `translate(-50%,-50%) translate(${rx * R}px,${ry * R}px) scale(${0.5 + depth * 0.65})`;
                el.style.opacity = opacity.toFixed(2);
                el.style.zIndex = String(Math.round(rz * 100 + 100));
                el.style.filter = rz < 0 ? `grayscale(${Math.min(1, (-rz) * 0.6)})` : 'none';
            });

            rafRef.current = requestAnimationFrame(render);
        };
        rafRef.current = requestAnimationFrame(render);

        // ── Drag interaction ─────────────────────────────────────────────────────
        const onDown = (e: MouseEvent | TouchEvent) => {
            isDraggingRef.current = true;
            const pos = 'touches' in e ? e.touches[0] : e;
            lastMouseRef.current = { x: pos.clientX, y: pos.clientY };
        };
        const onMove = (e: MouseEvent | TouchEvent) => {
            if (!isDraggingRef.current) return;
            const pos = 'touches' in e ? e.touches[0] : e;
            const dx = pos.clientX - lastMouseRef.current.x;
            const dy = pos.clientY - lastMouseRef.current.y;
            anglesRef.current.y += dx * 0.006;
            anglesRef.current.x += dy * 0.006;
            mouseVelRef.current = { dy: dx * 0.5, dx: dy * 0.5 };
            lastMouseRef.current = { x: pos.clientX, y: pos.clientY };
        };
        const onUp = () => { isDraggingRef.current = false; };

        container.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        container.addEventListener('touchstart', onDown, { passive: true });
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('touchend', onUp);

        return () => {
            ro.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            container.removeEventListener('mousedown', onDown);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            container.removeEventListener('touchstart', onDown);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
    }, []);

    return (
        <div className="glass rounded-[2rem] p-6 flex flex-col h-full relative overflow-hidden bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[360px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-1 relative z-30 shrink-0">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700/60 dark:text-emerald-600/50">
                    Technology Stack
                </h4>
                <div className="h-1 w-6 bg-emerald-500/20 rounded-full" />
            </div>

            {/* Sphere stage — flex-1 so it fills the remaining card height */}
            <div
                ref={containerRef}
                className="flex-1 relative select-none cursor-grab active:cursor-grabbing"
            >
                {ICONS.map((icon) => (
                    <div
                        key={icon.name}
                        className="sphere-item absolute top-1/2 left-1/2 will-change-transform"
                        title={icon.name}
                    >
                        <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md border transition-all duration-150 hover:scale-125"
                            style={{
                                background: `${icon.color}15`,
                                borderColor: `${icon.color}35`,
                            }}
                        >
                            <img
                                src={icon.imageUrl ?? `https://cdn.simpleicons.org/${icon.slug}`}
                                alt={icon.name}
                                className="w-6 h-6 object-contain"
                                loading="lazy"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Hint */}
            <p className="text-center text-[9px] text-emerald-700/25 dark:text-emerald-600/25 font-mono uppercase tracking-widest shrink-0 relative z-30">
                drag to rotate
            </p>
        </div>
    );
};
