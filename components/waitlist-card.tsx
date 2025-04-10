"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, ArrowLeft, FileText, Paintbrush, MessageSquare, MessagesSquare, Code, Users, Building, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { submitEmail } from "@/app/actions"

export default function WaitlistCard() {
  const [email, setEmail] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      // Call the server action to submit the email
      const result = await submitEmail(email)

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        setError(result.message || "Failed to submit. Please try again.")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const features = [
    {
      title: "Community Features",
      icon: <MessagesSquare className="h-4 w-4" />
    },
    {
      title: "Prompt Marketplace",
      icon: <FileText className="h-4 w-4" />
    },
    {
      title: "Version Control",
      icon: <Code className="h-4 w-4" />
    },
    {
      title: "Analytics",
      icon: <Paintbrush className="h-4 w-4" />
    },
    {
      title: "API Access",
      icon: <Code className="h-4 w-4" />
    },
    {
      title: "Teams",
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "Enterprise Solutions",
      icon: <Building className="h-4 w-4" />
    }
  ]

  const renderSocials = () => (
    <div className="w-full flex justify-center space-x-3">
      <a href="https://x.com/scionofshiv" target="_blank" rel="noreferrer" className={`${isDarkTheme ? 'bg-[#f0e4cf] text-[#2d2d2b]' : 'bg-[#2d2d2b] text-[#f0e4cf]'} hover:opacity-90 p-2 rounded-full transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      </a>
      <a href="https://github.com/dambrubaba" target="_blank" rel="noreferrer" className={`${isDarkTheme ? 'bg-[#f0e4cf] text-[#2d2d2b]' : 'bg-[#2d2d2b] text-[#f0e4cf]'} hover:opacity-90 p-2 rounded-full transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>
      <a href="mailto:dambrureddy321@gmail.com" className={`${isDarkTheme ? 'bg-[#f0e4cf] text-[#2d2d2b]' : 'bg-[#2d2d2b] text-[#f0e4cf]'} hover:opacity-90 p-2 rounded-full transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </a>
    </div>
  )

  return (
    <div className="perspective-1000 mx-auto w-full max-w-md mt-10">
      {/* Single card design with flip effect */}
      <div className="relative">
        {/* Flip card container */}
        <div
          className={`relative w-full min-h-[440px] transition-all duration-500 ease-in-out ${isFlipped ? "rotate-y-180" : ""}`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front of card */}
          <Card
            className={`absolute inset-0 h-full w-full [backface-visibility:hidden] ${
              isFlipped ? "invisible" : "" // Control visibility only
            } border-none ${isDarkTheme ? 'bg-[#2d2d2b] text-[#f0e4cf]' : 'bg-[#f0e4cf] text-[#2d2d2b]'} rounded-xl flex flex-col shadow-[0_10px_20px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1),inset_0_-2px_5px_rgba(0,0,0,0.05)]`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Badge className={`w-fit rounded-r-none ${isDarkTheme ? 'bg-[#f0e4cf] text-[#2d2d2b] hover:bg-[#e5d9c4]' : 'bg-[#2d2d2b] text-[#f0e4cf] hover:bg-[#3a3a38]'}`}>Premium</Badge>
                  <Badge variant="outline" className={`w-fit rounded-l-none border-l-0 ${isDarkTheme ? 'border-[#f0e4cf] text-[#f0e4cf] hover:bg-[#3a3a38]' : 'border-[#2d2d2b] text-[#2d2d2b] hover:bg-[#e5d9c4]'}`}>LoPROMPT</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className={`rounded-full h-8 w-8 p-0 ${isDarkTheme ? 'text-[#f0e4cf] hover:bg-[#3a3a38]' : 'text-[#2d2d2b] hover:bg-[#e5d9c4]'}`}
                >
                  {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Everything for Prompts</h1>
              <p className={`text-sm sm:text-base ${isDarkTheme ? "text-[#e5d9c4]" : "text-[#3a3a38]"}`}>
                Explore, create, store, and share prompts. The ultimate platform for prompt engineers and AI enthusiasts.
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              {!isSubmitted ? (
                <>
                  <div className="mb-3 mt-2 text-center">
                    <p className={`text-xs sm:text-sm font-normal uppercase tracking-wide ${isDarkTheme ? 'text-[#f0e4cf]' : 'text-[#2d2d2b]'}`}>
                      JOIN THE WAITLIST!
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-1">
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder={error || "Add your email here"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`${isDarkTheme ? 'bg-[#3a3a38] text-[#f0e4cf] placeholder-[#f0e4cf]/70 border-[#4a4a48]' : 'bg-white text-[#2d2d2b] placeholder-[#2d2d2b]/70 border-[#e5d9c4]'} pr-12 ${error ? "border-red-500 placeholder-red-400" : ""}`}
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className={`absolute right-0 top-0 h-full rounded-l-none ${isDarkTheme ? 'bg-[#f0e4cf] hover:bg-[#e5d9c4] text-[#2d2d2b]' : 'bg-[#2d2d2b] hover:bg-[#3a3a38] text-[#f0e4cf]'}`}
                          size="icon"
                        >
                          {isSubmitting ? (
                            <div className={`h-4 w-4 animate-spin rounded-full border-2 ${isDarkTheme ? 'border-[#2d2d2b] border-t-transparent' : 'border-[#f0e4cf] border-t-transparent'}`} />
                          ) : (
                            <ArrowRight className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <p className={`text-[10px] sm:text-xs italic mt-1 ${isDarkTheme ? 'text-[#f0e4cf]/70' : 'text-[#2d2d2b]/70'}`}>
                        *Email will be used to send you updates only
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className={`mt-8 text-center ${isDarkTheme ? 'text-[#f0e4cf]' : 'text-[#2d2d2b]'}`}>
                  <Check className={`h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 ${isDarkTheme ? 'text-[#f0e4cf]' : 'text-[#2d2d2b]'}`} />
                  <p className="text-sm sm:text-base font-medium">You're on the list! We'll notify you when we launch.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-auto">
              <Button
                variant="outline"
                onClick={() => setIsFlipped(true)}
                className={`w-full ${isDarkTheme ? 'border-2 border-[#f0e4cf] bg-transparent text-[#f0e4cf] hover:bg-[#3a3a38]' : 'border-2 border-[#2d2d2b] bg-transparent text-[#2d2d2b] hover:bg-[#e5d9c4]'} flex items-center justify-center gap-2`}
              >
                Features
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="pt-2">
                {renderSocials()}
              </div>
            </CardFooter>
          </Card>

          {/* Back of card */}
          <Card
            className={`absolute inset-0 h-full w-full rotate-y-180 [backface-visibility:hidden] ${
              !isFlipped ? "invisible" : "" // Control visibility only
            } border-none ${isDarkTheme ? 'bg-[#2d2d2b] text-[#f0e4cf]' : 'bg-[#f0e4cf] text-[#2d2d2b]'} rounded-xl flex flex-col shadow-[0_10px_20px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1),inset_0_-2px_5px_rgba(0,0,0,0.05)]`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className={`${isDarkTheme ? 'bg-[#f0e4cf] text-[#2d2d2b] hover:bg-[#e5d9c4]' : 'bg-[#2d2d2b] text-[#f0e4cf] hover:bg-[#3a3a38]'}`}>Features</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFlipped(false)}
                  className={`h-8 w-8 rounded-full ${isDarkTheme ? 'border-2 border-[#f0e4cf] bg-transparent text-[#f0e4cf] hover:bg-[#3a3a38]' : 'border-2 border-[#2d2d2b] bg-transparent text-[#2d2d2b] hover:bg-[#e5d9c4]'}`}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-1">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-center py-2 border-b ${isDarkTheme ? 'border-[#3a3a38]' : 'border-[#e5d9c4]'} last:border-0`}>
                    <div className={isDarkTheme ? "text-[#f0e4cf] mr-3" : "text-[#2d2d2b] mr-3"}>
                      {feature.icon}
                    </div>
                    <h3 className={`font-medium text-xs sm:text-sm ${isDarkTheme ? 'text-[#f0e4cf]' : 'text-[#2d2d2b]'}`}>{feature.title}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-3 mt-auto">
              {renderSocials()}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

