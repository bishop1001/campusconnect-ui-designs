
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { 
  Shield, 
  Brain, 
  MapPin, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  ChevronRight,
  BarChart2,
  Clock,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  const features = [
    {
      icon: Shield,
      title: "Verified Students Only",
      description: "Connect exclusively with verified university students for safe, trusted transactions within your academic community."
    },
    {
      icon: Brain,
      title: "AI Price Advisor",
      description: "Get intelligent pricing suggestions based on real-time market data and item condition with our advanced AI technology."
    },
    {
      icon: MapPin,
      title: "Safe Campus Meetups",
      description: "Organize secure meetups in designated campus locations with built-in safety features and real-time notifications."
    },
    {
      icon: Users,
      title: "Skill Exchange Hub",
      description: "Trade services and skills with fellow students - from tutoring to design work, all on one seamless platform."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      university: "University of Dhaka",
      text: "CampusConnect revolutionized how I buy and sell on campus. The AI price advisor helped me sell my textbooks at the perfect price point!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Ahmed Rahman",
      university: "BUET",
      text: "As a student entrepreneur, CampusConnect has been invaluable. The verification system means I only deal with fellow students I can trust.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      name: "Maria Santos",
      university: "NSU",
      text: "The skill exchange feature allowed me to trade my graphic design services for math tutoring. It's transformed how I navigate university life!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: BarChart2,
      title: "Data-Driven Decisions",
      description: "Make informed selling and buying choices with our AI-powered market analytics and price recommendations."
    },
    {
      icon: Clock,
      title: "Time-Saving Efficiency",
      description: "Find what you need or sell what you don't in minutes, not hours, with our streamlined marketplace design."
    },
    {
      icon: Lock,
      title: "Enhanced Safety",
      description: "Our verification system and secure meetup protocols ensure your transactions are always safe and reliable."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5 -z-10"></div>
      <div className="absolute top-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)] -z-10"></div>

      <Navbar isAuthenticated={false} />
      
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-32 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
            
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 text-sm">
                🎓 For Students, By Students
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Redefining Campus Commerce
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                The exclusive AI-powered marketplace where university students buy, sell, and exchange with confidence. Verified identities, protected transactions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:translate-y-[-2px]"
                asChild
              >
                <Link to="/auth?tab=signup">
                  Join Now with University Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 transition-all duration-300"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% Free for Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>University Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>AI-powered Technology</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 -top-10 -right-10 w-full h-full bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-2xl transform rotate-6 scale-105"></div>
            <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">CC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Welcome to CampusConnect!</h3>
                    <p className="text-sm text-gray-600">The smarter way to trade on campus</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-blue-500 transition-all duration-200 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">MacBook Pro 2021</h4>
                          <p className="text-sm text-gray-600">Like New • Electronics</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">$1,200</p>
                          <p className="text-xs text-green-600">AI Suggested: $1,150-$1,250</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="transition-all duration-200 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Math Tutoring</h4>
                          <p className="text-sm text-gray-600">Service • Academic</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-emerald-600">$15/hr</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">4.9 (23 reviews)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="transition-all duration-200 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Course Materials Bundle</h4>
                          <p className="text-sm text-gray-600">Good • Textbooks</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">$85</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-emerald-600">3 Interested Buyers</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 right-20 w-12 h-12 bg-emerald-400/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="container py-20 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">10,000+</p>
            <p className="text-gray-600">Verified Students</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">25+</p>
            <p className="text-gray-600">Universities</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">30,000+</p>
            <p className="text-gray-600">Items Listed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">99%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="container relative">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-4 py-1">
              Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Designed for University Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the perfect marketplace experience tailored specifically for campus communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1">
              Why CampusConnect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Benefits That Matter</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just another marketplace. We're building a safer, smarter way for students to connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="h-10 w-10 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">
              Getting Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">How CampusConnect Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes buying and selling on campus simple, safe, and smart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400"></div>
            
            <div className="text-center relative">
              <div className="relative mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md z-10">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Register with your university email to join your campus marketplace community.</p>
            </div>
            
            <div className="text-center relative">
              <div className="relative mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md z-10">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse or List</h3>
              <p className="text-gray-600">Find what you need or list items and services you want to offer to fellow students.</p>
            </div>
            
            <div className="text-center relative">
              <div className="relative mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md z-10">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Trade</h3>
              <p className="text-gray-600">Chat with verified students, arrange secure meetups, and complete your transaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-4 py-1">
              Student Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Loved by Students Across The Country</h2>
            <p className="text-xl text-gray-600">
              Join thousands of students already trading safely on CampusConnect
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-100 shadow hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.university}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] opacity-10 -z-10 bg-cover bg-center"></div>
        
        <div className="container text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-1">
              Get Started Today
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Campus Experience?
            </h2>
            <p className="text-xl text-blue-100">
              Join the community of students building a smarter, safer marketplace for campus commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 font-medium shadow-lg hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link to="/auth?tab=signup">
                  Sign Up with University Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Features
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1">
              Questions Answered
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about CampusConnect
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">How do I verify my student status?</h3>
              <p className="text-gray-600">Simply sign up with your official university email. Our system automatically recognizes most university domains for instant verification.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Is CampusConnect free to use?</h3>
              <p className="text-gray-600">Yes! CampusConnect is completely free for all verified university students. No hidden fees, no commissions.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">How does the AI Price Advisor work?</h3>
              <p className="text-gray-600">Our AI analyzes thousands of similar items sold across universities to suggest optimal pricing based on condition, demand, and market trends.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I sell services as well as items?</h3>
              <p className="text-gray-600">Absolutely! CampusConnect is designed for both physical items and student services like tutoring, design work, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="font-semibold text-xl">CampusConnect</span>
              </div>
              <p className="text-gray-400">
                The smart marketplace for university students. Safe, verified, and AI-powered.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Universities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
