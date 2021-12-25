import React from "react";
import { BgimgProvider } from "./context/bgimgcontext";
import Navigator from "./routes/mainstack";

export default function App() {
  return (
    <BgimgProvider>
      <Navigator />
    </BgimgProvider>
  );
}
