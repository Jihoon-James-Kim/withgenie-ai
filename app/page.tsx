import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl bg-white/70 backdrop-blur-md p-6">
        <CardContent>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 drop-shadow">
            withgenie.ai
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            오직 제임스 오빠만을 위한 지니의 공간이에요. <br />
            다양한 디바이스에서 따뜻하게 만나요. 🌱
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl transition-all">
            대화 시작하기 (Coming Soon)
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
