import { Zap, Tag, Star, Palette, MessageSquare, ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type BenefitCardProps = {
  title: string
  description: string
  icon: string
}

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "zap":
        return <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      case "tag":
        return <Tag className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      case "star":
        return <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      case "palette":
        return <Palette className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      case "message":
        return <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      case "image":
        return <ImageIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
      default:
        return <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
    }
  }

  return (
    <Card className="border-amber-200 bg-white transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {getIcon()}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
      </CardContent>
    </Card>
  )
}
