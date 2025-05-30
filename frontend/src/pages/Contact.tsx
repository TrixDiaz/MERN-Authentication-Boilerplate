import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <Card className="text-center mb-8">
                    <CardHeader>
                        <CardTitle>
                            <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </CardDescription>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                                <CardDescription>
                                    Choose the most convenient way to reach us
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-sm text-muted-foreground">support@yourcompany.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Office</h3>
                                        <p className="text-sm text-muted-foreground">
                                            123 Business Street<br />
                                            Suite 100<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Business Hours</CardTitle>
                                <CardDescription>
                                    We're here to help during these hours
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Monday - Friday</span>
                                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and we'll get back to you shortly
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">
                                            First Name
                                        </label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">
                                            Last Name
                                        </label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input id="subject" placeholder="How can we help?" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Type your message here..."
                                        className="min-h-[150px]"
                                    />
                                </div>
                                <Button className="w-full" type="submit">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
