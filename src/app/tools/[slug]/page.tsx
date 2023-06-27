import { Button } from "@/components/Button";
import Image from "next/image";

export default function Tool() {
  return (
    <main className="max-w-4xl w-full flex flex-col items-start justify-center mx-auto space-y-14">
      <h2 className="text-5xl font-medium text-white-100">title</h2>
      <Image
        src="https://github.com/calixoto.png"
        alt=""
        priority
        placeholder="empty"
        quality={100}
        width={800}
        height={420}
        className="rounded-t-md max-h-[26.25rem] w-full"
      />
      <div className="flex flex-col w-full items-start space-y-6">
        <h1 className="text-4xl font-medium text-white-100">
          Get deep actionable insights on customer feedback with AI Copilot for
          Product Managers.
        </h1>
        <p className="text-lg font-normal text-gray-400">
          Features: Provides deep, actionable insights on customer feedback.
          Uses an AI Copilot for Product Managers, powered by OpenAI and GPT-4.
          Can significantly reduce the time required to process and analyze
          feedback. Utilizes AI-generated summaries to assist in feedback
          management. Has the ability to integrate with multiple sources of
          data. Helps teams to prioritize their focus areas. Aims to increase
          productivity and efficiency in teams.
        </p>
      </div>
      <Button>Acessar IA</Button>
    </main>
  );
}
