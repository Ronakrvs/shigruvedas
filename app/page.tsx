import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Heart, Shield, Truck, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProductGallery from "@/components/product-gallery"
import TestimonialsSection from "@/components/testimonials-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-green-50">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-amber-100/20 rounded-3xl"></div>
        <div className="relative z-10">
          <div className="mb-8 animate-fade-in">
            <Image
              src="/images/image.png"
              alt="shigruvedas Logo"
              width={250}
              height={250}
              className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-green-800 mb-6 animate-slide-up">Pure Organic Moringa</h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            From our organic farms to your wellness journey. Discover the power of nature's most nutritious superfood -
            fresh moringa leaves, premium powder, and tender drumsticks, grown with love and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              asChild
            >
              <Link href="/contact">
                Order Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/about">Our Farm Story</Link>
            </Button>
          </div>

          {/* Quick Contact Options */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <WhatsAppButton />
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 7877255595
            </Button>
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
              <Mail className="h-4 w-4 mr-2" />
              orders@shigruvedas.com
            </Button>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <ProductGallery />

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">Our Premium Moringa Products</h2>
        <p className="text-center text-green-600 mb-12 max-w-2xl mx-auto text-lg">
          Handpicked and processed with care to preserve maximum nutrition and freshness
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardHeader>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-green-800 text-center">Fresh Moringa Leaves</CardTitle>
              <CardDescription className="text-center">Freshly harvested, nutrient-rich leaves</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/leaves2.png"
                  alt="Fresh Moringa Leaves"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Hand-picked daily from our organic farms. Rich in vitamins, minerals, and antioxidants. Perfect for
                cooking, teas, and fresh consumption.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Vitamin C
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Iron
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Protein
                </Badge>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/contact">Order Fresh Leaves</Link>
                </Button>
                <WhatsAppButton
                  message="Hi! I'm interested in ordering fresh moringa leaves. Can you provide pricing and availability?"
                  className="w-full"
                  variant="outline"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardHeader>
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-amber-600" />
              </div>
              <CardTitle className="text-green-800 text-center">Moringa Powder</CardTitle>
              <CardDescription className="text-center">Premium quality dried and powdered leaves</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/powder2.png"
                  alt="Moringa Powder"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Carefully dried and ground to preserve nutrients. Easy to use in smoothies, cooking, and as a daily
                supplement. Long shelf life guaranteed.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                  Antioxidants
                </Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                  Calcium
                </Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                  Potassium
                </Badge>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/contact">Order Powder</Link>
                </Button>
                <WhatsAppButton
                  message="Hi! I'm interested in ordering moringa powder. Can you provide pricing and availability?"
                  className="w-full"
                  variant="outline"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardHeader>
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-emerald-600" />
              </div>
              <CardTitle className="text-green-800 text-center">Fresh Drumsticks</CardTitle>
              <CardDescription className="text-center">Tender moringa pods for cooking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Image
                  src="/images/drumstick2.png"
                  alt="Fresh Drumsticks"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Young, tender moringa pods perfect for traditional cooking. Rich in fiber, vitamins, and minerals. Adds
                unique flavor to your dishes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Fiber
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Folate
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Magnesium
                </Badge>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/contact">Order Drumsticks</Link>
                </Button>
                <WhatsAppButton
                  message="Hi! I'm interested in ordering fresh drumsticks. Can you provide pricing and availability?"
                  className="w-full"
                  variant="outline"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Why Choose <b>Shigruvedas</b>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">100% Organic</h3>
              <p className="text-gray-600">
                No pesticides, no chemicals. Pure organic farming practices for the healthiest moringa products.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Farm Fresh</h3>
              <p className="text-gray-600">
                Harvested daily and delivered fresh. From our farm directly to your doorstep with maximum nutrition.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">Bulk Orders Welcome</h3>
              <p className="text-gray-600">
                Special pricing for bulk purchases. Perfect for retailers, restaurants, and health food stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Pure Moringa?</h2>
          <p className="text-xl mb-6 opacity-90">Contact us today for fresh orders or bulk purchase inquiries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/contact">
                Place Order <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <WhatsAppButton
              message="Hi! I'm interested in bulk purchase of moringa products. Can you provide wholesale pricing?"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton
          showLogo={false}
          message="Hi! I'm interested in your organic moringa products. Can you help me?"
          className="rounded-full w-14 h-14 shadow-lg animate-bounce"
          size="lg"
        />
      </div>
    </div>
  )
}
