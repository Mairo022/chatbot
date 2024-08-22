import { useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

// Adjust textarea's height by it's scroll height
function useAutosizeTextArea (textAreaRef: HTMLTextAreaElement | null, value: string, offset: number = 0): void {
  const width = useWindowWidth()
  
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px"
      const scrollHeight = textAreaRef.scrollHeight
      textAreaRef.style.height = scrollHeight + offset + "px"
    }
  }, [textAreaRef, value, width])
}
  
export default useAutosizeTextArea