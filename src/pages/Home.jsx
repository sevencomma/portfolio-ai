// src/pages/Home.jsx
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { heroData, homeSectionCards } from "../data/home";

function Home() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleTogglePlay = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (playing) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    const handleEnded = () => setPlaying(false);
    audioEl.addEventListener("ended", handleEnded);
    return () => audioEl.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="page">
      {/* Hero */}
      <section className="section hero">
        <div className="hero-left">
          <p className="hero-subtitle">영남대학교 컴퓨터공학과</p>
          <h1 className="hero-title">이현철입니다.</h1>
          <p className="hero-text">{heroData.introSummary}</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={handleTogglePlay}>
              {playing ? "자기소개 멈추기" : "자기소개 듣기"}
            </button>
          </div>

          {/* 실제 오디오 태그 */}
          <audio ref={audioRef} src="/intro-tts.mp3" />
        </div>

        {/* 오른쪽: 배경 비디오 + 프로필 이미지 */}
        <div className="hero-right">
          <div className="hero-media">
            <video
              className="hero-video"
              src="/hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <img
              src="/hero-profile.png"
              alt="AI 프로필 일러스트"
              className="hero-avatar"
            />
          </div>
        </div>
      </section>

      {/* 아래 요약 섹션 카드 */}
      <section id="home-sections" className="section">
        <div className="home-sections">
          {homeSectionCards.map((card) => (
            <div key={card.id} className="section-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link to={card.link} className="btn small ghost">
                자세히 보기
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
