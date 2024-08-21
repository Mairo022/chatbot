import { useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

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