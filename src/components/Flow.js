// components/Flow.js
import React from "react";
import { chakra as c, Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";

export default function Flow() {
  const steps = [
    {
      step: "1",
      title: "お問い合わせ",
      description:
        "まずはお問い合わせフォーム、またはお電話にてお気軽にご連絡ください。",
    },
    {
      step: "2",
      title: "無料デモ体験",
      description:
        "実際の画面を見ながら、予約システムや問診票などの操作性を体験いただけます。",
    },
    {
      step: "3",
      title: "プランご選択・お申し込み",
      description:
        "助産院の規模やニーズに合わせて最適なプランをお選びください。",
    },
    {
      step: "4",
      title: "導入サポート",
      description:
        "初期設定やスタッフ向けレクチャーなど、スムーズな導入をサポートいたします。",
    },
  ];

  return (
    <c.section id="flow" py={{ base: 10, md: 16 }}>
      <c.div maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          導入までの流れ
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {steps.map((item, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={6}
              textAlign="center"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              transition="box-shadow 0.2s"
            >
              <Text fontSize="3xl" fontWeight="bold" color="brand.500" mb={3}>
                {item.step}
              </Text>
              <Heading fontSize="lg" mb={2} color="gray.700">
                {item.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {item.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </c.div>
    </c.section>
  );
}
