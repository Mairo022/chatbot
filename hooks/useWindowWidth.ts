import { useEffect, useState } from "react";

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