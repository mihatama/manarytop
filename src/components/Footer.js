import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        {/* ここに特定商取引法へのリンクを追加 */}
        <p>
          <a href="#legal-notice" style={styles.link}>
            特定商取引法に基づく表記
          </a>
        </p>
        <p style={{ marginTop: '10px' }}>© 2025 Manary All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '40px',
    padding: '20px 0',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #eee'
  },
  footerInner: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  },
  link: {
    color: '#333',
    textDecoration: 'underline',
    fontSize: '0.9rem',
    fontWeight: 'normal',
  }
};
