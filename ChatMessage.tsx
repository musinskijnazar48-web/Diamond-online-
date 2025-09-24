import { ChatMessage } from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="space-y-4 p-4 bg-background">
      <ChatMessage 
        message="Привет! Как дела? Можешь помочь мне разобраться с программированием?"
        isUser={true}
        timestamp={new Date(Date.now() - 60000)}
      />
      <ChatMessage 
        message="Привет! Конечно, я помогу вам с программированием. Что именно вас интересует? Хотите изучить определённый язык или решить конкретную задачу?"
        isUser={false}
        timestamp={new Date()}
      />
    </div>
  );
}