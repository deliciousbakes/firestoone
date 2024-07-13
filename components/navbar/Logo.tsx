import { LucideTent } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const Logo = () => {
  return (
    <div>
      <Button  asChild  size="icon"  variant="secondary"    className="bg-orange-700">
        <Link href="/">
        <LucideTent className="w-6 h-6"/>
        </Link>
      </Button>
    </div>
  )
}

export default Logo
