// components/Faq.js
import React from "react";
import { chakra as c, Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Faq() {
  const faqs = [
    {
      question: "操作が難しくないか不安です。",
      answer:
        "操作画面は直感的に設計されており、パソコンやスマホが得意でない方でも簡単にご利用いただけます。導入時のサポートも手厚く行っています。"
    },
    {
      question: "データのセキュリティはどうなっていますか？",
      answer:
        "クラウド上で高度な暗号化を行い、万全のセキュリティ対策を実施しています。安心してご利用いただけます。"
    },
    {
      question: "無料トライアルはありますか？",
      answer:
        "はい、1週間の無料トライアルをご用意しています。まずは使い勝手をお試しください。"
    },
  ];

  return (
    <c.section id="faq" py={{ base: 10, md: 16 }}>
      <c.div maxW="800px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          よくある質問（FAQ）
        </Heading>
        <VStack spacing={5} align="stretch">
          {faqs.map((item, index) => (
            <Box
              key={index}
              p={6}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            >
              <Heading fontSize="lg" mb={2} color="gray.800">
                {item.question}
              </Heading>
              <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                {item.answer}
              </Text>
            </Box>
          ))}
        </VStack>
      </c.div>
    </c.section>
  );
}
