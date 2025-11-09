"use client"

import { useState, useEffect } from "react"

export default function HeroTitle() {
  const words = ["oportunidade!", "lucro!"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 120
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    // Quando a palavra completa for digitada
    if (!isDeleting && subIndex === words[index].length) {
      setTimeout(() => setIsDeleting(true), 1200) // espera antes de apagar
    }
    // Quando terminar de apagar
    else if (isDeleting && subIndex === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, index, words])

  // Animação do cursor piscando
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
      <span className="text-sucatao-yellow">Transforme</span> sua{" "}
      <span className="text-sucatao-blue">sucata</span> em{" "}
      <span className="text-[#F54337]">
        {words[index].substring(0, subIndex)}
        <span className="inline-block w-[2px]">
          {blink ? "|" : " "}
        </span>
      </span>
    </h1>
  )
}
