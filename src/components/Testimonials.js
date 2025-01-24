import React from 'react';

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "A助産院様",
      comment:
        "予約管理がオンライン化されたことで、電話対応や重複予約が減り、産後ケアのカウンセリングに集中できています。"
    },
    {
      name: "B助産院様",
      comment:
        "問診票を事前に送れるので、当日はカルテがすでに準備済み。母子の状態を正確に把握できるため、ケアの質が上がりました！"
    }
  ];

  return (
    <section className="container">
      <h2 style={styles.heading}>導入事例・お客様の声</h2>
      <div style={styles.testContainer}>
        {testimonialsData.map((testi, index) => (
          <div key={index} style={styles.testCard}>
            <p style={styles.comment}>
              “{testi.comment}”
            </p>
            <p style={styles.name}>― {testi.name}</p>
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
  testContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  testCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '6px'
  },
  comment: {
    fontSize: '1rem',
    marginBottom: '10px'
  },
  name: {
    textAlign: 'right',
    color: '#777',
    fontStyle: 'italic'
  }
};
