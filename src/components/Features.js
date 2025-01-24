import React from 'react';

export default function Features() {
  const featureList = [
    {
      title: "予約システム",
      description: "オンライン予約とカレンダー自動同期でダブルブッキング防止。"
    },
    {
      title: "問診票",
      description: "事前入力フォームで当日の作業を短縮。カルテへ自動連携。"
    },
    {
      title: "電子カルテ",
      description: "安全なクラウド管理でセキュリティ対策も万全。"
    },
    {
      title: "分析レポート",
      description: "利用者の傾向や来院頻度を可視化し、経営戦略にも活用可能。"
    }
  ];

  return (
    <section className="container" id="features">
      <h2 style={styles.heading}>なぜ「Manary」が選ばれるのか？</h2>
      <div style={styles.features}>
        {featureList.map((item, index) => (
          <div key={index} style={styles.featureCard}>
            <h3 style={styles.featureTitle}>{item.title}</h3>
            <p style={styles.featureDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    textAlign: 'center'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '6px',
    textAlign: 'center'
  },
  featureTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px'
  },
  featureDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.6'
  }
};
