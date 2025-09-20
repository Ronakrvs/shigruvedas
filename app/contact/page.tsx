"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Truck, Leaf, Shield, Star, CheckCircle, MessageCircle } from "lucide-react"
import Image from "next/image"
import Head from "next/head"
import { useRef, useState } from "react"
// import SuccessModal from "./successModal"
import WhatsAppButton from "@/components/whatsapp-button"
import SuccessModal from "@/components/successModal"

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  
  // Structured data for contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Shigruvedas Organic Moringa Farm",
      "description": "Order premium organic moringa products directly from our 50+ acre certified farm in Rajasthan. Fresh moringa leaves, powder, drumsticks with free delivery.",
      "url": "https://shigruvedas.com/contact",
      "telephone": "+91-7877255595",
      "email": "shigruvedas@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "248, A-Block, hiran magri, saweena, sector 9",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "313002",
        "addressCountry": "IN"
      },
      "openingHours": [
        "Mo-Sa 08:00-19:00",
        "Su 09:00-17:00"
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Submit to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })
      
      setIsModalOpen(true)
      formRef.current?.reset()
    } catch (error) {
      alert("Form submission failed. Please try again or contact us directly.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Order Fresh Organic Moringa Online - Direct from Rajasthan Farm | Shigruvedas</title>
        <meta 
          name="description" 
          content="Order premium organic moringa leaves, powder & drumsticks online. Direct from our certified farm in Rajasthan. Free delivery, bulk orders welcome. Call +91 7877255595" 
        />
        <meta name="keywords" content="order moringa online, buy organic moringa, moringa delivery India, bulk moringa order, fresh moringa leaves online, moringa powder order, contact shigruvedas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shigruvedas.com/contact" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Order Fresh Organic Moringa Online - Shigruvedas Rajasthan Farm" />
        <meta property="og:description" content="Order premium organic moringa products directly from our certified farm in Rajasthan. Fresh delivery across India." />
        <meta property="og:image" content="https://shigruvedas.com/images/fresh-moringa-order.jpg" />
        <meta property="og:url" content="https://shigruvedas.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <Image
              src="/images/image.png"
              alt="Shigruvedas Organic Moringa Farm - Order Fresh Moringa Products Online"
              width={120}
              height={120}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Order Fresh Organic Moringa Online
            </h1>
            <p className="text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Ready to experience the power of premium organic moringa from our 50+ acre certified farm in Rajasthan? 
              Place your order for fresh moringa leaves, powder, and drumsticks with free delivery across India!
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1">
                <Shield className="h-3 w-3 mr-1" />
                100% Organic Certified
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                <Truck className="h-3 w-3 mr-1" />
                Free Delivery Above ₹5000
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 px-3 py-1">
                <Star className="h-3 w-3 mr-1" />
                5+ Years Trusted Quality
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Order Form */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center text-xl">
                  <Leaf className="h-5 w-5 mr-2" />
                  Place Your Moringa Order/Inquiry
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 2 hours with pricing, 
                  availability, and delivery details from our Rajasthan farm.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  ref={formRef}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        placeholder="Your first name" 
                        required 
                        className="border-green-200 focus:border-green-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Your last name" 
                        required 
                        className="border-green-200 focus:border-green-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (WhatsApp) *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required 
                      className="border-green-200 focus:border-green-400"
                    />
                    <p className="text-xs text-gray-500">We'll send order updates via WhatsApp</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City/District *</Label>
                    <Input 
                      id="city" 
                      name="city"
                      placeholder="e.g., Mumbai, Delhi, Bangalore"
                      required
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Delivery Address</Label>
                    <Textarea 
                      id="address" 
                      name="address" 
                      placeholder="House/Flat No., Street, Area, Landmark, Pincode..." 
                      className="min-h-[80px] border-green-200 focus:border-green-400" 
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Select Moringa Products *</Label>
                    <div className="space-y-4 bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div className="flex items-center space-x-3">
                          <Checkbox id="fresh-leaves" name="freshLeaves" />
                          <div>
                            <Label htmlFor="fresh-leaves" className="font-medium">Fresh Organic Moringa Leaves</Label>
                            <p className="text-sm text-gray-600">Hand-picked daily, rich in 90+ nutrients</p>
                          </div>
                        </div>
                        <Input name="freshLeavesQty" placeholder="Qty (kg)" className="w-20 text-center" />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div className="flex items-center space-x-3">
                          <Checkbox id="powder" name="powder" />
                          <div>
                            <Label htmlFor="powder" className="font-medium">Organic Moringa Leaf Powder</Label>
                            <p className="text-sm text-gray-600">Sun-dried & stone-ground, long shelf life</p>
                          </div>
                        </div>
                        <Input name="powderQty" placeholder="Qty (gm)" className="w-20 text-center" />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div className="flex items-center space-x-3">
                          <Checkbox id="drumsticks" name="drumsticks" />
                          <div>
                            <Label htmlFor="drumsticks" className="font-medium">Fresh Moringa Drumsticks</Label>
                            <p className="text-sm text-gray-600">Young tender pods for cooking</p>
                          </div>
                        </div>
                        <Input name="drumsticksQty" placeholder="Qty (kg)" className="w-20 text-center" />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white rounded border">
                        <div className="flex items-center space-x-3">
                          <Checkbox id="seeds" name="seeds" />
                          <div>
                            <Label htmlFor="seeds" className="font-medium">Moringa Seeds</Label>
                            <p className="text-sm text-gray-600">For cultivation or direct consumption</p>
                          </div>
                        </div>
                        <Input name="seedsQty" placeholder="Qty" className="w-20 text-center" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="order-type">Order Type *</Label>
                    <Select name="orderType" required>
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select order type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal/Family Use</SelectItem>
                        <SelectItem value="bulk">Bulk Purchase (5kg+)</SelectItem>
                        <SelectItem value="wholesale">Wholesale/Business Inquiry</SelectItem>
                        <SelectItem value="retail">Retail Store Partnership</SelectItem>
                        <SelectItem value="export">Export Inquiry</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Hotel Supply</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery">Preferred Delivery Time</Label>
                    <Select name="deliveryTime">
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select delivery preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As Soon As Possible</SelectItem>
                        <SelectItem value="morning">Morning (9AM-12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                        <SelectItem value="weekend">Weekend Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requirements/Questions</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Specific packaging needs, recurring orders, custom processing, certifications required, etc..."
                      className="min-h-[100px] border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" name="terms" />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to receive order updates, delivery notifications, and occasional promotional offers 
                      from Shigruvedas via WhatsApp, SMS, and email
                    </Label>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {isSubmitting ? "Submitting..." : "Submit Order Request"}
                    </Button>
                    <WhatsAppButton
                      message="Hi! I want to place an order for organic moringa products from your Rajasthan farm. Can you help me with pricing and delivery?"
                      className="w-full bg-green-500 hover:bg-green-600 py-3"
                      size="lg"
                    >
                      {/* <MessageCircle className="h-5 w-5 mr-2" /> */}
                      Quick Order via WhatsApp
                    </WhatsAppButton>
                  </div>
                </form>
              </CardContent>
            </Card>

            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center text-xl">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Shigruvedas Organic Farm
                  </CardTitle>
                  <CardDescription className="text-base">
                    Multiple ways to reach us for orders, inquiries, and farm visits. 
                    We respond within 2 hours during business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 p-3 bg-green-50 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800">Email Orders & Inquiries</h3>
                      <p className="text-gray-700 mb-1">shigruvedas@gmail.com</p>
                      <p className="text-sm text-gray-600">Response time: Within 2-4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800">Direct Phone & WhatsApp Orders</h3>
                      <p className="text-gray-700 mb-1">+91 7877255595</p>
                      <p className="text-sm text-gray-600">Available for orders, bulk inquiries, farm visits</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 bg-amber-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800">Farm Location & Office</h3>
                      <p className="text-gray-700 font-medium">Shigruvedas Agro Export</p>
                      <p className="text-gray-700">248, A-Block, Hiran Magri</p>
                      <p className="text-gray-700">Saweena, Sector 9</p>
                      <p className="text-gray-700">Udaipur, Rajasthan 313002, India</p>
                      <p className="text-sm text-gray-600 mt-1">Farm visits welcome with appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 bg-emerald-50 rounded-lg">
                    <Clock className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800">Business Hours</h3>
                      <p className="text-gray-700">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                      <p className="text-gray-700">Sunday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-gray-600 mt-1">Extended hours during harvest season (Oct-Mar)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Bulk Purchase Benefits */}
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center text-xl">
                    <Truck className="h-5 w-5 mr-2" />
                    Bulk Order & Wholesale Benefits
                  </CardTitle>
                  <CardDescription className="text-base">
                    Special advantages for businesses, retailers, and large quantity orders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Wholesale Pricing Tiers</p>
                        <p className="text-sm text-gray-600">Up to 30% discount on bulk orders above 25kg</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Free Pan-India Delivery</p>
                        <p className="text-sm text-gray-600">No shipping charges for orders above ₹5,000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Custom Packaging & Branding</p>
                        <p className="text-sm text-gray-600">Private labeling available for retailers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Regular Supply Contracts</p>
                        <p className="text-sm text-gray-600">Monthly/quarterly delivery agreements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Quality Certifications</p>
                        <p className="text-sm text-gray-600">Organic certificates, lab reports, FSSAI compliance</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-amber-200">
                    <WhatsAppButton
                      message="Hi! I'm interested in bulk/wholesale purchase of organic moringa products from your Rajasthan farm. Please share pricing tiers and minimum order quantities."
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      Get Bulk Pricing Quote
                    </WhatsAppButton>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Delivery Information */}
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center text-xl">
                    <Truck className="h-5 w-5 mr-2" />
                    Delivery & Shipping Information
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fast, secure delivery across India with proper packaging for freshness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-green-800 mb-2">Rajasthan & Nearby States</h4>
                        <p className="text-sm text-gray-700 mb-1"><strong>Same/Next day delivery</strong></p>
                        <p className="text-xs text-gray-600">Orders before 2 PM for same-day delivery in Udaipur</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-green-800 mb-2">Metro Cities</h4>
                        <p className="text-sm text-gray-700 mb-1"><strong>1-2 business days</strong></p>
                        <p className="text-xs text-gray-600">Delhi, Mumbai, Bangalore, Chennai, Pune, Ahmedabad</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-green-800 mb-2">All India Delivery</h4>
                        <p className="text-sm text-gray-700 mb-1"><strong>2-5 business days</strong></p>
                        <p className="text-xs text-gray-600">Via professional courier services</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-green-800 mb-2">Fresh Product Packaging</h4>
                        <p className="text-sm text-gray-700 mb-1"><strong>Temperature controlled</strong></p>
                        <p className="text-xs text-gray-600">Ice packs & insulated boxes for fresh products</p>
                      </div>
                    </div>
                    
                    {/* <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Delivery Charges</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Free delivery</strong> for orders above ₹5,000</li>
                        <li>• <strong>₹150-300</strong> for orders below ₹5,000 (distance-based)</li>
                        <li>• <strong>Express delivery</strong> available at additional cost</li>
                      </ul>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}