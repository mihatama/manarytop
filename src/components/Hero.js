import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          助産院向けSaaSアプリ<br />
          <span style={styles.accent}>「Manary」</span>
        </h1>
        <p style={styles.subtitle}>
          予約・問診票・電子カルテを一元化し、<br />
          忙しい助産師業務を効率化。<br />
          母子ケアの質をさらに高めましょう。
        </p>
        <a href="#contact" style={styles.button}>無料トライアルはこちら</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    width: '100%',
    height: '70vh',
    background: 'url("https://via.placeholder.com/1200x800") center/cover no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    lineHeight: '1.4'
  },
  accent: {
    color: '#E27D60'
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px'
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#E27D60',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};
