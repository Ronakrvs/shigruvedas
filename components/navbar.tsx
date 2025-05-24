"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import WhatsAppButton from "./whatsapp-button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Farm", href: "/about" },
  { name: "Order Now", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/logo.png"
              alt="shigruvedas"
              width={45}
              height={45}
              className="drop-shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-green-800">SHIGRUVEDAS</span>
              <span className="text-xs text-green-600 hidden sm:block">Earth to Wellness</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600 relative",
                  pathname === item.href
                    ? "text-green-600 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                    : "text-gray-700 hover:text-green-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
              <Phone className="h-4 w-4 mr-2" />
              +91 7877255595
            </Button>
            <WhatsAppButton size="sm" className="bg-green-500 hover:bg-green-600" />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <Image src="/images/image.png" alt="shigruvedas" width={40} height={40} />
                  <div>
                    <div className="font-bold text-lg text-green-800">SHIGRUVEDAS</div>
                    <div className="text-sm text-green-600">Earth to Wellness</div>
                  </div>
                </div>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-green-600 py-2",
                      pathname === item.href ? "text-green-600 border-l-2 border-green-600 pl-4" : "text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: +91 7877255595
                  </Button>
                  <WhatsAppButton className="w-full bg-green-500 hover:bg-green-600" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
