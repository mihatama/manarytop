// components/TermsOfUseModal.js
import React from "react";
import {
  chakra as c,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

export default function TermsOfUseModal({ isOpen, onClose }) {
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
        /* ここを追加 */
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
          利用規約
        </Heading>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第1条（適用）
          </Heading>
          <Text fontSize="sm">
            本利用規約（以下「本規約」といいます）は、みはたま株式会社（以下「当社」といいます）が運営する
            SaaSサービス「Manary」（https://manary.care/、以下「本サービス」といいます）の
            利用条件を定めるものです。ユーザーは、本サービスを利用することにより、
            本規約に同意したものとみなされます。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第2条（定義）
          </Heading>
          <Text fontSize="sm">
            本規約における用語の定義は、以下のとおりとします。
          </Text>
          <Box as="ul" pl={6} mt={2} fontSize="sm" style={{ listStyle: "disc" }}>
            <li>
              「ユーザー」とは、本サービスの利用登録を行い、本規約に同意した個人または法人をいいます。
            </li>
            <li>
              「会員」とは、当社所定の登録手続を経て、本サービスを利用する権利を有するユーザーをいいます。
            </li>
            <li>
              「コンテンツ」とは、本サービス上で提供される各種情報、ソフトウェア、データ等をいいます。
            </li>
          </Box>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第3条（会員登録および利用申込み）
          </Heading>
          <Text fontSize="sm">
            本サービスの利用は、当社所定の利用申込み手続により、当社の承認を得たユーザーに限定されます。
            申込みに際して提供いただく情報は、正確かつ最新のものでなければならず、
            虚偽の情報を登録した場合、当社は利用停止または契約解除する場合があります。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第4条（サービス内容および変更・中断・終了）
          </Heading>
          <Text fontSize="sm">
            本サービスは、予約管理、オンライン問診票、電子カルテ管理、分析レポート作成等の機能を提供します。
            当社は、本サービスの内容の全部または一部を、ユーザーへの事前通知なく変更、中断または終了することがあります。
            これによりユーザーに生じた損害について、当社は一切の責任を負いません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第5条（利用料金、支払い方法および支払い期限）
          </Heading>
          <Text fontSize="sm">
            本サービスは、以下のサブスクリプション型料金プラン（例：ベーシックプラン、プロプラン、プレミアムプラン）により提供されます。
            各プランの料金は、各プランの詳細ページに記載されているとおりです。
            利用料金は、クレジットカード決済により、初回登録時に即時決済され、以降は毎月1日に自動更新の形で決済されます。
            インターネット接続料金、通信料金、その他本サービスの利用に伴う費用は、ユーザーの負担となります。
            解約を希望される場合、次回更新日の1週間前までに当社所定の方法により申出る必要があります。
            なお、日割り返金等は行いません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第6条（禁止事項）
          </Heading>
          <Text fontSize="sm">
            ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
          </Text>
          <Box as="ul" pl={6} mt={2} fontSize="sm" style={{ listStyle: "disc" }}>
            <li>法令または公序良俗に反する行為</li>
            <li>当社、他のユーザー、または第三者の権利を侵害する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>虚偽または不正確な情報を登録する行為</li>
            <li>その他当社が不適切と判断する行為</li>
          </Box>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第7条（知的財産権）
          </Heading>
          <Text fontSize="sm">
            本サービスに関する著作権、商標権、特許権その他一切の知的財産権は、
            当社または正当な権利を有する第三者に帰属します。
            ユーザーは、本サービスを通じて提供される情報等を、当社の事前の承諾なく
            複製、転用、販売、出版等してはなりません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第8条（免責事項）
          </Heading>
          <Text fontSize="sm">
            当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、有効性、特定目的適合性、
            セキュリティ等に関する欠陥を含む）やエラーがないことを明示的にも黙示的にも保証しておりません。
            本サービスの利用により生じた損害（直接的、間接的、特別、偶発的または結果的損害を含む）について、
            当社は一切の責任を負いません。ただし、当社に故意または重過失が認められる場合はこの限りではありません。
            ユーザー間、またはユーザーと第三者との間で生じたトラブルについて、当社は一切関与せず、責任を負いません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第9条（契約期間および契約解除）
          </Heading>
          <Text fontSize="sm">
            本サービスは、会員登録完了の日からサブスクリプション契約期間が開始し、月単位で更新されるものとします。
            ユーザーが本規約に違反した場合、または当社が必要と判断した場合、当社は事前通知なく会員資格の停止または契約解除を行うことができます。
            ユーザーからの解約の申出があった場合、次回更新日の1週間前までに手続きが完了すれば、
            次回以降の決済は行われません。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第10条（本規約の変更）
          </Heading>
          <Text fontSize="sm">
            当社は、必要と判断した場合、ユーザーへの事前通知または本ウェブサイト上での告知により、
            本規約を変更することができます。変更後にユーザーが本サービスを利用した場合、
            変更後の規約に同意したものとみなされます。
          </Text>
        </Box>

        <Box mb={4}>
          <Heading fontSize="md" mb={2}>
            第11条（準拠法および管轄裁判所）
          </Heading>
          <Text fontSize="sm">
            本規約の解釈および適用については、日本法を準拠法とします。
            本サービスに関連して紛争が生じた場合、当社所在地を管轄する裁判所を
            第一審の専属管轄裁判所とします。
          </Text>
        </Box>

        <Box>
          <Heading fontSize="md" mb={2}>
            第12条（その他）
          </Heading>
          <Text fontSize="sm">
            本規約のいずれかの条項が無効または執行不能と判断された場合でも、
            その他の条項は引き続き有効とします。
            本規約に定める事項と、当社が別途定める個別利用条件等との間に矛盾が生じた場合は、
            個別利用条件等が優先して適用されるものとします。
          </Text>
        </Box>
      </c.div>
    </c.div>
  );
}
