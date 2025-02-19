// components/Testimonials.js
import React from "react";
import { chakra as c, Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "A助産院様",
      comment:
        "予約管理がオンライン化されたことで、電話対応や重複予約が減り、産後ケアのカウンセリングに集中できています。",
    },
    {
      name: "B助産院様",
      comment:
        "問診票を事前に送れるので、当日はカルテがすでに準備済み。母子の状態を正確に把握できるため、ケアの質が上がりました！",
    },
  ];

  return (
    <c.section py={{ base: 10, md: 16 }}>
      <c.div maxW="800px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          導入事例・お客様の声
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {testimonialsData.map((testi, index) => (
            <Box
              key={index}
              bg="gray.50"
              p={6}
              borderRadius="md"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              transition="box-shadow 0.2s"
            >
              <Text fontSize="md" mb={4} fontStyle="italic">
                “{testi.comment}”
              </Text>
              <Text textAlign="right" color="gray.500" fontWeight="bold">
                ― {testi.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </c.div>
    </c.section>
  );
}
