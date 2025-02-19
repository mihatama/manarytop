// components/Contact.js
import React, { useState } from "react";
import {
  chakra as c,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。追ってご連絡いたします。");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <c.section id="contact" py={{ base: 10, md: 16 }}>
      <c.div maxW="600px" mx="auto" px={{ base: 4, md: 0 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={4}
          textAlign="center"
        >
          お問い合わせ
        </Heading>
        <Text mb={8} textAlign="center" color="gray.600">
          ご質問やご相談など、お気軽にお問い合わせください。
        </Text>

        <c.form onSubmit={handleSubmit}>
          <FormControl mb={5} isRequired>
            <FormLabel fontWeight="bold">お名前</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="例）山田 太郎"
            />
          </FormControl>

          <FormControl mb={5} isRequired>
            <FormLabel fontWeight="bold">メールアドレス</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="例）example@example.com"
            />
          </FormControl>

          <FormControl mb={5} isRequired>
            <FormLabel fontWeight="bold">お問い合わせ内容</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="お問い合わせ内容を具体的にご記入ください"
            />
          </FormControl>

          <Button
            type="submit"
            bg="brand.500"
            color="white"
            _hover={{ bg: "brand.600" }}
            w="100%"
            py={6}
          >
            送信
          </Button>
        </c.form>
      </c.div>
    </c.section>
  );
}
