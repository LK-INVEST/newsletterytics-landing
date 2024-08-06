/** @format */

"use client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const theme = extendTheme({
  colors: {
    brand: {
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
    },
  },
  fonts: {
    heading: "var(--font-montserrat)",
    body: "var(--font-montserrat)",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
