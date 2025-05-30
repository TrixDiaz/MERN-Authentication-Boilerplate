import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react"

function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Modern Asset Management
                            <span className="text-primary"> System</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                            Streamline your asset management process with our comprehensive solution.
                            Track, monitor, and optimize your assets in real-time.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="gap-2">
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                                <p className="text-muted-foreground">
                                    Get instant insights into your asset performance and utilization
                                </p>
                            </div>
                        </Card>
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <Shield className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Secure Management</h3>
                                <p className="text-muted-foreground">
                                    Enterprise-grade security to protect your valuable assets
                                </p>
                            </div>
                        </Card>
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <Users className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                                <p className="text-muted-foreground">
                                    Seamless collaboration across departments and teams
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Transform Your Asset Management?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of organizations that trust our platform for their asset management needs.
                    </p>
                    <Button size="lg" className="gap-2">
                        Start Free Trial
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Home
