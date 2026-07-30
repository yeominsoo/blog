import React, { useState, useEffect, useCallback } from 'react';
import './FairytaleBook.css';
import pages from '../components/fairytale/pages';

const FairytaleBook = () => {
    const [current, setCurrent] = useState(0);
    const [view, setView] = useState('book');

    const goPrev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
    const goNext = useCallback(() => setCurrent((c) => Math.min(pages.length - 1, c + 1)), []);

    useEffect(() => {
        const onKey = (e) => {
            if (view !== 'book') return;
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [view, goPrev, goNext]);

    const page = pages[current];

    return (
        <div className="fairytale-page">
            <h1 className="fairytale-title">🌈 무지개를 따라간 시온이</h1>
            <div className="fairytale-toolbar">
                <button className={view === 'book' ? 'active' : ''} onClick={() => setView('book')}>📖 책으로 보기</button>
                <button className={view === 'gallery' ? 'active' : ''} onClick={() => setView('gallery')}>🖼️ 전체 이미지</button>
            </div>

            {view === 'book' ? (
                <div className="fairytale-book">
                    <div className="fairytale-illust">{page.illust}</div>
                    <div className="fairytale-text">{page.text}</div>
                    {page.credit && <div className="fairytale-credit">{page.credit}</div>}
                    <div className="fairytale-dots">
                        {pages.map((_, i) => (
                            <span key={i} className={i === current ? 'on' : ''} />
                        ))}
                    </div>
                    <div className="fairytale-controls">
                        <button onClick={goPrev} disabled={current === 0} aria-label="이전 페이지">◀</button>
                        <span className="fairytale-indicator">{current + 1} / {pages.length}</span>
                        <button onClick={goNext} disabled={current === pages.length - 1} aria-label="다음 페이지">▶</button>
                    </div>
                </div>
            ) : (
                <div className="fairytale-gallery">
                    {pages.map((p, i) => (
                        <div className="fairytale-gcard" key={i}>
                            <div className="fairytale-gi">{p.illust}</div>
                            <div className="fairytale-gt">{p.text.replace(/\n/g, ' ')}</div>
                            <div className="fairytale-gn">{i + 1} / {pages.length}</div>
                        </div>
                    ))}
                </div>
            )}
            <div className="fairytale-hint">← → 방향키로도 페이지를 넘길 수 있어요</div>
        </div>
    );
};

export default FairytaleBook;
