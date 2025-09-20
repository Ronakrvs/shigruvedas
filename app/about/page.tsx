import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Sun, Droplets, Heart, Users, Award, MapPin, Calendar, Sprout, Camera, Shield } from "lucide-react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import moringa from '@/public/moringa.png'
import moringa1 from '@/public/moringa7.jpeg'
import moringa2 from '@/public/moringa2.png'
import moringa3 from '@/public/morinag3.png'
import moringa4 from '@/public/moringa4.jpeg'
import moringa5 from '@/public/moringa6.jpeg'

export default function AboutPage() {
  // Structured Data for Farm/Agricultural Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Farm"],
    "name": "Shigruvedas Organic Moringa Farm",
    "description": "Certified organic moringa farm in Rajasthan  10000+ trees, and chemical-free farming experience. Premium moringa products direct from farm.",
    "url": "https://shigruvedas.com/about",
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
    "foundingDate": "2019",
    "knowsAbout": ["Organic Farming", "Moringa Cultivation", "Sustainable Agriculture", "Ayurvedic Plants"],
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Organic Moringa Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Organic Moringa Leaves",
            "category": "Agricultural Product"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Organic Moringa Powder",
            "category": "Health Supplement"
          }
        }
      ]
    }
  };

  // Farm gallery images data (you can replace these with your actual image paths)
  const farmGalleryImages = [
    {
      src: moringa2,
      alt: "Aerial view of Shigruvedas organic moringa farm in Udaipur Rajasthan",
      title: "Our Organic Farm"
    },
    {
      src: moringa1.src, 
      alt: "Healthy moringa trees plantation with 10000+ trees at Shigruvedas organic farm",
      title: "1000+ Healthy Moringa Trees"
    },
    {
      src: moringa,
      alt: "Farmers hand-picking fresh organic moringa leaves at Shigruvedas farm Rajasthan",
      title: "Hand-Picked with Care"
    },
    {
      src: moringa3,
      alt: "Organic farming methods using natural fertilizers at Shigruvedas moringa farm",
      title: "100% Organic Methods"
    },
    {
      src: moringa4.src,
      alt: "Traditional sun-drying process for moringa leaves at Shigruvedas organic processing unit",
      title: "Traditional Sun-Drying"
    },
    {
      src: moringa5.src,
      alt: "Quality control and testing of organic moringa products at Shigruvedas",
      title: "Quality Control Testing"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Organic Moringa Farm Story - Rajasthan | Shigruvedas</title>
        <meta 
          name="description" 
          content="Discover Shigruvedas organic moringa farm story in Udaipur, Rajasthan with 10000+ trees, 5+ years chemical-free farming. Visit our sustainable moringa cultivation process." 
        />
        <meta name="keywords" content="organic moringa farm Rajasthan, moringa cultivation Udaipur, sustainable farming, organic agriculture, moringa farm visit, chemical-free farming, Shigruvedas farm story" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shigruvedas.com/about" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Shigruvedas Organic Moringa Farm - 50+ Acres in Rajasthan" />
        <meta property="og:description" content="Visit our certified organic moringa farm in Udaipur, Rajasthan. 5+ years of sustainable farming with 1000+ healthy moringa trees." />
        <meta property="og:image" content="https://shigruvedas.com/images/farm-aerial-view.jpg" />
        <meta property="og:url" content="https://shigruvedas.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
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

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Image
              src="/images/image.png"
              alt="Shigruvedas Organic Moringa Farm Logo - Premium Moringa Products from Rajasthan"
              width={150}
              height={150}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Our Organic Moringa Farm Story
            </h1>
            <p className="text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Shigruvedas represents our commitment to bringing you the purest, most nutritious moringa products 
              straight from our 50+ acre certified organic farm in Udaipur, Rajasthan. Every leaf tells a story 
              of sustainable farming, traditional wisdom, and wellness.
            </p>
            
            {/* Location and Credentials */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-green-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Udaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Established 2019</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Certified Organic</span>
              </div>
            </div>
          </div>

          {/* Farm Gallery Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
              Our Organic Moringa Farm Gallery
            </h2>
            <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
              Take a virtual tour of our certified organic moringa farm in Rajasthan. From cultivation to harvest, 
              see how we grow the finest moringa products using traditional sustainable farming methods.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {farmGalleryImages.map((image, index) => (
                <Card key={index} className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      // onError={(e) => {
                      //   // Fallback image if the main image doesn't exist
                      //   e.target.src = "/images/image.png";
                      // }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <Camera className="h-5 w-5 mb-1" />
                        <p className="text-sm font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <WhatsAppButton
                message="Hi! I'm interested in visiting your organic moringa farm in Rajasthan. Can you provide details about farm tours?"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Schedule Farm Visit
              </WhatsAppButton>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Our Mission & Vision for Organic Agriculture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Leaf className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-green-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To cultivate and deliver the finest organic moringa products from our Rajasthan farm while 
                    promoting sustainable farming practices that benefit both our customers' health and our planet's 
                    wellbeing. We are committed to chemical-free agriculture, supporting local farming communities, 
                    and preserving traditional Ayurvedic knowledge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Heart className="h-8 w-8 text-amber-600 mb-2" />
                  <CardTitle className="text-green-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading provider of premium organic moringa products from Rajasthan, making this 
                    miracle tree's benefits accessible to families worldwide while supporting sustainable agriculture 
                    and empowering local farming communities. We envision a healthier world through organic nutrition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Farming Process */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
              Our Certified Organic Farming Process in Rajasthan
            </h2>
            <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto text-lg">
              Discover how we cultivate premium moringa using traditional organic methods, sustainable water management, 
              and chemical-free practices on our 50+ acre farm in Udaipur, Rajasthan.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <Sun className="h-8 w-8 text-yellow-500 mb-2" />
                  <CardTitle className="text-green-800">Natural Cultivation Methods</CardTitle>
                  <CardDescription>Traditional organic farming under Rajasthan's natural sunlight</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our 10000+ moringa trees are cultivated using time-tested organic farming methods passed down 
                    through generations in Rajasthan. We use only natural fertilizers, cow dung manure, and 
                    compost to ensure no harmful chemicals contaminate your moringa products.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      Zero Pesticides
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      Natural Fertilizers
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      Cow Dung Manure
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
  <CardHeader>
    <Droplets className="h-8 w-8 text-blue-500 mb-2" />
    <CardTitle className="text-green-800">Sustainable Water Management</CardTitle>
    <CardDescription>Pure groundwater, rainwater harvesting & drip irrigation</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-gray-600 mb-4 leading-relaxed">
      Our moringa farm practices sustainable water management with pure groundwater 
      sources, advanced rainwater harvesting systems, and an efficient drip irrigation 
      setup. This ensures precise, chemical-free irrigation while conserving precious 
      water resources in Rajasthan's arid climate.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
        Pure Groundwater
      </Badge>
      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
        Rainwater Harvesting
      </Badge>
      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
        Drip Irrigation
      </Badge>
      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
        Water Conservation
      </Badge>
    </div>
  </CardContent>
</Card>


              <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <Sprout className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-green-800">Expert Hand Harvesting</CardTitle>
                  <CardDescription>Experienced farmers ensure premium quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Every moringa leaf and drumstick is hand-picked by our experienced local farmers from 
                    Rajasthan at optimal maturity. Our quality control experts inspect each harvest to 
                    ensure only the finest, nutrient-rich products reach your table.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Hand-Picked Daily
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Quality Inspected
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Expert Farmers
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Farm Statistics */}
          <section className="mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
                Shigruvedas Organic Moringa Farm Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">7+</div>
                  <div className="text-lg font-semibold text-green-800">Acres of Certified Organic Farm</div>
                  <div className="text-sm text-gray-600 mt-1">Located in Udaipur, Rajasthan</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">10000+</div>
                  <div className="text-lg font-semibold text-green-800">Healthy Moringa Trees</div>
                  <div className="text-sm text-gray-600 mt-1">Producing fresh leaves & drumsticks</div>
                </div>
                {/* <div className="group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-lg font-semibold text-green-800">Years of Organic Farming</div>
                  <div className="text-sm text-gray-600 mt-1">Established since 2019</div>
                </div> */}
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-lg font-semibold text-green-800">Chemical-Free Guarantee</div>
                  <div className="text-sm text-gray-600 mt-1">Certified organic practices</div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Moringa Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Moringa is Called the "Miracle Tree" in Ayurveda
              </h2>
              <p className="text-center text-xl mb-12 opacity-90 max-w-4xl mx-auto">
                Discover the incredible nutritional and health benefits that have made moringa a treasured superfood 
                in traditional Ayurvedic medicine for over 4000 years. Our Rajasthan-grown organic moringa delivers maximum potency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <Award className="h-8 w-8 text-green-500 mb-2" />
                    <CardTitle className="text-green-800">Exceptional Nutritional Profile</CardTitle>
                    <CardDescription>Nature's most complete superfood from our organic farm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                        <span><strong>7x more Vitamin C than oranges</strong> - Powerful immune system support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                        <span><strong>4x more Calcium than milk</strong> - Strong bones and teeth naturally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                        <span><strong>4x more Vitamin A than carrots</strong> - Enhanced vision and eye health</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                        <span><strong>3x more Potassium than bananas</strong> - Heart health and blood pressure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">✓</Badge>
                        <span><strong>2x more Protein than yogurt</strong> - Complete amino acid profile</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <Users className="h-8 w-8 text-amber-500 mb-2" />
                    <CardTitle className="text-green-800">Traditional Ayurvedic Benefits</CardTitle>
                    <CardDescription>Time-tested wellness applications for modern health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                        <span><strong>Natural immune system booster</strong> - Rich antioxidants and vitamins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                        <span><strong>Anti-inflammatory compounds</strong> - Traditional pain relief properties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                        <span><strong>Blood sugar level support</strong> - Used in traditional diabetes management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                        <span><strong>Digestive health promotion</strong> - High fiber and enzyme content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 mt-1">✓</Badge>
                        <span><strong>Sustained natural energy</strong> - Without caffeine crashes or jitters</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
                Experience Premium Rajasthan Moringa
              </h2>
              <p className="text-xl text-green-600 mb-8 max-w-3xl mx-auto">
                Ready to experience the finest organic moringa products directly from our certified farm in Rajasthan? 
                Contact us for fresh orders, bulk purchases, or to schedule a visit to our sustainable moringa farm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <Link href="/contact">
                    Order Fresh Moringa Products
                  </Link>
                </Button>
                <WhatsAppButton
                  message="Hi! I'd like to know more about your organic moringa farm in Rajasthan and visit your facilities. Can you provide details?"
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-white hover:bg-green-50"
                >
                  Schedule Farm Visit
                </WhatsAppButton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}