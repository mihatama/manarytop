import React from 'react';

export default function Faq() {
  const faqs = [
    {
      question: "操作が難しくないか不安です。",
      answer:
        "操作画面は直感的に設計されており、パソコンやスマホが得意でない方でも簡単にご利用いただけます。導入時のサポートも手厚く行っています。"
    },
    {
      question: "データのセキュリティはどうなっていますか？",
      answer:
        "クラウド上で高度な暗号化を行い、万全のセキュリティ対策を実施しています。安心してご利用いただけます。"
    },
    {
      question: "無料トライアルはありますか？",
      answer:
        "はい、1週間の無料トライアルをご用意しています。まずは使い勝手をお試しください。"
    }
  ];

  return (
    <section className="container" id="faq">
      <h2 style={styles.heading}>よくある質問（FAQ）</h2>
      <div style={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <h3 style={styles.question}>{item.question}</h3>
            <p style={styles.answer}>{item.answer}</p>
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
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  faqItem: {
    border: '1px solid #eee',
    padding: '20px',
    borderRadius: '6px'
  },
  question: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  answer: {
    lineHeight: '1.6'
  }
};
