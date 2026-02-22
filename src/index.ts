import { Mistral } from "@mistralai/mistralai";

const { MISTRAL_API_KEY } = process.env;

// Mistral Client Instance
const mistral = new Mistral({
  apiKey: MISTRAL_API_KEY,
});

/**
 * メイン関数
 */
async function run() {
  // AIの推論呼び出し
  const result = await mistral.chat.complete({
    model: "mistral-large-latest",
    messages: [
      {
        content:
          "Who is the best French painter? Answer in one short sentence.",
        role: "user",
      },
    ],
    responseFormat: {
      type: "text",
    },
  });

  console.log(result.choices[0]?.message.content);
}

run();
