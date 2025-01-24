import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Manary</div>
      <nav style={styles.nav}>
        <a href="#features">特徴</a>
        <a href="#plans">料金プラン</a>
        <a href="#faq">よくある質問</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 5%',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #eee',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px'
  }
};
