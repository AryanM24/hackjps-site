"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export function TerminalLoading() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const line1 = "Hello hacker"
  const line2 = "Welcome to HackJPS"

  useEffect(() => {
    let currentText1 = ""
    let currentText2 = ""
    let index1 = 0
    let index2 = 0

    const typeLine1 = setInterval(() => {
      if (index1 < line1.length) {
        currentText1 += line1[index1]
        setText1(currentText1)
        index1++
      } else {
        clearInterval(typeLine1)
        setTimeout(typeLine2, 500)
      }
    }, 100)

    const typeLine2 = () => {
      const interval2 = setInterval(() => {
        if (index2 < line2.length) {
          currentText2 += line2[index2]
          setText2(currentText2)
          index2++
        } else {
          clearInterval(interval2)
          setTimeout(() => setIsVisible(false), 1500)
        }
      }, 80)
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typeLine1)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-start justify-start bg-black p-6 md:p-12"
          style={{ fontFamily: "'ShareTechMono', monospace" }}
        >
          <div className="w-full max-w-4xl">
            <div className="flex flex-col space-y-4 text-xl md:text-3xl tracking-tight text-[#ede8d8]">
              <div className="flex items-end">
                <span className="mr-3 text-[#ede8d8]/40 font-bold select-none self-start">❯</span>
                <span className="break-all">{text1}</span>
                {!text2 && showCursor && <span className="ml-1 inline-block w-4 border-b-[3px] border-[#ede8d8] mb-1.5" />}
              </div>
              {text1 === line1 && (
                <div className="flex items-end">
                  <span className="mr-3 text-[#ede8d8]/40 font-bold select-none self-start">❯</span>
                  <span className="break-all">{text2}</span>
                  {showCursor && <span className="ml-1 inline-block w-4 border-b-[3px] border-[#ede8d8] mb-1.5" />}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
