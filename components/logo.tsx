import Image from "next/image"
import Link from "next/link"

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { width: 40, height: 40, textSize: "text-lg" },
    md: { width: 60, height: 60, textSize: "text-xl" },
    lg: { width: 80, height: 80, textSize: "text-2xl" },
  }

  const { width, height, textSize } = sizes[size]

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="/crescent-night.png"
          alt="Soulspire Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
      <span className={`font-semibold ${textSize} text-white`}>Soulspire</span>
    </Link>
  )
}
