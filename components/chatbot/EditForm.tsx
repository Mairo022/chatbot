import { useState, useRef, KeyboardEvent, useEffect, ChangeEvent } from "react"
import Image from 'next/image'
import useAutosizeTextArea from "@/hooks/useAutosizeTextArea"

export default function EditForm(props: EditFormProps) {
  const { isLoading, resetEditIndex, message, handleEditSubmit } = props
  const [editText, setEditText] = useState<string>("")
  const editTextAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(editTextAreaRef.current, editText, 36)
  
  function handleEditTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setEditText(e.target.value)
  }
  
  function handleEditKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      handleEditSubmit(e, editText)
    }
  }

  useEffect(() => {
    setEditText(message)
  }, [message])

  return (
    <form onSubmit={(e) => {handleEditSubmit(e, editText)}} className="actions relative mb-8">
      <button 
        type="submit"
        disabled={isLoading}
        className={`absolute right-4 bottom-[10px] rounded-full overflow-hidden ${isLoading ? "bg-[#333] cursor-default" : "cursor-pointer"}`}>
          <Image
            priority
            src="send.svg"
            height={36}
            width={36}
            alt="Send"
            className="hover:bg-[#999] motion-safe:transition"
          />
      </button>
      <button 
        type="button"
        onClick={() => {resetEditIndex()}}
        disabled={isLoading}
        className={`absolute right-[68px] bottom-[10px] rounded-full overflow-hidden cursor-pointer`}>
          <Image
            priority
            src="close.svg"
            height={36}
            width={36}
            alt="Close"
            className="hover:bg-[hsl(0,40%,30%)] motion-safe:transition"
          />
      </button>
      <textarea 
        rows={1}
        placeholder="Message"
        ref={editTextAreaRef}
        value={editText}
        onChange={handleEditTextChange}
        onKeyDown={handleEditKeyDown}
        className="block w-full px-8 py-4 rounded-lg shadow-input resize-none outline-none text-primary-text bg-tertiary-bg"/>
    </form>
  )
}