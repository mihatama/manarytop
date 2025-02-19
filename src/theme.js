// theme.js
import { extendTheme } from "@chakra-ui/react";

// Chakra UI (Factory/Ark版) でも通常の extendTheme は利用可能です。
// 必要に応じてトークン、コンポーネントスタイルを追加拡張してください。
const theme = extendTheme({
  colors: {
    brand: {
      50: "#fcefeb",
      100: "#f6d9d0",
      200: "#efc2b2",
      300: "#e8ab94",
      400: "#e29576",
      500: "#e27d60", // メインブランドカラー
      600: "#ce6549",
      700: "#a7513a",
      800: "#803d2c",
      900: "#59291d",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.700",
      },
    },
  },
});

export default theme;
