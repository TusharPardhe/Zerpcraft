import { useState, useEffect } from "react";

export default function useIntersection (ref, rootMargin ="100px") {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ,{ rootMargin})
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }, [])
  
    return isIntersecting;
  }