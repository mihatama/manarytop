// components/PrivacyPolicyModal.js
import React from "react";
import {
  chakra as c,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <c.div
      className="modal-overlay"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="rgba(0,0,0,0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      zIndex={9999}
      onClick={onClose}
    >
      <c.div
        className="modal-content"
        bg="white"
        p={6}
        borderRadius="md"
        maxW="600px"
        w="100%"
        onClick={(e) => e.stopPropagation()}
        position="relative"
        maxHeight="80vh"
        overflowY="auto"
      >
        <Button
          className="modal-close"
          position="absolute"
          top={2}
          right={2}
          variant="ghost"
          onClick={onClose}
        >
          ×
        </Button>

        <Heading mb={4} fontSize="xl">
          プライバシーポリシー
        </Heading>

        {/* 以下、プライバシーポリシー全文 */}
        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            1. 基本方針
          </Heading>
          <Text fontSize="sm">
            みはたま株式会社（以下「当社」といいます）は、医療機関様向けSaaSサービス「Manary」
            （以下「本サービス」といいます）の提供に際し、利用者（以下「ユーザー」といいます）の個人情報の保護を重要な責務と認識し、
            個人情報の適正な取扱いおよび安全管理に努めます。本プライバシーポリシーは、
            本サービスにおけるユーザーの個人情報の収集、利用、管理および第三者提供に関する基本方針を定めるものです。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            2. 個人情報の定義
          </Heading>
          <Text fontSize="sm">
            本ポリシーにおける「個人情報」とは、氏名、住所、電話番号、メールアドレス、
            生年月日、医療情報、予約情報、問診票に記載される情報その他、
            特定の個人を識別できる情報（他の情報と照合することで個人が特定できる情報を含む）をいいます。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            3. 個人情報の収集および利用目的
          </Heading>
          <Text fontSize="sm">
            当社は、以下の目的のためにユーザーの個人情報を収集・利用いたします。
          </Text>
          <Box as="ul" pl={6} mt={2} fontSize="sm" style={{ listStyle: "disc" }}>
            <li>
              サービス提供のため：
              本サービスの会員登録、認証、予約管理、問診票入力、電子カルテ管理、
              分析レポートの作成、各種通知（メール、SMS等）の送信
            </li>
            <li>
              カスタマーサポートおよび問い合わせ対応のため：
              ユーザーからのお問い合わせ対応、サポートの提供、サービス改善のためのアンケート調査
            </li>
            <li>
              決済業務のため：
              サブスクリプション料金の決済、請求書の発行、決済に関する連絡
            </li>
            <li>
              法令に基づく対応のため：
              税務、会計、法令・規制への対応のための情報保存および開示対応
            </li>
          </Box>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            4. 個人情報の収集方法
          </Heading>
          <Text fontSize="sm">
            当社は、ユーザーが本サービスに登録する際、またはサービス利用中に各種フォーム
            （予約フォーム、問診票、問い合わせフォーム等）を通じて、必要な個人情報を直接ご提供いただく方法で収集いたします。
            また、クッキー（Cookie）等の技術を用いて利用状況（アクセスログ、利用履歴等）を収集する場合がありますが、
            これらの情報は個人が特定できない形で管理いたします。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            5. 個人情報の第三者提供について
          </Heading>
          <Text fontSize="sm">
            当社は、次の場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
          </Text>
          <Box as="ul" pl={6} mt={2} fontSize="sm" style={{ listStyle: "disc" }}>
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づく場合、または公的機関からの正式な要請があった場合</li>
            <li>
              サービスの運営・改善、決済業務等に必要な場合で、かつ提供先において厳重な管理がなされることを条件とする場合
              （この場合、提供先との間で機密保持契約等を締結します）
            </li>
          </Box>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            6. 個人情報の安全管理措置
          </Heading>
          <Text fontSize="sm">
            当社は、個人情報の漏洩、滅失、毀損等を防止するため、合理的かつ適切な安全管理措置（技術的・組織的対策）を講じます。
            また、社員等に対して個人情報保護の重要性を周知し、定期的な教育・研修を実施しております。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            7. 個人情報の保存期間および利用停止・削除
          </Heading>
          <Text fontSize="sm">
            当社は、利用目的に必要な期間、または法令に定める保存期間内に限り個人情報を保有します。目的が達成された場合、
            またはユーザーからの削除・利用停止の要請があった場合は、速やかに対応いたします。
            ただし、法令により保存義務がある場合はその限りではありません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            8. ユーザーの権利
          </Heading>
          <Text fontSize="sm">
            ユーザーは、当社が保有する自己の個人情報について、開示、訂正、利用停止、削除等を求める権利があります。
            これらのご請求は、当社所定の方法によりお申し出ください。合理的な期間内に対応させていただきます。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            9. クッキー（Cookie）の利用について
          </Heading>
          <Text fontSize="sm">
            当社は、サービス向上および利用状況の分析のためにクッキーを使用することがあります。
            クッキーはユーザーのブラウザに一時的に保存される情報であり、個人を特定するものではありません。
            ユーザーは、ブラウザの設定によりクッキーの受け入れを拒否することができますが、
            その場合、本サービスの一部機能が正常に動作しない可能性があります。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            10. プライバシーポリシーの変更
          </Heading>
          <Text fontSize="sm">
            本プライバシーポリシーは、法令改正やサービス内容の変更に伴い、随時改定することがあります。
            改定内容は本ウェブサイト上に掲載し、掲載後にユーザーが本サービスを利用した場合は、
            改定後のポリシーに同意したものとみなされます。
          </Text>
        </Box>

        <Box>
          <Heading fontSize="md" mb={2}>
            11. お問い合わせ先
          </Heading>
          <Text fontSize="sm">
            会社名：みはたま株式会社
            <br />
            所在地：〒444-3261 愛知県豊田市東大林町岩本29-3
            <br />
            電話番号：050-5806-6093（平日 9:00～17:00）
            <br />
            メールアドレス：info@mihatama.com
          </Text>
        </Box>
      </c.div>
    </c.div>
  );
}
