import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const chat = action({
  args: {
    messageBody: v.string(),
    conversation: v.id("conversations"),
  },
  handler: async (ctx, args) => {
    const { text } = await generateText({
      model: google("models/gemini-1.5-flash-latest"),
      prompt: `You are a terse bot in a group chat responding to questions with their answers. \n\n ${args.messageBody}`,
    });

    const messageContent = text;
    await ctx.runMutation(api.messages.sendGeminiMessage, {
      content: messageContent ?? "I'm sorry, I don't have a response for that.",
      conversation: args.conversation,
    });
  },
});
