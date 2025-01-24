import React from 'react';

export default function LegalNotice() {
  return (
    <section id="legal-notice" className="container" style={styles.section}>
      <h2 style={styles.heading}>特定商取引法に基づく表記</h2>

      <div style={styles.block}>
        <h3>事業者名</h3>
        <p>みはたま株式会社</p>
      </div>

      <div style={styles.block}>
        <h3>運営事業責任者</h3>
        <p>取締役　梅本 正人</p>
      </div>

      <div style={styles.block}>
        <h3>所在地</h3>
        <p>〒444-3261 愛知県豊田市東大林町岩本29-3</p>
      </div>

      <div style={styles.block}>
        <h3>お問い合わせ先</h3>
        <p>
          電話：050-5806-6093（平日 9:00～17:00）<br />
          メール：info@mihatama.com
        </p>
      </div>

      <div style={styles.block}>
        <h3>販売価格</h3>
        <p>各プランページに記載（ベーシックプラン：9,800円/月 他）</p>
      </div>

      <div style={styles.block}>
        <h3>商品代金以外の必要料金</h3>
        <p>
          インターネット接続料金、通信料金等はお客様のご負担となります。<br />
          消費税は価格に含まれています。
        </p>
      </div>

      <div style={styles.block}>
        <h3>お支払い方法</h3>
        <p>クレジットカード決済</p>
      </div>

      <div style={styles.block}>
        <h3>お支払い期限</h3>
        <p>クレジットカード決済：1回/月（毎月1日）</p>
      </div>

      <div style={styles.block}>
        <h3>役務または商品の引渡時期</h3>
        <p>ご契約手続き完了後、すぐにサービスをご利用いただけます。</p>
      </div>

      <div style={styles.block}>
        <h3>キャンセル・解約について</h3>
        <p>
          月ごとのサブスクリプション契約となります。解約をご希望の場合は、次回更新日の1週間前までにご連絡ください。
        </p>
      </div>

      <div style={styles.block}>
        <h3>返品・返金について</h3>
        <p>デジタルサービスの性質上、原則的に返品・返金は受け付けておりません。</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginTop: '40px',
    marginBottom: '40px'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    textAlign: 'center'
  },
  block: {
    marginBottom: '20px'
  }
};
