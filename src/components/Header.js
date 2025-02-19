// components/Header.js
import React from "react";
import { chakra as c, HStack, Link as ChakraLink } from "@chakra-ui/react";

export default function Header() {
  return (
    <c.header
      bg="white"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      py={4}
      px={{ base: 4, md: 8 }}
    >
      <c.div
        maxW="1200px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* ロゴ */}
        <c.div fontSize="xl" fontWeight="bold" color="brand.500">
          Manary
        </c.div>

        {/* ナビゲーション */}
        <HStack as="nav" spacing={6}>
          <ChakraLink href="#features" _hover={{ color: "brand.500" }}>
            特徴
          </ChakraLink>
          <ChakraLink href="#plans" _hover={{ color: "brand.500" }}>
            料金プラン
          </ChakraLink>
          <ChakraLink href="#faq" _hover={{ color: "brand.500" }}>
            よくある質問
          </ChakraLink>
          <ChakraLink href="#contact" _hover={{ color: "brand.500" }}>
            お問い合わせ
          </ChakraLink>
        </HStack>
      </c.div>
    </c.header>
  );
}
