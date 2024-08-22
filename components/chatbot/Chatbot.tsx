import useAutosizeTextArea from "@/hooks/useAutosizeTextArea";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { useChat } from 'ai/react';
import Loading from "@/components/loading/Loading";
import ErrorMsg from "@/components/errorMsg/ErrorMsg";
import useShowIsLoading from "@/components/chatbot/hooks/useShowIsLoading";
import EditForm from "@/components/chatbot/components/EditForm";
import useScrollTo from "@/hooks/useScrollTo";

export default function Chatbot() {
  const [editIndex, setEditIndex] = useState<number>(-1)
  const { messages, setMessages, input, handleSubmit, handleInputChange, isLoading, error } = useChat({
    api: "/api/openai"
  })

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)

  const showLoading = useShowIsLoading(messages, isLoading)
  useAutosizeTextArea(textAreaRef.current, input)
  useScrollTo(messagesRef.current, [messages, input])

  // Remove messages after edit index
  // and submit with edited message
  function handleEditSubmit(e: FormEvent<HTMLFormElement>, editedMessage: string) {
    const newMessages = messages.slice(0, editIndex+1)
    newMessages[editIndex].content = editedMessage

    setMessages(newMessages)
    resetEditIndex()
    handleSubmit(e, {allowEmptySubmit: true})
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      handleSubmit(e)
    }
  }

  function resetEditIndex() {
    setEditIndex(-1)
  }

  function isEditing(i: number) {
    return editIndex === i
  }

  // Focus on textarea on page load
  useEffect(() => {
    textAreaRef.current?.focus()
  }, [])

  return (
    <div className="chatbox flex flex-col mx-auto h-full px-6 py-4 gap-6">
      <div className="messages_container grow max-lg:pr-4 whitespace-pre-line overflow-y-auto overflow-x-hidden break-words transition-[padding]" ref={messagesRef}>
        <div className="messages max-w-[800px] mx-auto">
          {messages.length === 0 &&
            <div className="message w-fit px-8 py-4 rounded-lg bg-tertiary-bg shadow mb-8">
              How can I help you today?
            </div>
          }
          {messages.map((message, i) => (
            message.role === "user" && isEditing(i) &&
              <EditForm
                isLoading={isLoading} 
                resetEditIndex={resetEditIndex} 
                message={message.content}
                handleEditSubmit={handleEditSubmit}
                key={i+1000}
              />
            || message.role === "user" &&
              <div className="row flex justify-end mb-8 group" key={i}>
                <button 
                  type="button" 
                  onClick={() => {setEditIndex(i)}}
                  className="edit_button h-[36px] w-[36px] hidden group-hover:flex justify-center items-center mr-3 mt-2 hover:bg-slate-500 rounded-full transition-colors">
                    <Image
                      src="edit.svg"
                      height={16}
                      width={16}
                      alt="Edit"
                    />                          
                </button>
                <div className="message min-h-[56px] max-w-[80%] w-fit  px-8 py-4 max-lg:px-6 bg-secondary-bg transition-[padding] rounded-lg shadow">
                  {message.content}
                </div>
              </div>
            || message.role == "assistant" &&
              <div key={i} className="message w-fit px-8 py-4 rounded-lg bg-tertiary-bg shadow mb-8">
                {message.content}
              </div>
          ))}
          <ErrorMsg error={error?.message}/>
          <Loading isLoading={showLoading}/>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="actions sticky bottom-0 mx-auto w-full max-w-[800px]">
        <button 
          type="submit"
          disabled={isLoading}
          className={`absolute right-[14px] bottom-[10px] rounded-full overflow-hidden ${isLoading ? "bg-[#333] cursor-default" : "cursor-pointer"}`}>
            <Image
              src="send.svg"
              height={36}
              width={36}
              alt="Send"
              className="hover:bg-[#999] motion-safe:transition"
            />
        </button>
        <textarea 
          rows={1}
          placeholder="Message"
          ref={textAreaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="block w-full pl-8 pr-16 py-4 rounded-lg shadow-input resize-none outline-none text-primary-text bg-tertiary-bg"/>
      </form>
    </div>
  );
}