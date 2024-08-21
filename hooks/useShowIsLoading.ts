import { Message } from "ai/react";
import { useEffect, useState } from "react";

function useShowIsLoading (messages: Message[], isLoading: boolean): boolean {
  const [showLoading, setShowLoading] = useState<boolean>(false)
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | number = 0

    if (isLoading) {
      timeout = setTimeout(() => {
        setShowLoading(true)
      }, 500)
    }

    if (!isLoading) {
      setShowLoading(false)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading])

  useEffect(() => {
    if (messages.length === 0) return
    const lastMessage = messages[messages.length-1]

    if (lastMessage.role === "assistant" && isLoading) {
      setShowLoading(false)
    }
  }, [messages])

  return showLoading
}

export default useShowIsLoading