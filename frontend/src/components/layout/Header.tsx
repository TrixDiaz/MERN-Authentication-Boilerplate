"use client"

import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose
} from "../../components/ui/drawer"
import {
    NavigationMenu,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "../../components/ui/navigation-menu"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { Button } from "../../components/ui/button"
import {
    Menu,
    Slack,
    Home,
    Users,
    Mail,
    Settings,
    Code,
    Palette,
    Smartphone,
    X
} from "lucide-react"
import { useState } from "react"

function Header() {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)

    const services = [
        {
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies",
            icon: <Code className="w-4 h-4" />
        },
        {
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces that enhance user experience",
            icon: <Palette className="w-4 h-4" />
        },
        {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android",
            icon: <Smartphone className="w-4 h-4" />
        },
        {
            title: "Consulting",
            description: "Strategic technology consulting to help grow your business",
            icon: <Settings className="w-4 h-4" />
        }
    ]

    const navigationItems = [
        { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
        { name: "About", href: "/about", icon: <Users className="w-4 h-4" /> },
        { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> }
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            {isDesktop ? (
                // Desktop Header 
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                                <Slack className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                YourBrand
                            </span>
                        </div>

                        {/* Navigation */}
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="/"
                                        className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 px-4 py-2 rounded-lg font-medium"
                                    >
                                        <span>Home</span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 px-4 py-2 rounded-lg font-medium">
                                        <span>Services</span>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[500px] lg:w-[600px]">
                                            <div className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-purple-500/10 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/services"
                                                    >
                                                        <div className="mb-2 text-lg font-medium">
                                                            Our Services
                                                        </div>
                                                        <p className="text-sm leading-tight text-gray-600">
                                                            Comprehensive solutions for your digital needs
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {services.map((service, index) => (
                                                    <NavigationMenuLink key={index} asChild>
                                                        <a
                                                            href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group"
                                                        >
                                                            <div className="flex items-center space-x-2 text-sm font-medium leading-none">
                                                                <span className="text-blue-600 group-hover:text-purple-600 transition-colors">
                                                                    {service.icon}
                                                                </span>
                                                                <span>{service.title}</span>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                                                {service.description}
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="/about"
                                        className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 px-4 py-2 rounded-lg font-medium"
                                    >
                                        <span>About</span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="/contact"
                                        className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 px-4 py-2 rounded-lg font-medium"
                                    >
                                        <span>Contact</span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-3">
                            <Button variant="outline" className="hidden md:inline-flex">
                                Login
                            </Button>
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                // Mobile Header 
                <div className="flex items-center justify-between px-4 h-16">
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                            <Slack className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            YourBrand
                        </span>
                    </div>

                    {/* Mobile Menu Drawer */}
                    <Drawer direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon" className="relative">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="h-full w-[300px] fixed right-0 top-0">
                            <DrawerHeader className="text-left border-b">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                                            <Slack className="w-5 h-5 text-white" />
                                        </div>
                                        <DrawerTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            YourBrand
                                        </DrawerTitle>
                                    </div>
                                    <DrawerClose asChild>
                                        <Button variant="outline" size="icon">
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </DrawerClose>
                                </div>
                                <DrawerDescription>
                                    Navigate through our services and get in touch
                                </DrawerDescription>
                            </DrawerHeader>

                            {/* Mobile Navigation Links */}
                            <div className="flex-1 py-6">
                                <nav className="space-y-2 px-4">
                                    {navigationItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                                            onClick={() => setIsDrawerOpen(false)}
                                        >
                                            <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                                                {item.icon}
                                            </span>
                                            <span className="font-medium">{item.name}</span>
                                        </a>
                                    ))}

                                    {/* Services Section */}
                                    <div className="pt-4">
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            Services
                                        </div>
                                        {services.map((service, index) => (
                                            <a
                                                key={index}
                                                href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                className="flex items-start space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                                                onClick={() => setIsDrawerOpen(false)}
                                            >
                                                <span className="text-gray-600 group-hover:text-blue-600 transition-colors mt-0.5">
                                                    {service.icon}
                                                </span>
                                                <div>
                                                    <div className="font-medium text-sm">{service.title}</div>
                                                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            {/* Mobile CTA Buttons */}
                            <DrawerFooter className="border-t">
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full" onClick={() => setIsDrawerOpen(false)}>
                                        Login
                                    </Button>
                                    <Button
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            )}
        </header>
    )
}

export default Header