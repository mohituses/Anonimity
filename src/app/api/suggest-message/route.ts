import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { generateText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, liske Qooh.me, should be suitable for a diverse audience. For example, your output should be structured like this: 'What's a hobby you've recently started?||If you could have dinner with any historical figure, who would it be? || What's a simple thing that makes you happy?'. Ensure the questions are intriguing, fostor curiosity." 

    const yourModel = openai.completion('gpt-3.5-turbo-instruct');
    const result = await streamText({
      model: yourModel,
      maxTokens: 200,
      
      maxRetries: 5,
      prompt
    });

    return new StreamingTextResponse(result.toAIStream());
    // return result.toAIStreamResponse();
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const {name, status, headers, message} = error;
      return NextResponse.json({
        name, status, headers, message
      }, {status})
        
    }else{
        console.error("An unexpected error occured", error);
        throw error
    }
  }
}
