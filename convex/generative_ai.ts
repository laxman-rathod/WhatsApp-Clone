import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey });

export const chat = action({
  args: {
    messageBody: v.string(),
    conversation: v.id("conversations"),
  },
  handler: async (ctx, args) => {
    try {
      const { text } = await generateText({
        model: google("models/gemini-1.5-flash-latest"),
        prompt: args.messageBody,
      });

      const messageContent = text;
      await ctx.runMutation(api.messages.sendAIMessage, {
        content:
          messageContent ?? "I'm sorry, I don't have a response for that.",
        conversation: args.conversation,
        messageType: "text",
      });
    } catch (error) {
      await ctx.runMutation(api.messages.sendAIMessage, {
        content: "An error occurred while processing your request.",
        conversation: args.conversation,
        messageType: "text",
      });
    }
  },
});

export const dall_e = action({
  args: {
    conversation: v.id("conversations"),
    messageBody: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const res = await openai.images.generate({
        model: "dall-e-3",
        prompt: args.messageBody,
        n: 1,
        size: "1024x1024",
      });

      const imageUrl = res.data[0].url;
      await ctx.runMutation(api.messages.sendAIMessage, {
        content: imageUrl ?? "/poopenai.png",
        conversation: args.conversation,
        messageType: "image",
      });
    } catch (error: any) {
      await ctx.runMutation(api.messages.sendAIMessage, {
        content: "An error occurred while generating the image.",
        conversation: args.conversation,
        messageType: "text",
      });
    }
  },
});

// 1 token ~= 4 chars in English
// 1 token ~= ¾ words
// 100 tokens ~= 75 words
// Or
// 1-2 sentence ~= 30 tokens
// 1 paragraph ~= 100 tokens
// 1,500 words ~= 2048 tokens

// 1 image will cost $0,04(4 cents) => dall-e-3
// 1 image will cost $0,02(2 cents) => dall-e-2
