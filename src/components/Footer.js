// components/Footer.js
import React, { useState } from "react";
import { chakra as c, Button, Text } from "@chakra-ui/react";
import LegalNoticeModal from "./LegalNoticeModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfUseModal from "./TermsOfUseModal";

export default function Footer() {
  const [isLegalNoticeModalOpen, setLegalNoticeModalOpen] = useState(false);
  const [isPrivacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [isTermsOfUseModalOpen, setTermsOfUseModalOpen] = useState(false);

  return (
    <c.footer bg="gray.50" borderTop="1px solid" borderColor="gray.200" py={6} mt={10}>
      <c.div maxW="1200px" mx="auto" textAlign="center">
        <c.div>
          <Button
            variant="link"
            color="gray.600"
            mr={2}
            onClick={() => setLegalNoticeModalOpen(true)}
          >
            特定商取引法に基づく表記
          </Button>
          |
          <Button
            variant="link"
            color="gray.600"
            mx={2}
            onClick={() => setPrivacyPolicyModalOpen(true)}
          >
            プライバシーポリシー
          </Button>
          |
          <Button
            variant="link"
            color="gray.600"
            ml={2}
            onClick={() => setTermsOfUseModalOpen(true)}
          >
            利用規約
          </Button>
        </c.div>
        <Text mt={3} fontSize="sm" color="gray.500">
          © 2025 Manary All rights reserved.
        </Text>
      </c.div>

      {/* 各モーダルの表示 */}
      <LegalNoticeModal
        isOpen={isLegalNoticeModalOpen}
        onClose={() => setLegalNoticeModalOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyModalOpen}
        onClose={() => setPrivacyPolicyModalOpen(false)}
      />
      <TermsOfUseModal
        isOpen={isTermsOfUseModalOpen}
        onClose={() => setTermsOfUseModalOpen(false)}
      />
    </c.footer>
  );
}
