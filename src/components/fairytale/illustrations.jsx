import React from 'react';

let uid = 0;
const nextId = () => `sion-grad-${uid++}`;

export const Sky = () => {
    const id = nextId();
    return (
        <>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bfe8ff" />
                    <stop offset="100%" stopColor="#eef8ff" />
                </linearGradient>
            </defs>
            <rect width="400" height="300" fill={`url(#${id})`} />
        </>
    );
};

export const Ground = () => <rect x="0" y="250" width="400" height="50" fill="#bfe6b4" />;

export const Sun = ({ cx = 340, cy = 50 }) => (
    <g>
        <circle cx={cx} cy={cy} r="28" fill="#ffe082" />
        <circle cx={cx} cy={cy} r="20" fill="#ffd54f" />
    </g>
);

export const Cloud = ({ x = 0, y = 0, scale = 1, opacity = 0.9 }) => (
    <g transform={`translate(${x},${y}) scale(${scale})`} fill="#ffffff" opacity={opacity}>
        <ellipse cx="0" cy="0" rx="22" ry="14" />
        <ellipse cx="18" cy="-6" rx="16" ry="12" />
        <ellipse cx="-18" cy="-4" rx="14" ry="10" />
    </g>
);

export const Rainbow = ({ cx = 200, cy = 280, r = 170, bands = 6, opacity = 1, strokeW = 10 }) => {
    const colors = ['#ff8a80', '#ffb74d', '#fff59d', '#a5d6a7', '#81d4fa', '#ce93d8'];
    return (
        <g opacity={opacity}>
            {colors.slice(0, bands).map((c, i) => {
                const rad = r - i * (strokeW + 2);
                return (
                    <path key={i} d={`M ${cx - rad} ${cy} A ${rad} ${rad} 0 0 1 ${cx + rad} ${cy}`}
                        stroke={c} strokeWidth={strokeW} fill="none" strokeLinecap="round" />
                );
            })}
        </g>
    );
};

export const Rain = () => (
    <g stroke="#90caf9" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        {Array.from({ length: 14 }).map((_, i) => {
            const x = 10 + i * 29 + (i % 2 ? 8 : 0);
            return <line key={i} x1={x} y1="10" x2={x - 8} y2="40" />;
        })}
    </g>
);

const POSES = {
    wave: {
        armLeft: 'M -18 -6 L -23 16', armRight: 'M 18 -8 Q 30 -22 26 -38',
        legLeft: 'M -8 18 L -10 40', legRight: 'M 8 18 L 10 40',
        shoeL: [-10, 42], shoeR: [10, 42],
    },
    point: {
        armLeft: 'M -18 -6 L -23 16', armRight: 'M 18 -10 L 42 -26',
        legLeft: 'M -8 18 L -10 40', legRight: 'M 8 18 L 10 40',
        shoeL: [-10, 42], shoeR: [10, 42],
    },
    walk: {
        armLeft: 'M -18 -8 L -32 -20', armRight: 'M 18 -8 L 28 12',
        legLeft: 'M -6 16 L -22 42', legRight: 'M 6 16 L 18 38',
        shoeL: [-22, 44], shoeR: [18, 40],
    },
    crouch: {
        headCy: -24,
        armLeft: 'M -14 0 L -4 26', armRight: 'M 14 0 L 4 26',
        legLeft: 'M -8 12 Q -16 22 -8 38', legRight: 'M 8 12 Q 16 22 8 38',
        shoeL: [-8, 40], shoeR: [8, 40],
    },
    sit: {
        headCy: -28, eyes: 'tired',
        armLeft: 'M -16 -2 L -14 16', armRight: 'M 16 -2 L 14 16',
        legLeft: 'M -8 14 Q -22 20 -18 32', legRight: 'M 8 14 Q 22 20 18 32',
        shoeL: [-18, 34], shoeR: [18, 34],
    },
    think: {
        armLeft: 'M -18 -6 L -22 14', armRight: 'M 18 -8 Q 30 -18 16 -30',
        legLeft: 'M -8 18 L -10 40', legRight: 'M 8 18 L 10 40',
        shoeL: [-10, 42], shoeR: [10, 42],
    },
    stand: {
        armLeft: 'M -18 -6 L -22 14', armRight: 'M 18 -6 L 22 14',
        legLeft: 'M -8 18 L -10 40', legRight: 'M 8 18 L 10 40',
        shoeL: [-10, 42], shoeR: [10, 42],
    },
};

const Star = ({ cx, cy, r = 6, color = '#fff59d' }) => {
    const pts = [];
    for (let i = 0; i < 8; i++) {
        const rad = i % 2 === 0 ? r : r * 0.4;
        const ang = (Math.PI / 4) * i - Math.PI / 2;
        pts.push(`${cx + rad * Math.cos(ang)},${cy + rad * Math.sin(ang)}`);
    }
    return <polygon points={pts.join(' ')} fill={color} />;
};

export const Girl = ({ x = 200, y = 220, pose = 'stand', flip = false, sparkle = false }) => {
    const p = POSES[pose] || POSES.stand;
    const headCy = p.headCy ?? -40;
    const hair = '#7a4a2a';
    const hairLight = '#95622f';
    const skin = '#ffe0c2';
    const dressA = '#ffb6d5';
    const dressB = '#ff8fb8';
    const sash = '#c9a0f5';
    const topY = headCy + 16;
    const hemY = headCy + 58;
    const leftX = -32;
    const rightX = 32;
    const bumps = 5;
    let hem = `M -22 ${topY} L 22 ${topY} L ${rightX} ${hemY - 10} `;
    for (let i = 0; i < bumps; i++) {
        const bx1 = rightX - (rightX - leftX) * ((i + 0.5) / bumps);
        const bx2 = rightX - (rightX - leftX) * ((i + 1) / bumps);
        hem += `Q ${bx1} ${hemY + 6} ${bx2} ${hemY - 10} `;
    }
    hem += 'Z';

    return (
        <g transform={`translate(${x},${y}) ${flip ? 'scale(-1,1)' : ''}`}>
            <path d={p.legLeft} stroke="#5d4037" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d={p.legRight} stroke="#5d4037" strokeWidth="6" strokeLinecap="round" fill="none" />
            <ellipse cx={p.shoeL[0]} cy={p.shoeL[1]} rx="7" ry="4.5" fill="#c48ee0" />
            <ellipse cx={p.shoeR[0]} cy={p.shoeR[1]} rx="7" ry="4.5" fill="#c48ee0" />

            {/* flowing hair, behind head */}
            <path d={`M -20 ${headCy - 6} C -34 ${headCy - 2} -34 ${headCy + 22} -26 ${headCy + 30}
                C -34 ${headCy + 40} -30 ${headCy + 58} -18 ${headCy + 66}
                C -24 ${headCy + 50} -20 ${headCy + 34} -22 ${headCy + 20}
                C -24 ${headCy + 6} -20 ${headCy - 4} -12 ${headCy - 10} Z`} fill={hair} />
            <path d={`M 20 ${headCy - 6} C 34 ${headCy - 2} 34 ${headCy + 22} 26 ${headCy + 30}
                C 34 ${headCy + 40} 30 ${headCy + 58} 18 ${headCy + 66}
                C 24 ${headCy + 50} 20 ${headCy + 34} 22 ${headCy + 20}
                C 24 ${headCy + 6} 20 ${headCy - 4} 12 ${headCy - 10} Z`} fill={hair} />

            {/* dress skirt + bodice + sash */}
            <path d={hem} fill={dressB} />
            <path d={`M -16 ${topY} L 16 ${topY} L 20 ${headCy + 34} L -20 ${headCy + 34} Z`} fill={dressA} />
            <rect x="-20" y={headCy + 30} width="40" height="6" fill={sash} />
            <circle cx="0" cy={headCy + 33} r="4.5" fill={sash} />
            <circle cx="-6" cy={headCy + 33} r="3" fill="#a97ee0" />
            <circle cx="6" cy={headCy + 33} r="3" fill="#a97ee0" />
            <ellipse cx="-18" cy={topY + 2} rx="7" ry="6" fill={dressA} />
            <ellipse cx="18" cy={topY + 2} rx="7" ry="6" fill={dressA} />

            <path d={p.armLeft} stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d={p.armRight} stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />

            <circle cx="0" cy={headCy} r="19" fill={skin} />
            {/* bangs / front hair */}
            <path d={`M -19 ${headCy - 2} A19 19 0 0 1 19 ${headCy - 2} L 17 ${headCy - 11} Q 8 ${headCy - 20} 0 ${headCy - 14}
                Q -8 ${headCy - 20} -17 ${headCy - 11} Z`} fill={hair} />
            <path d={`M -6 ${headCy - 13} Q -2 ${headCy - 8} -8 ${headCy - 4}`} stroke={hairLight} strokeWidth="1.6" fill="none" strokeLinecap="round" />
            {/* tiara */}
            <path d={`M -10 ${headCy - 15} L -6 ${headCy - 21} L -2 ${headCy - 15} L 0 ${headCy - 23} L 2 ${headCy - 15} L 6 ${headCy - 21} L 10 ${headCy - 15}`}
                fill="none" stroke="#ffd54f" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="0" cy={headCy - 19} r="2" fill="#81d4fa" />

            <path d={`M -12 ${headCy - 6} Q -8 ${headCy - 9} -4 ${headCy - 7}`} stroke={hair} strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d={`M 4 ${headCy - 7} Q 8 ${headCy - 9} 12 ${headCy - 6}`} stroke={hair} strokeWidth="1.6" fill="none" strokeLinecap="round" />

            {p.eyes === 'tired' ? (
                <>
                    <path d={`M -11 ${headCy - 1} Q -7 ${headCy - 4} -3 ${headCy - 1}`} stroke="#4a3222" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d={`M 3 ${headCy - 1} Q 7 ${headCy - 4} 11 ${headCy - 1}`} stroke="#4a3222" strokeWidth="2" fill="none" strokeLinecap="round" />
                </>
            ) : (
                [-7, 7].map((dx) => (
                    <React.Fragment key={dx}>
                        <ellipse cx={dx} cy={headCy - 1} rx="3.6" ry="4.6" fill="#4a3222" />
                        <ellipse cx={dx + (dx < 0 ? -1.1 : 1.1)} cy={headCy - 3} rx="1.3" ry="1.6" fill="#ffffff" />
                        <circle cx={dx + (dx < 0 ? 1 : -1)} cy={headCy + 1} r="0.6" fill="#ffffff" opacity="0.7" />
                    </React.Fragment>
                ))
            )}
            <ellipse cx="-12" cy={headCy + 5} rx="3.2" ry="2" fill="#ff9ec4" opacity="0.75" />
            <ellipse cx="12" cy={headCy + 5} rx="3.2" ry="2" fill="#ff9ec4" opacity="0.75" />
            <path d={`M -4.5 ${headCy + 7} Q 0 ${headCy + 11} 4.5 ${headCy + 7}`} stroke="#e05a7a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {sparkle && (
                <>
                    <Star cx={-38} cy={headCy - 20} r={6} color="#fff59d" />
                    <Star cx={40} cy={headCy} r={4.5} color="#ffd1e8" />
                    <Star cx={-42} cy={headCy + 30} r={4} color="#bfe6ff" />
                </>
            )}
        </g>
    );
};

export const FlowerPot = ({ x = 80, y = 240, fallen = false }) => (
    <g transform={`translate(${x},${y}) ${fallen ? 'rotate(75)' : ''}`}>
        <path d="M -14 20 L 14 20 L 10 0 L -10 0 Z" fill="#d2691e" />
        <line x1="0" y1="0" x2="0" y2="-30" stroke="#4caf50" strokeWidth="4" />
        <ellipse cx="-8" cy="-14" rx="8" ry="4" fill="#66bb6a" transform="rotate(-30 -8 -14)" />
        <ellipse cx="8" cy="-14" rx="8" ry="4" fill="#66bb6a" transform="rotate(30 8 -14)" />
        <circle cx="0" cy="-36" r="11" fill="#fdd835" />
        <circle cx="0" cy="-36" r="4" fill="#8d6e63" />
    </g>
);

export const Puppy = ({ x = 250, y = 245, happy = false }) => (
    <g transform={`translate(${x},${y})`}>
        <ellipse cx="10" cy="-8" rx="5" ry="9" fill="#a9744f" transform="rotate(-25 10 -8)" />
        <ellipse cx="26" cy="-8" rx="5" ry="9" fill="#a9744f" transform="rotate(25 26 -8)" />
        <ellipse cx="0" cy="2" rx="19" ry="11" fill="#d7ab7a" />
        <line x1="-10" y1="10" x2="-11" y2="18" stroke="#a9744f" strokeWidth="4" strokeLinecap="round" />
        <line x1="8" y1="11" x2="9" y2="19" stroke="#a9744f" strokeWidth="4" strokeLinecap="round" />
        <circle cx="18" cy="-4" r="11" fill="#d7ab7a" />
        <ellipse cx="27" cy="1" rx="6" ry="4.5" fill="#efd2ab" />
        <circle cx="31" cy="0" r="1.6" fill="#3e2723" />
        <circle cx="15" cy="-7" r="1.4" fill="#3e2723" />
        {happy
            ? <path d="M -18 0 Q -28 -12 -20 -18 Q -26 -8 -16 6" stroke="#a9744f" strokeWidth="4" fill="none" strokeLinecap="round" />
            : <path d="M -18 4 Q -24 12 -20 20" stroke="#a9744f" strokeWidth="4" fill="none" strokeLinecap="round" />}
    </g>
);

export const LeashBranch = ({ x = 250, y = 245 }) => (
    <g>
        <line x1={x - 10} y1={y - 60} x2={x + 35} y2={y - 78} stroke="#8d6e63" strokeWidth="6" strokeLinecap="round" />
        <path d={`M ${x + 18} ${y - 68} Q ${x + 26} ${y - 40} ${x + 16} ${y - 16}`} stroke="#757575" strokeWidth="2" fill="none" />
        <rect x={x + 11} y={y - 18} width="9" height="4" rx="1.5" fill="#e57373" />
    </g>
);

export const BenchGrandma = ({ x = 260, y = 232 }) => (
    <g transform={`translate(${x},${y})`}>
        <rect x="-36" y="20" width="72" height="7" rx="2" fill="#a1887f" />
        <rect x="-30" y="27" width="6" height="14" fill="#795548" />
        <rect x="24" y="27" width="6" height="14" fill="#795548" />
        <rect x="-15" y="-8" width="30" height="26" rx="11" fill="#b39ddb" />
        <path d="M -14 0 Q -20 8 -12 14" stroke="#b39ddb" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M 14 0 Q 20 8 12 14" stroke="#b39ddb" strokeWidth="7" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="-20" r="13" fill="#ffd7b5" />
        <path d="M -13 -20 A13 13 0 0 1 13 -20 L 12 -24 Q 0 -34 -12 -24 Z" fill="#cfd8dc" />
        <circle cx="0" cy="-35" r="5" fill="#cfd8dc" />
        <circle cx="-6" cy="-20" r="4" fill="none" stroke="#795548" strokeWidth="1.4" />
        <circle cx="6" cy="-20" r="4" fill="none" stroke="#795548" strokeWidth="1.4" />
        <line x1="-2" y1="-20" x2="2" y2="-20" stroke="#795548" strokeWidth="1.4" />
        <circle cx="-6" cy="-20" r="1.3" fill="#3e2723" />
        <circle cx="6" cy="-20" r="1.3" fill="#3e2723" />
        <path d="M -5 -13 Q 0 -9 5 -13" stroke="#e57373" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <ellipse cx="-8" cy="18" rx="6" ry="3.5" fill="#795548" />
        <ellipse cx="8" cy="18" rx="6" ry="3.5" fill="#795548" />
    </g>
);

export const House = ({ x = 70, y = 190, withGirl = false }) => (
    <g transform={`translate(${x},${y})`}>
        <rect x="-40" y="0" width="80" height="60" fill="#fff3e0" />
        <polygon points="-46,0 0,-34 46,0" fill="#e57373" />
        <rect x="-10" y="26" width="20" height="34" fill="#8d6e63" />
        <rect x="-32" y="14" width="18" height="18" fill="#90caf9" />
        <rect x="14" y="14" width="18" height="18" fill="#90caf9" />
        {withGirl && (
            <>
                <circle cx="-23" cy="24" r="6" fill="#ffd7b5" />
                <path d="M -26 21 A6 6 0 0 1 -20 21 L -20 19 Q -23 14 -26 19 Z" fill="#3e2723" />
                <circle cx="-25" cy="24" r="1" fill="#3e2723" />
                <circle cx="-21" cy="24" r="1" fill="#3e2723" />
            </>
        )}
    </g>
);

export const HeartRainbow = ({ x = 200, y = 140, scale = 1 }) => {
    const colors = ['#ff8a80', '#ffcc80', '#fff59d', '#a5d6a7', '#81d4fa'];
    return (
        <g transform={`translate(${x},${y}) scale(${scale})`}>
            <path d="M0,-6 C -4,-14 -18,-14 -18,-2 C -18,8 -8,14 0,22 C 8,14 18,8 18,-2 C 18,-14 4,-14 0,-6 Z" fill="#ff8fa3" opacity="0.95" />
            {colors.map((c, i) => {
                const rad = 15 - i * 2.6;
                return <path key={i} d={`M ${-rad} 6 A ${rad} ${rad} 0 0 1 ${rad} 6`} stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round" />;
            })}
        </g>
    );
};

export const ThoughtBubble = ({ x = 280, y = 70 }) => (
    <g transform={`translate(${x},${y})`}>
        <ellipse cx="0" cy="0" rx="46" ry="32" fill="#fff" stroke="#e0e0e0" strokeWidth="1.5" />
        <circle cx="-40" cy="34" r="6" fill="#fff" stroke="#e0e0e0" strokeWidth="1.5" />
        <circle cx="-50" cy="44" r="3.5" fill="#fff" stroke="#e0e0e0" strokeWidth="1.5" />
    </g>
);

export const Scene = ({ children }) => (
    <svg viewBox="0 0 400 300" width="100%" height="100%">
        <Sky />
        {children}
    </svg>
);
