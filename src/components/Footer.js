import React, { useState } from "react";
import LegalNoticeModal from "./LegalNoticeModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfUseModal from "./TermsOfUseModal";

export default function Footer() {
  const [isLegalNoticeModalOpen, setLegalNoticeModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [isTermsOfUseModalOpen, setTermsOfUseModalOpen] = useState(false);

  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <p>
          <button onClick={() => setLegalNoticeModalOpen(true)} style={styles.link}>
            特定商取引法に基づく表記
          </button>
          {" | "}
          <button onClick={() => setPrivacyPolicyModalOpen(true)} style={styles.link}>
            プライバシーポリシー
          </button>
          {" | "}
          <button onClick={() => setTermsOfUseModalOpen(true)} style={styles.link}>
            利用規約
          </button>
        </p>
        <p style={{ marginTop: "10px" }}>© 2025 Manary All rights reserved.</p>
      </div>

      {/* 各モーダルの表示 */}
      <LegalNoticeModal isOpen={isLegalNoticeModalOpen} onClose={() => setLegalNoticeModalOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyPolicyModalOpen} onClose={() => setPrivacyPolicyModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsOfUseModalOpen} onClose={() => setTermsOfUseModalOpen(false)} />
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px 0",
    backgroundColor: "#fafafa",
    borderTop: "1px solid #eee",
  },
  footerInner: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  link: {
    color: "#333",
    textDecoration: "underline",
    fontSize: "0.9rem",
    fontWeight: "normal",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};
