import { useEffect } from "react"

// Scroll to bottom of the element
function useScrollTo(elementRef: HTMLDivElement | null, dependencies = new Array<any>): void {
  useEffect(() => {
    if (!elementRef) return

    const { offsetHeight, scrollHeight, scrollTop } = elementRef

    if (scrollHeight >= scrollTop + offsetHeight) {
      elementRef.scrollTo(0, scrollHeight)
    }
  }, [elementRef, ...dependencies])
}

export default useScrollTo