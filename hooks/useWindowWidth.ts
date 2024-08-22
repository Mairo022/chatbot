import { useEffect, useState } from "react";

// Return current window width
function useWindowWidth(): number | undefined {
  const [width, setWidth] = useState<number>()

  function onResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return width
}

export default useWindowWidth