import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

function About() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Mission Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                        <CardDescription>What drives us forward</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground">
                            We are dedicated to creating innovative solutions that empower businesses and individuals
                            to achieve their goals through cutting-edge technology and exceptional user experiences.
                        </p>
                    </CardContent>
                </Card>

                {/* Vision Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                        <CardDescription>Where we're heading</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground">
                            To be at the forefront of technological innovation, setting new standards in user
                            experience and digital transformation while maintaining the highest quality standards.
                        </p>
                    </CardContent>
                </Card>

                {/* Values Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Our Values</CardTitle>
                        <CardDescription>What we stand for</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Innovation</h4>
                                <p className="text-sm text-muted-foreground">
                                    Constantly pushing boundaries and exploring new possibilities
                                </p>
                            </div>
                            <Separator />
                            <div>
                                <h4 className="font-semibold">Quality</h4>
                                <p className="text-sm text-muted-foreground">
                                    Delivering excellence in everything we do
                                </p>
                            </div>
                            <Separator />
                            <div>
                                <h4 className="font-semibold">Integrity</h4>
                                <p className="text-sm text-muted-foreground">
                                    Maintaining honesty and transparency in all our dealings
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Team Section */}
            <div className="mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Team</CardTitle>
                        <CardDescription>The people behind our success</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-2">
                                <h3 className="font-semibold">Leadership</h3>
                                <p className="text-sm text-muted-foreground">
                                    Experienced professionals guiding our strategic direction
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold">Development</h3>
                                <p className="text-sm text-muted-foreground">
                                    Skilled developers crafting innovative solutions
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold">Design</h3>
                                <p className="text-sm text-muted-foreground">
                                    Creative minds shaping beautiful user experiences
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default About
