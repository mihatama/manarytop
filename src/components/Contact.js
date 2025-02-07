import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 実際には、API GatewayやAWS Lambda等と連携して送信処理を行う
    alert('お問い合わせありがとうございます。追ってご連絡いたします。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="container" id="contact">
      <h2 style={styles.heading}>お問い合わせ</h2>
      <p style={styles.info}>
        ご質問やご相談など、お気軽にお問い合わせください。<br />
        
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          お名前:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          メールアドレス:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          お問い合わせ内容:
          <textarea
            style={styles.textarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>
        <button style={styles.button} type="submit">
          送信
        </button>
      </form>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    textAlign: 'center'
  },
  info: {
    marginBottom: '20px',
    textAlign: 'center'
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold'
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '5px'
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '5px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#E27D60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};
