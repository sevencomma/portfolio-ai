// src/pages/Journey.jsx
import { useState } from "react";
import {
  journeyIntro,
  journeyTimeline,
  booksLectures,
} from "../data/journey";

function Journey() {
  const [openItems, setOpenItems] = useState(() => {
    // 기본으로 첫 번째만 열어놓고 싶으면 여기 true로
    return {};
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [showBooksDetail, setShowBooksDetail] = useState(false);

  return (
    <div className="page">
      {/* Intro */}
      <section className="section">
        <h2>Dev Journey – 개발을 시작하고 지금까지</h2>
        <p>{journeyIntro.summary}</p>
        {/* intro detail은 그냥 생략하거나, 정말 넣고 싶으면 여기 p 하나 더 추가 */}
      </section>

      {/* Timeline */}
      <section className="section">
        <h3>연도·학기별 타임라인</h3>
        <div className="timeline">
          {journeyTimeline.map((item) => {
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

      {/* Books & Lectures */}
      <section className="section">
        <h3>📚 Books & Lectures</h3>
        <p>{booksLectures.summary}</p>
        {showBooksDetail && (
          <p style={{ marginTop: 6 }}>{booksLectures.detail}</p>
        )}
        <button
          className="btn small ghost"
          onClick={() => setShowBooksDetail((prev) => !prev)}
          style={{ marginTop: 8, marginBottom: 12 }}
        >
          {showBooksDetail ? "간단히 보기" : "자세히 보기"}
        </button>

        <div className="books-grid">
          {booksLectures.items.map((book) => (
            <div key={book.title} className="book-card">
              <h4>{book.title}</h4>
              <p style={{ marginTop: 4 }}>{book.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Journey;
