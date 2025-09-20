import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Heart, Shield, Truck, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import ProductGallery from "@/components/product-gallery"
import TestimonialsSection from "@/components/testimonials-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shigruvedas - Organic Moringa Farm",
    "description": "Premium organic moringa products directly from our certified organic farm in Rajasthan. Fresh moringa leaves, powder, and drumsticks with free delivery.",
    "url": "https://shigruvedas.com",
    "telephone": "+91-7877255595",
    "email": "shigruvedas@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "248, A-Block, hiran magri",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan", 
      "postalCode": "313002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.571267",
      "longitude": "73.691544"
    },
    "openingHours": "Mo-Sa 08:00-19:00, Su 09:00-17:00",
    "sameAs": [
      "https://wa.me/917877255595"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Organic Moringa Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Organic Moringa Leaves",
            "description": "Hand-picked daily from our organic farms in Rajasthan. Rich in 90+ nutrients including Vitamin C, Iron, and Protein."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Organic Moringa Powder",
            "description": "Premium quality dried and powdered moringa leaves. Perfect for smoothies, cooking, and daily supplements."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Fresh Moringa Drumsticks",
            "description": "Young, tender moringa pods perfect for traditional Indian cooking. Rich in fiber, vitamins, and minerals."
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Organic Moringa Products - Fresh Leaves, Powder & Drumsticks | Shigruvedas Rajasthan</title>
        <meta 
          name="description" 
          content="Buy premium organic moringa leaves, powder & drumsticks from our organic farm in Rajasthan. delivery across India. Order fresh moringa products now!" 
        />
        <meta name="keywords" content="organic moringa, moringa leaves, moringa powder, moringa drumsticks, organic farming Rajasthan, moringa supplier India, fresh moringa products, bulk moringa order" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shigruvedas.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Organic Moringa Products - Fresh from Rajasthan Farm | Shigruvedas" />
        <meta property="og:description" content="Premium organic moringa leaves, powder & drumsticks from our certified organic farm. Free delivery across India." />
        <meta property="og:image" content="https://shigruvedas.com/images/moringa-farm-rajasthan.jpg" />
        <meta property="og:url" content="https://shigruvedas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shigruvedas" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Organic Moringa Products from Rajasthan | Shigruvedas" />
        <meta name="twitter:description" content="Premium organic moringa products directly from our farm in Rajasthan. Order fresh moringa leaves, powder & drumsticks online." />
        <meta name="twitter:image" content="https://shigruvedas.com/images/moringa-farm-rajasthan.jpg" />
        
        {/* Local Business Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Geo Meta Tags */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Udaipur, Rajasthan" />
        <meta name="geo.position" content="24.571267;73.691544" />
        <meta name="ICBM" content="24.571267, 73.691544" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-green-50">
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/20  rounded-3xl"></div>
          <div className="relative z-10">
            <div className="mb-8 animate-fade-in">
              <Image
                src="/images/image.png"
                alt="Shigruvedas Organic Moringa Farm Logo - Premium Moringa Products from Rajasthan"
                width={250}
                height={250}
                className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-green-800 mb-6 animate-slide-up">
              Premium Organic Moringa Products from Rajasthan
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Direct from our 50+ acre certified organic farm in Rajasthan to your wellness journey. Discover the power of nature's most nutritious superfood - 
              fresh moringa leaves, premium powder, and tender drumsticks, grown with 5+ years of organic farming expertise.
            </p>
            
            {/* Location and Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-green-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Udaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>100% Certified Organic</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                <span>Free Delivery Pan India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Order Fresh Moringa Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/about">Our Organic Farm Story</Link>
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
                shigruvedas@gmail.com
              </Button>
            </div>
          </div>
        </section>

        {/* Farm Statistics Section - SEO Value */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Our Organic Moringa Farm at a Glance</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg font-semibold text-green-800">Acres of Organic Farm</div>
                <div className="text-sm text-gray-600">Certified organic moringa cultivation in Rajasthan</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-lg font-semibold text-green-800">Healthy Moringa Trees</div>
                <div className="text-sm text-gray-600">Producing fresh leaves and drumsticks daily</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-lg font-semibold text-green-800">Years Organic Farming</div>
                <div className="text-sm text-gray-600">Chemical-free sustainable agriculture practices</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg font-semibold text-green-800">Pure & Natural</div>
                <div className="text-sm text-gray-600">No pesticides, chemicals, or artificial additives</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery Section */}
        <ProductGallery />

        {/* Products Section - Enhanced SEO */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
            Premium Organic Moringa Products from Rajasthan
          </h2>
          <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
            Hand-picked daily from our certified organic farm and processed with care to preserve maximum nutrition. 
            Fresh moringa products delivered directly from farm to your doorstep across India.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-800 text-center">Fresh Organic Moringa Leaves</CardTitle>
                <CardDescription className="text-center">Hand-picked daily from our chemical-free farm in Rajasthan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/leaves2.png"
                    alt="Fresh organic moringa leaves from Shigruvedas farm Rajasthan - rich in Vitamin C, Iron, Protein"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Hand-picked daily from our 50+ acre organic moringa farm in Rajasthan. Contains 90+ essential nutrients including 
                  7x more Vitamin C than oranges, 4x more Calcium than milk. Perfect for cooking traditional Indian dishes, 
                  making nutritious moringa tea, or fresh consumption for maximum health benefits.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    90+ Nutrients
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Daily Fresh Harvest
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Vitamin C Rich
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/contact">Order Fresh Moringa Leaves</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I want to order fresh organic moringa leaves from your Rajasthan farm. Can you provide pricing and delivery details?"
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
                <CardTitle className="text-green-800 text-center">Organic Moringa Leaf Powder</CardTitle>
                <CardDescription className="text-center">Premium quality sun-dried and stone-ground powder</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/powder2.png"
                    alt="Organic moringa leaf powder from Shigruvedas Rajasthan - perfect for smoothies, supplements, cooking"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Premium organic moringa powder made from sun-dried leaves using traditional stone grinding methods. 
                  Retains maximum nutritional value with 2x more protein than yogurt and 3x more potassium than bananas. 
                  Perfect for daily health supplements, green smoothies, traditional recipes, and Ayurvedic preparations. 
                  Long shelf life with proper storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    Stone Ground
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    Long Shelf Life
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    High Protein
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                    <Link href="/contact">Order Moringa Powder</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I'm interested in bulk order of organic moringa powder from your Rajasthan farm. Please share wholesale pricing."
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
                <CardTitle className="text-green-800 text-center">Fresh Moringa Drumsticks (Pods)</CardTitle>
                <CardDescription className="text-center">Young, tender moringa pods for traditional Indian cooking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/drumstick2.png"
                    alt="Fresh moringa drumsticks pods from Shigruvedas organic farm - perfect for Indian cooking, rich in fiber"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Young, tender moringa drumsticks (pods) harvested at perfect maturity from our organic farm in Rajasthan. 
                  Essential ingredient for traditional South Indian sambar, North Indian sabzi, and regional delicacies. 
                  Rich in dietary fiber, folate, magnesium, and adds unique earthy flavor to curries and vegetables. 
                  Fresh harvest ensures maximum taste and nutrition.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Traditional Cooking
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    High Fiber
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Fresh Harvest
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact">Order Fresh Drumsticks</Link>
                  </Button>
                  <WhatsAppButton
                    message="Hi! I want to order fresh moringa drumsticks from your organic farm. Can you provide pricing for regular supply?"
                    className="w-full"
                    variant="outline"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Moringa Section - Educational SEO Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
              Why Moringa is Called the "Miracle Tree" of India
            </h2>
            <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
              Discover the incredible nutritional benefits of moringa that have made it a superfood treasured in 
              Ayurvedic medicine for over 4000 years. Our organically grown moringa from Rajasthan delivers maximum potency.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Nutritional Powerhouse
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>7x more Vitamin C than oranges</strong> - Boosts immunity naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>4x more Calcium than milk</strong> - Strengthens bones and teeth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>4x more Vitamin A than carrots</strong> - Supports eye health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>3x more Potassium than bananas</strong> - Maintains heart health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                    <span><strong>2x more Protein than yogurt</strong> - Complete amino acid profile</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  Traditional Health Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Boosts immune system naturally</strong> - Rich in antioxidants and vitamins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Supports healthy blood sugar levels</strong> - Traditional Ayurvedic use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Promotes healthy digestion</strong> - High fiber and enzyme content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Provides sustained natural energy</strong> - Without caffeine crash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                    <span><strong>Anti-inflammatory compounds</strong> - Supports overall wellness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Why Choose Shigruvedas Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Why Choose Shigruvedas Organic Moringa Farm?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">100% Certified Organic</h3>
                <p className="text-gray-600">
                  Zero pesticides, zero chemicals, zero artificial additives. Our 50+ acre farm in Rajasthan follows 
                  strict organic farming practices with natural fertilizers, groundwater irrigation, and rainwater harvesting.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Farm to Table Freshness</h3>
                <p className="text-gray-600">
                  Hand-picked daily and processed within 24 hours to preserve maximum nutrition. Direct delivery from 
                  our organic farm to your doorstep across India ensures you get the freshest moringa products possible.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">Bulk Orders & Wholesale</h3>
                <p className="text-gray-600">
                  Special pricing for bulk purchases. Perfect for retailers, restaurants, health food stores, 
                  Ayurvedic practitioners, and export businesses. Consistent supply from our large-scale organic production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Ready to Experience Premium Rajasthan Moringa?
            </h2>
            <p className="text-xl mb-6 opacity-90 text-center max-w-3xl mx-auto">
              Contact Shigruvedas today for fresh moringa orders, bulk purchase inquiries, or to visit our 
              organic farm in Udaipur, Rajasthan. Free delivery across India with quality guarantee.
            </p>
            
            {/* Business Hours and Location Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Business Hours: Mon-Sat 8AM-7PM, Sun 9AM-5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Location: Udaipur, Rajasthan, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/contact">
                  Place Your Order <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <WhatsAppButton
                message="Hi! I'm interested in bulk purchase of organic moringa products from your Rajasthan farm. Can you provide wholesale pricing and minimum order quantity?"
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
            message="Hi! I'm interested in your organic moringa products from Rajasthan. Can you help me with pricing and delivery?"
            className="rounded-full w-14 h-14 shadow-lg animate-bounce hover:animate-none"
            size="lg"
          />
        </div>
      </div>
    </>
  )
}