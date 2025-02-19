// components/Hero.js
import React from "react";
import { chakra as c, Button, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <c.section
      position="relative"
      width="100%"
      minH="70vh"
      bgImage='url("https://via.placeholder.com/1200x800")'
      bgPos="center"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
      id="hero"
    >
      {/* 半透明のオーバーレイ */}
      <c.div
        bg="rgba(255, 255, 255, 0.8)"
        p={{ base: 6, md: 10 }}
        borderRadius="md"
        textAlign="center"
        maxW="600px"
      >
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          mb={4}
          lineHeight="1.4"
          color="gray.700"
        >
          助産院向けSaaSアプリ <br />
          <c.span color="brand.500">「Manary」</c.span>
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6} color="gray.600">
          予約・問診票・電子カルテを一元化し、 <br />
          忙しい助産師業務を効率化。 <br />
          母子ケアの質をさらに高めましょう。
        </Text>
        <Button
          as="a"
          href="#contact"
          bg="brand.500"
          color="white"
          size="lg"
          _hover={{ bg: "brand.600" }}
        >
          無料トライアルはこちら
        </Button>
      </c.div>
    </c.section>
  );
}
