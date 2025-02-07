import React from 'react';

export default function LegalNoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>特定商取引法に基づく表記</h2>

        <div className="modal-section">
          <h3>事業者名</h3>
          <p>みはたま株式会社</p>
        </div>

        <div className="modal-section">
          <h3>運営事業責任者</h3>
          <p>梅本 正人</p>
        </div>

        <div className="modal-section">
          <h3>所在地</h3>
          <p>〒444-3261 愛知県豊田市東大林町岩本29-3</p>
        </div>

        <div className="modal-section">
          <h3>お問い合わせ先</h3>
          <p>電話：050-5806-6093（平日 9:00～17:00）<br />メール：info@mihatama.com</p>
        </div>

        <div className="modal-section">
          <h3>販売価格</h3>
          <p>各プランページに記載（ベーシックプラン：9,800円/月 他）</p>
        </div>

        <div className="modal-section">
          <h3>商品代金以外の必要料金</h3>
          <p>インターネット接続料金、通信料金等はお客様のご負担となります。<br />消費税は価格に含まれています。</p>
        </div>

        <div className="modal-section">
          <h3>お支払い方法</h3>
          <p>クレジットカード決済</p>
        </div>

        <div className="modal-section">
          <h3>お支払い期限</h3>
          <p>クレジットカード決済：初回申し込み時、次回以降は毎月1日に決済されます。</p>
        </div>

        <div className="modal-section">
          <h3>役務または商品の引渡時期</h3>
          <p>ご契約手続き完了後、すぐにサービスをご利用いただけます。</p>
        </div>

        <div className="modal-section">
          <h3>キャンセル・解約について</h3>
          <p>
            月ごとのサブスクリプション契約となります。解約をご希望の場合は、次回更新日の1週間前までにご連絡ください。
            次回更新日1週間前までにご連絡いただくことで次回以降の決済は発生いたしません。<br />
            なお、日割り返金などは行いません。
          </p>
        </div>

        <div className="modal-section">
          <h3>返品・返金について</h3>
          <p>デジタルサービスの性質上、原則的に返品・返金は受け付けておりません。</p>
        </div>
      </div>
    </div>
  );
}
