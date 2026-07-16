import Image from "next/image";
import WelcomeWidget from "@/components/gen-ui/WelcomeWidget";
import AiInsight from "@/components/gen-ui/AiInsight";
import SetLogger from "@/components/gen-ui/SetLogger";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 p-8">
          <WelcomeWidget />
          <AiInsight />
          <SetLogger />
    </div>

  );
}
