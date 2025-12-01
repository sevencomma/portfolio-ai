// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} 이현철. All rights reserved.</p>
      <p className="footer-note">
        This site is built with React and various AI tools (ChatGPT, AI image & TTS).
      </p>
    </footer>
  );
}

export default Footer;
