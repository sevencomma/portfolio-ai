// src/pages/Ps.jsx
import { useState } from "react";
import {
  psSummary,
  psStats,
  psTimeline,
  psAwards,
  psOutro,
} from "../data/ps";

function Ps() {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="page">
      <section className="section">
        <h2>Problem Solving – 백준, 종만북, 그리고 대회 경험</h2>
        <p>{psSummary}</p>
      </section>

      {/* 통계 카드 */}
      <section className="section">
        <h3>요약 통계</h3>
        <div className="ps-stats">
          {psStats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-label">{s.label}</span>
              <span className="stat-value">{s.value}</span>
              <p style={{ fontSize: "0.8rem", marginTop: 4 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 타임라인 */}
      <section className="section">
        <h3>PS 타임라인</h3>
        <div className="timeline">
          {psTimeline.map((item) => {
            const opened = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className={`timeline-item ${opened ? "open" : ""}`}
                onClick={() => toggleItem(item.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="timeline-header-row">
                    <strong>{item.title}</strong>
                    <span className="timeline-toggle-icon">
                      {opened ? "▲" : "▼"}
                    </span>
                  </div>
                  <p style={{ marginTop: 4 }}>{item.summary}</p>
                  {opened && (
                    <p style={{ marginTop: 6 }}>{item.detail}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <h3>Awards</h3>
        <div className="ps-award-banner">🏆</div>
        <ul className="award-list">
          {psAwards.map((a, idx) => (
            <li key={idx}>
              <strong>{a.when}</strong> – {a.name}
            </li>
          ))}
        </ul>
        <p className="ps-outro">{psOutro}</p>
      </section>
    </div>
  );
}

export default Ps;
