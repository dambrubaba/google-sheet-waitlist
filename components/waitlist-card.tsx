"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
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

  return (
    <div className="perspective-1000 mx-auto w-full max-w-md">
      {/* Ensure parent has some height, min-h-[350px] is an example, adjust if needed */}
      <div
        className={`relative w-full min-h-[350px] transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of card - Restore absolute, add h-full */}
        <Card
          className={`absolute top-0 left-0 h-full w-full [backface-visibility:hidden] ${
            isFlipped ? "invisible" : "" // Control visibility only
          } border-none bg-gradient-to-br from-zinc-900 to-zinc-800 text-white shadow-lg`}
        >
          <CardHeader className="pb-4">
            <Badge className="w-fit bg-amber-500 text-zinc-900 hover:bg-amber-600">Coming Soon</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Everything for Prompts</h1>
            <p className="text-zinc-200">
              Explore, create, store, and share prompts. The ultimate platform for prompt engineers and AI enthusiasts.
            </p>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Add your email here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`bg-zinc-800 pr-12 text-white ${error ? "border-red-500" : "border-zinc-700"}`}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-0 top-0 h-full rounded-l-none bg-amber-500 hover:bg-amber-600"
                      size="icon"
                    >
                      {isSubmitting ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {error && <p className="text-sm text-red-400 font-medium">{error}</p>}
                </div>
              </form>
            ) : (
              <div className="rounded-md bg-zinc-800 p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-amber-500 p-2">
                    <Check className="h-5 w-5 text-zinc-900" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white">You're on the list!</h3>
                <p className="text-zinc-300">We'll notify you when we launch.</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              onClick={() => setIsFlipped(true)}
              className="w-full border-zinc-700 bg-transparent text-amber-500 hover:bg-zinc-800 hover:text-amber-400"
            >
              Learn More
            </Button>
          </CardFooter>
        </Card>

        {/* Back of card - Ensure absolute, add h-full */}
        <Card
          className={`absolute top-0 left-0 h-full w-full rotate-y-180 [backface-visibility:hidden] ${
            !isFlipped ? "invisible" : "" // Control visibility only
          } border-none bg-gradient-to-br from-zinc-900 to-zinc-800 text-white shadow-lg`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <Badge className="bg-amber-500 text-zinc-900 hover:bg-amber-600">Benefits</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFlipped(false)}
                className="h-8 w-8 rounded-full bg-transparent p-0 text-amber-500 hover:bg-zinc-800 hover:text-amber-400"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white">Why Join Our Waitlist?</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-amber-500 p-1">
                  <Check className="h-4 w-4 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-medium">Early Access</h3>
                  <p className="text-sm text-zinc-300">Be the first to use our platform when we launch</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-amber-500 p-1">
                  <Check className="h-4 w-4 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-medium">Exclusive Features</h3>
                  <p className="text-sm text-zinc-300">Get access to premium features for free</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-amber-500 p-1">
                  <Check className="h-4 w-4 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-medium">Community Access</h3>
                  <p className="text-sm text-zinc-300">Connect with other prompt engineers and AI enthusiasts</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>{/* Remove the back button from here as it's now at the top */}</CardFooter>
        </Card>
      </div>
    </div>
  )
}
