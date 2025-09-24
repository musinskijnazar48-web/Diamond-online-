# Design Guidelines: AI Чат-Бот Веб-Сайт

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern AI chat interfaces like ChatGPT, Claude, and Perplexity AI. The focus is on creating a clean, conversation-focused experience that emphasizes readability and user engagement.

**Key Design Principles:**
- Conversation-first design prioritizing message clarity
- Minimal distractions to maintain focus on chat interaction
- Modern, approachable aesthetic that builds trust in AI capabilities

## Core Design Elements

### Color Palette
**Dark Mode Primary:**
- Background: 222 15% 8%
- Chat container: 222 15% 12%  
- Message bubbles (user): 217 91% 60%
- Message bubbles (AI): 222 15% 16%
- Text primary: 0 0% 95%
- Text secondary: 0 0% 70%

**Light Mode Primary:**
- Background: 0 0% 98%
- Chat container: 0 0% 100%
- Message bubbles (user): 217 91% 60%
- Message bubbles (AI): 220 13% 91%
- Text primary: 222 15% 15%

### Typography
- **Primary Font:** Inter via Google Fonts
- **Headers:** 600 weight, various sizes (text-2xl to text-4xl)
- **Body Text:** 400 weight, text-base and text-sm
- **Chat Messages:** 400 weight for readability
- **Monospace:** 'Fira Code' for code snippets in AI responses

### Layout System
**Spacing Units:** Consistent use of Tailwind units 2, 4, 6, 8, and 12
- **Micro spacing:** p-2, m-2 for tight elements
- **Standard spacing:** p-4, m-4 for most components  
- **Section spacing:** p-6, p-8 for major layout areas
- **Large spacing:** p-12 for hero sections

### Component Library

**Landing Page Components:**
- **Hero Section:** Large centered headline with chat preview
- **Feature Highlights:** 3-column grid showcasing AI capabilities
- **Live Chat Demo:** Interactive preview of chat interface

**Chat Interface Components:**
- **Message Bubbles:** Rounded corners (rounded-2xl), proper spacing
- **Input Field:** Fixed bottom position with send button
- **Typing Indicator:** Animated dots when AI is processing
- **Scroll Container:** Auto-scroll to latest messages
- **Sidebar:** Collapsible conversation history (desktop)

**Navigation:**
- **Header:** Simple logo + navigation links
- **Mobile Menu:** Hamburger with slide-out drawer
- **Chat Header:** Title with new chat button

### Visual Treatment

**Chat-Specific Design:**
- **Message Alignment:** User messages right-aligned, AI messages left-aligned
- **Avatar System:** Simple initials or icons for message attribution
- **Code Highlighting:** Syntax highlighting for AI-generated code
- **Loading States:** Skeleton loading for AI response generation

**Interactive Elements:**
- **Hover States:** Subtle opacity changes (hover:opacity-80)
- **Focus States:** Clear focus rings for accessibility
- **Button Variants:** Primary (filled), secondary (outline), ghost
- **Input Interactions:** Clear focus states and validation feedback

### Responsive Design
- **Desktop:** Sidebar + main chat area layout
- **Tablet:** Collapsible sidebar with overlay
- **Mobile:** Full-screen chat with slide-up input
- **Breakpoints:** Follow Tailwind's standard breakpoints (sm, md, lg, xl)

### Images
No large hero images planned. The design focuses on the chat interface itself as the primary visual element. Small decorative elements or icons may be used for feature illustrations, but the conversation interface is the hero.

**Icon Usage:**
- Heroicons for UI elements (send, menu, settings)
- Simple avatar placeholders for chat participants
- Status indicators for online/typing states

This design creates a professional, trustworthy AI chat experience that prioritizes usability and conversation flow while maintaining modern aesthetic standards.