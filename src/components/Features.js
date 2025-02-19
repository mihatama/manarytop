// components/Features.js
import React from "react";
import {
  chakra as c,
  SimpleGrid,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Features() {
  const featureList = [
    {
      title: "予約システム",
      description: "オンライン予約とカレンダー自動同期でダブルブッキング防止。",
    },
    {
      title: "問診票",
      description: "事前入力フォームで当日の作業を短縮。カルテへ自動連携。",
    },
    {
      title: "電子カルテ",
      description: "安全なクラウド管理でセキュリティ対策も万全。",
    },
    {
      title: "分析レポート",
      description: "利用者の傾向や来院頻度を可視化し、経営戦略にも活用可能。",
    },
  ];

  return (
    <c.section id="features" py={{ base: 10, md: 16 }}>
      <c.div maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          なぜ「Manary」が選ばれるのか？
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {featureList.map((item, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              boxShadow="sm"
              borderRadius="md"
              textAlign="center"
              _hover={{ boxShadow: "md" }}
              transition="box-shadow 0.2s"
            >
              <Heading fontSize="xl" mb={2} color="brand.500">
                {item.title}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {item.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </c.div>
    </c.section>
  );
}
