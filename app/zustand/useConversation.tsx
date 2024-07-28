import { create } from 'zustand';

export type ConversationType = {
    id: string;
    fullName: string;
    profilePic: string;
}

type MessageType = {
    id: string,
    body: string,
    senderId: string,
}

// interface CoversationState {
//     selectedConversation: ConversationType | null;
//     messages: MessageType[];
//     setSelectedConversation: (conversation: ConversationType | null) => void;
//     setMessages: (messages: MessageType[]) => void;
// }

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation: ConversationType | null) => set({ selectedConversation: conversation }),//similar to [state, setState] = useState(null)
    messages: [],
    setMessages: (messages: MessageType[]) => set({ messages: messages }),
}));

export default useConversation;