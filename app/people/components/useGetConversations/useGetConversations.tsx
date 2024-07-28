import { ConversationType } from '@/app/zustand/useConversation';
import React, { useEffect, useState } from 'react'

const useGetConversations = () => {

    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState<ConversationType[]>([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);

            try {
                const resp = await fetch("http://localhost:5000/api/messages/conversations")
                const data = await resp.json()

                if (data.error) {
                    throw new Error(data.error);
                }

                setConversations(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log("error in get conversation controller", error.message);
                }
            }
            finally {
                setLoading(false);
            }
        }
    }, [])

    return { loading, conversations };
}

export default useGetConversations
