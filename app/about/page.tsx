import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Sun, Droplets, Heart, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/image.png"
            alt="shigruvedas Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Farm Story</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            shigruvedas represents our commitment to bringing you the purest, most nutritious moringa products straight
            from our organic farms. Every leaf tells a story of sustainable farming and wellness.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-green-200">
            <CardHeader>
              <Leaf className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-green-800">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To cultivate and deliver the finest organic moringa products while promoting sustainable farming
                practices that benefit both our customers' health and our planet's wellbeing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <Heart className="h-8 w-8 text-amber-600 mb-2" />
              <CardTitle className="text-green-800">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To be the leading provider of premium organic moringa products, making this miracle tree's benefits
                accessible to families worldwide while supporting local farming communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Farming Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Organic Farming Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <Sun className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-green-800">Natural Cultivation</CardTitle>
                <CardDescription>Grown under natural sunlight with organic methods</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our moringa trees are cultivated using traditional organic farming methods, ensuring no harmful
                  chemicals touch your food.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    No Pesticides
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Natural Fertilizers
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-green-800">Pure Water Source</CardTitle>
                <CardDescription>Irrigated with clean, natural water sources</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our farms use pure groundwater and rainwater harvesting systems to ensure the cleanest irrigation for
                  our moringa plants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Groundwater
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Rainwater Harvesting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-green-800">Hand Harvesting</CardTitle>
                <CardDescription>Carefully hand-picked for maximum freshness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Every leaf and drumstick is hand-picked by our experienced farmers to ensure only the best quality
                  reaches your table.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Hand-picked
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Quality Checked
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Farm Stats */}
        <div className="bg-white rounded-lg p-8 mb-16 border border-green-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Our Farm at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Acres of Organic Farm</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
              <div className="text-gray-600">Moringa Trees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Organic Farming</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Chemical-Free</div>
            </div>
          </div>
        </div>

        {/* Why Moringa */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Why Moringa is Called the Miracle Tree
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <Award className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-green-800">Nutritional Powerhouse</CardTitle>
                <CardDescription>Packed with essential vitamins and minerals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 7x more Vitamin C than oranges</li>
                  <li>• 4x more Calcium than milk</li>
                  <li>• 4x more Vitamin A than carrots</li>
                  <li>• 3x more Potassium than bananas</li>
                  <li>• 2x more Protein than yogurt</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <Users className="h-8 w-8 text-amber-500 mb-2" />
                <CardTitle className="text-green-800">Health Benefits</CardTitle>
                <CardDescription>Traditional and modern wellness applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Boosts immune system naturally</li>
                  <li>• Rich in antioxidants and anti-inflammatory compounds</li>
                  <li>• Supports healthy blood sugar levels</li>
                  <li>• Promotes healthy digestion</li>
                  <li>• Provides sustained natural energy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
