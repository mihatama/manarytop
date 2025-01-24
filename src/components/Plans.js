import React from 'react';

export default function Plans() {
  const plansData = [
    {
      name: "ベーシックプラン",
      price: 9800,
      features: [
        "予約システム（基本機能）",
        "オンライン問診票（基本フォーム）",
        "電子カルテ（基本機能）"
      ],
      recommend: "個人・小規模向け"
    },
    {
      name: "プロプラン",
      price: 28000,
      features: [
        "予約システム（高度なカスタマイズ機能）",
        "オンライン問診票（複数フォーム対応）",
        "電子カルテ（分析レポート機能）",
        "カスタマーサポート優先対応"
      ],
      recommend: "中規模助産院向け"
    },
    {
      name: "プレミアムプラン",
      price: 40000,
      features: [
        "予約システム（スマホアプリ連携・自動リマインド）",
        "オンライン問診票（自由度の高いカスタマイズ）",
        "電子カルテ（高度な統計分析・外部連携）",
        "専任担当によるコンサルティングサービス"
      ],
      recommend: "複数拠点・高度分析向け"
    },
  ];

  return (
    <section className="container" id="plans">
      <h2 style={styles.heading}>料金プラン</h2>
      <div style={styles.planContainer}>
        {plansData.map((plan, index) => (
          <div key={index} style={styles.planCard}>
            <h3 style={styles.planName}>{plan.name}</h3>
            <p style={styles.price}>¥{plan.price.toLocaleString()}/月</p>
            <ul style={styles.featureList}>
              {plan.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
            <p style={styles.recommend}>{plan.recommend}</p>
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
  planContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  planCard: {
    flex: '1 1 300px',
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px'
  },
  planName: {
    fontSize: '1.4rem',
    marginBottom: '10px'
  },
  price: {
    fontSize: '1.2rem',
    color: '#E27D60',
    marginBottom: '10px'
  },
  featureList: {
    listStyle: 'none',
    margin: '20px 0',
    padding: 0,
    textAlign: 'left'
  },
  recommend: {
    marginTop: '20px',
    color: '#555'
  }
};
