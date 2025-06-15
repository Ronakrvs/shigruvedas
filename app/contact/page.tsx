import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Clock, Truck, Leaf } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/image.png"
            alt="shigruvedas Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Order Fresh Moringa</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Ready to experience the power of organic moringa? Place your order or inquire about bulk purchases today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Place Your Order/Inquiry
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you with pricing and availability.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea id="address" placeholder="Complete address for delivery..." className="min-h-[80px]" />
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Products Needed *</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fresh-leaves" />
                    <Label htmlFor="fresh-leaves" className="flex-1">
                      Fresh Moringa Leaves
                    </Label>
                    <Input placeholder="Quantity" className="w-24" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="powder" />
                    <Label htmlFor="powder" className="flex-1">
                      Moringa Powder
                    </Label>
                    <Input placeholder="Quantity" className="w-24" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="drumsticks" />
                    <Label htmlFor="drumsticks" className="flex-1">
                      Fresh Drumsticks
                    </Label>
                    <Input placeholder="Quantity" className="w-24" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-type">Order Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Use</SelectItem>
                    <SelectItem value="bulk">Bulk Purchase</SelectItem>
                    <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                    <SelectItem value="retail">Retail Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea
                  id="message"
                  placeholder="Any specific requirements, delivery preferences, or questions..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to receive updates about my order and promotional offers from shigruvedas
                </Label>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">Submit Order Request</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Get in Touch
                </CardTitle>
                <CardDescription>Multiple ways to reach us for orders and inquiries.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Orders</h3>
                    <p className="text-gray-600">shigruvedas@gmail.com</p>
                    {/* <p className="text-gray-600">sales@shigruvedas.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone Orders</h3>
                    <p className="text-gray-600">+91 7877255595 (Orders)</p>
                    {/* <p className="text-gray-600">+91 87654 32109 (Bulk Inquiry)</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Shigruvedas Agro Export</p>
                    {/* <p className="text-gray-600">Village Wellness Road</p> */}
                    <p className="text-gray-600">248, A-Block,hiran magri,saweena,sector 9,udaipur, raj 313002</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Order Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
                    {/* <p className="text-gray-600">Harvest Season: Extended Hours</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bulk Purchase Info */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Bulk Purchase Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Special wholesale pricing for bulk orders
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Free delivery for orders above ₹5,000
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom packaging options available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Regular supply contracts for businesses
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Quality certificates and lab reports
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Request Bulk Pricing</Button>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-green-800">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Local Delivery:</strong> Same day for orders before 2 PM
                  </p>
                  <p>
                    <strong>Regional Delivery:</strong> 1-2 business days
                  </p>
                  <p>
                    <strong>Pan-India:</strong> 2-5 business days via courier
                  </p>
                  {/* <p>
                    <strong>Fresh Products:</strong> Packed with ice packs for freshness
                  </p> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
