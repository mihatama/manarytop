// components/Plans.js
import React from "react";
import {
  chakra as c,
  Box,
  Heading,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Plans() {
  const plansData = [
    {
      name: "ベーシックプラン",
      price: 9800,
      features: [
        "予約システム（基本機能）",
        "オンライン問診票（基本フォーム）",
        "電子カルテ（基本機能）",
      ],
      recommend: "個人・小規模向け",
    },
    {
      name: "プロプラン",
      price: 28000,
      features: [
        "予約システム（高度なカスタマイズ機能）",
        "オンライン問診票（複数フォーム対応）",
        "電子カルテ（分析レポート機能）",
        "カスタマーサポート優先対応",
      ],
      recommend: "中規模助産院向け",
    },
    {
      name: "プレミアムプラン",
      price: 40000,
      features: [
        "予約システム（スマホアプリ連携・自動リマインド）",
        "オンライン問診票（自由度の高いカスタマイズ）",
        "電子カルテ（高度な統計分析・外部連携）",
        "専任担当によるコンサルティングサービス",
      ],
      recommend: "複数拠点・高度分析向け",
    },
  ];

  return (
    <c.section id="plans" py={{ base: 10, md: 16 }}>
      <c.div maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          料金プラン
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {plansData.map((plan, index) => (
            <Box
              key={index}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={6}
              textAlign="center"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            >
              <Heading fontSize="xl" mb={3} color="brand.500">
                {plan.name}
              </Heading>
              <Text fontSize="2xl" color="brand.600" mb={3}>
                ¥{plan.price.toLocaleString()}/月
              </Text>
              <UnorderedList
                textAlign="left"
                mb={4}
                spacing={2}
                px={{ base: 4, md: 6 }}
              >
                {plan.features.map((feat, idx) => (
                  <ListItem key={idx} fontSize="sm" color="gray.600">
                    {feat}
                  </ListItem>
                ))}
              </UnorderedList>
              <Text color="gray.500" fontSize="sm">
                {plan.recommend}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </c.div>
    </c.section>
  );
}
