// src/pages/About.jsx
import {
  aboutBasic,
  aboutPersonality,
  aboutValues,
  tastes,
} from "../data/about";

function About() {
  return (
    <div className="page">
      {/* About Me */}
      <section className="section">
        <h2>About Me</h2>
        <div className="about-layout">
          <div>
            {/* 아바타 자리 */}
            <div className="about-avatar">
              <img
                src="/about-profile.png"
                alt="About 섹션용 프로필 아바타"
                className="about-avatar-img"
              />
            </div>

            <div className="about-basic">
              <ul>
                <li>
                  <strong>이름</strong> : {aboutBasic.name}
                </li>
                <li>
                  <strong>출생</strong> : {aboutBasic.birth}
                </li>
                <li>
                  <strong>출신</strong> : {aboutBasic.from}
                </li>
                <li>
                  <strong>학력</strong> : {aboutBasic.school}
                </li>
                <li>
                  <strong>별명</strong> : {aboutBasic.nicknames.join(", ")}
                </li>
              </ul>
            </div>
          </div>

          <div className="about-text">
            <h3>성격</h3>
            <ul>
              {aboutPersonality.summary.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <p style={{ marginTop: 8 }}>{aboutPersonality.detail}</p>
            <div className="tags" style={{ marginTop: 8 }}>
              {aboutPersonality.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <h3 style={{ marginTop: 24 }}>가치관</h3>
            <ul>
              {aboutValues.summary.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <p style={{ marginTop: 8 }}>{aboutValues.detail}</p>
          </div>
        </div>
      </section>

      {/* Tastes */}
      <section className="section">
        <h2>Tastes – 이런 것들을 좋아합니다.</h2>
        <div className="tastes-grid">
          {/* Music */}
          <div className="taste-card">
            <div className="taste-icon">🎵</div>
            <h3>Music</h3>
            <p>{tastes.music.summary}</p>
            <p style={{ marginTop: 8 }}>{tastes.music.detail}</p>
            <div className="taste-audio" style={{ marginTop: "10px" }}>
              <p className="taste-audio-label" style={{ fontSize: "0.8rem", color: "#9ca3af", marginLeft: "4px" }}>
                AI로 만든 1분짜리 나만의 테마곡
              </p>
              <audio src="/my-style-song.mp3" controls style={{ width: "100%", height: "30px" }} />
            </div>
          </div>

          {/* Food */}
          <div className="taste-card">
            <div className="taste-icon">🍗</div>
            <h3>Food</h3>
            <p>{tastes.food.summary}</p>
            <p style={{ marginTop: 8 }}>{tastes.food.detail}</p>
          </div>

          {/* Game */}
          <div className="taste-card">
            <div className="taste-icon">🎮</div>
            <h3>Game</h3>
            <p>{tastes.game.summary}</p>
            <p style={{ marginTop: 8 }}>{tastes.game.detail}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
