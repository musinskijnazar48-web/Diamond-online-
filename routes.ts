import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateChatResponse } from "./openai";
import { chatRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      // Validate request
      const { message } = chatRequestSchema.parse(req.body);
      
      // Store user message
      const userMessage = await storage.createChatMessage({
        text: message,
        isUser: true,
      });

      // Generate AI response
      const aiResponse = await generateChatResponse(message);
      
      // Store AI response
      const aiMessage = await storage.createChatMessage({
        text: aiResponse,
        isUser: false,
      });

      res.json({
        userMessage,
        aiMessage,
        reply: aiResponse
      });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ 
        error: "Ошибка сервера при обработке сообщения",
        details: error instanceof Error ? error.message : "Неизвестная ошибка"
      });
    }
  });

  // Get chat history
  app.get("/api/chat/history", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json({ messages });
    } catch (error) {
      console.error("Chat History API Error:", error);
      res.status(500).json({ error: "Ошибка при получении истории чата" });
    }
  });

  // Clear chat history
  app.delete("/api/chat/history", async (req, res) => {
    try {
      await storage.clearChatMessages();
      res.json({ success: true });
    } catch (error) {
      console.error("Clear Chat API Error:", error);
      res.status(500).json({ error: "Ошибка при очистке истории чата" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
