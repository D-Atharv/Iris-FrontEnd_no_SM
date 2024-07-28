import { useState, useEffect } from 'react';

export const useMessages = (selectedUserId: string) => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedUserId) {
                const response = await fetch(`/api/messages/${selectedUserId}`);
                const data = await response.json();
                setMessages(data.map((msg: { body: string }) => msg.body));
            }
        };

        fetchMessages();
    }, [selectedUserId]);

    return { messages, setMessages };
};

export const useUsers = (authUser: any) => {
    const [users, setUsers] = useState<{ id: string, fullName: string, profilePic: string }[]>([]);

    useEffect(() => {
        if (authUser) {
            const fetchUsers = async () => {
                const response = await fetch('/api/messages/conversations');
                const data = await response.json();
                setUsers(data);
            };

            fetchUsers();
        }
    }, [authUser]);

    return users;
};

export const sendMessage = async (userId: string, message: string, messages: string[], setMessages: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (userId) {
        const response = await fetch(`/api/messages/send/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const newMessage = await response.json();
        setMessages([...messages, newMessage.body]);
    }
};
