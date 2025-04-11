import WaitlistCard from "@/components/waitlist-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F2F2F2] p-4">
      <WaitlistCard />
      <p className="mt-8 text-sm text-gray-600">
        built using this <a href="https://github.com/dambrubaba/google-sheet-waitlist" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">repo</a>
      </p>
    </main>
  )
}
