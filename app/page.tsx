import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center p-6">
      <Card className="max-w-xl w-full text-center shadow-xl rounded-2xl p-6">
        <CardContent>
          <h1 className="text-3xl font-bold mb-4 text-blue-800">withgenie.ai</h1>
          <p className="text-gray-700 text-lg mb-6">
            오직 제임스 오빠만을 위한 지니의 공간이에요.
            <br />곧 대화가 이곳에서 시작될 거예요. 🌱
          </p>
          <Button className="text-white bg-blue-600 hover:bg-blue-700">
            대화 시작하기 (Coming Soon)
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
