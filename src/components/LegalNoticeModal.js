// components/LegalNoticeModal.js
import React from "react";
import { chakra as c, Heading, Text, Box, Button } from "@chakra-ui/react";

export default function LegalNoticeModal({ isOpen, onClose }) {
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
          特定商取引法に基づく表記
        </Heading>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            事業者名
          </Heading>
          <Text>みはたま株式会社</Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            運営事業責任者
          </Heading>
          <Text>梅本 正人</Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            所在地
          </Heading>
          <Text>〒444-3261 愛知県豊田市東大林町岩本29-3</Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            お問い合わせ先
          </Heading>
          <Text>
            電話：050-5806-6093（平日 9:00～17:00）
            <br />
            メール：info@mihatama.com
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            販売価格
          </Heading>
          <Text>
            各プランページに記載（ベーシックプラン：9,800円/月 他）
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            商品代金以外の必要料金
          </Heading>
          <Text>
            インターネット接続料金、通信料金等はお客様のご負担となります。
            <br />
            消費税は価格に含まれています。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            お支払い方法
          </Heading>
          <Text>クレジットカード決済</Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            お支払い期限
          </Heading>
          <Text>
            クレジットカード決済：初回申し込み時、次回以降は毎月1日に決済されます。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            役務または商品の引渡時期
          </Heading>
          <Text>ご契約手続き完了後、すぐにサービスをご利用いただけます。</Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            キャンセル・解約について
          </Heading>
          <Text>
            月ごとのサブスクリプション契約となります。解約をご希望の場合は、次回更新日の1週間前までにご連絡ください。
            次回更新日1週間前までにご連絡いただくことで次回以降の決済は発生いたしません。
            <br />
            なお、日割り返金などは行いません。
          </Text>
        </Box>

        <Box>
          <Heading fontSize="md" mb={2}>
            返品・返金について
          </Heading>
          <Text>
            デジタルサービスの性質上、原則的に返品・返金は受け付けておりません。
          </Text>
        </Box>
      </c.div>
    </c.div>
  );
}
