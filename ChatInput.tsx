import { ChatInput } from '../ChatInput';

export default function ChatInputExample() {
  const handleSendMessage = (message: string) => {
    console.log('Отправлено сообщение:', message);
  };

  return (
    <div className="bg-background">
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}