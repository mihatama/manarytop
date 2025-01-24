import React from 'react';

export default function Flow() {
  const steps = [
    {
      step: "1",
      title: "お問い合わせ",
      description: "まずはお問い合わせフォーム、またはお電話にてお気軽にご連絡ください。"
    },
    {
      step: "2",
      title: "無料デモ体験",
      description: "実際の画面を見ながら、予約システムや問診票などの操作性を体験いただけます。"
    },
    {
      step: "3",
      title: "プランご選択・お申し込み",
      description: "助産院の規模やニーズに合わせて最適なプランをお選びください。"
    },
    {
      step: "4",
      title: "導入サポート",
      description: "初期設定やスタッフ向けレクチャーなど、スムーズな導入をサポートいたします。"
    }
  ];

  return (
    <section className="container" id="flow" style={styles.section}>
      <h2 style={styles.heading}>導入までの流れ</h2>
      <div style={styles.flowContainer}>
        {steps.map((item, index) => (
          <div key={index} style={styles.stepCard}>
            <div style={styles.stepNumber}>{item.step}</div>
            <h3 style={styles.stepTitle}>{item.title}</h3>
            <p style={styles.stepDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 0'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    textAlign: 'center'
  },
  flowContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px'
  },
  stepCard: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '6px',
    padding: '20px',
    textAlign: 'center'
  },
  stepNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#E27D60',
    marginBottom: '10px'
  },
  stepTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px'
  },
  stepDesc: {
    fontSize: '1rem',
    lineHeight: '1.6'
  }
};
