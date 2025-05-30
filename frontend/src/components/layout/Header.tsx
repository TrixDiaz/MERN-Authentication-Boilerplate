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
    X,
    Lock
} from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "../common/ThemeToggle"
import { Link } from "react-router-dom"


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
        <header className="sticky top-4 z-50 bg-background max-w-7xl mx-auto rounded-lg border">
            {isDesktop ? (
                // Desktop Header 
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-neutral-900 rounded-lg">
                                <Slack className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                BrandName
                            </span>
                        </div>

                        {/* Navigation */}
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to="/" className="flex items-center space-x-2 hover:bg-accent transition-colors duration-200 px-4 py-2 rounded-lg font-medium">
                                            <span>Home</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="flex items-center space-x-2 hover:bg-accent transition-colors duration-200 px-4 py-2 rounded-lg font-medium bg-transparent">
                                        <span>Services</span>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[500px] lg:w-[600px]">
                                            <div className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-accent p-6 no-underline outline-none focus:shadow-md"
                                                        to="/services"
                                                    >
                                                        <div className="mb-2 text-lg font-medium">
                                                            Our Services
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Comprehensive solutions for your digital needs
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {services.map((service, index) => (
                                                    <NavigationMenuLink key={index} asChild>
                                                        <Link
                                                            to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent group"
                                                        >
                                                            <div className="flex items-center space-x-2 text-sm font-medium leading-none">
                                                                <span className="text-foreground group-hover:text-accent-foreground transition-colors">
                                                                    {service.icon}
                                                                </span>
                                                                <span>{service.title}</span>
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                {service.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to="/about" className="flex items-center space-x-2 hover:bg-accent transition-colors duration-200 px-4 py-2 rounded-lg font-medium">
                                            <span>About</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to="/contact" className="flex items-center space-x-2 hover:bg-accent transition-colors duration-200 px-4 py-2 rounded-lg font-medium">
                                            <span>Contact</span>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-3">
                            <Link to='login'>
                                <Button variant="outline" className="hidden md:inline-flex">
                                    Login
                                </Button>
                            </Link>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            ) : (
                // Mobile Header 
                <div className="flex items-center justify-between px-4 h-16">
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-neutral-900 rounded-lg">
                            <Slack className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-foreground">
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
                                        <div className="p-2 bg-neutral-900 rounded-lg">
                                            <Slack className="w-5 h-5 text-white" />
                                        </div>
                                        <DrawerTitle className="text-foreground">
                                            YourBrand
                                        </DrawerTitle>
                                    </div>
                                    <div className="space-x-2">
                                        <ModeToggle />
                                        <DrawerClose asChild>
                                            <Button variant="outline" size="icon">
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </DrawerClose>
                                    </div>
                                </div>
                                <DrawerDescription>
                                    Navigate through our services and get in touch
                                </DrawerDescription>
                            </DrawerHeader>

                            {/* Mobile Navigation Links */}
                            <div className="flex-1 py-6">
                                <nav className="space-y-2 px-4">
                                    {navigationItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.href}
                                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors duration-200 group"
                                            onClick={() => setIsDrawerOpen(false)}
                                        >
                                            <span className="text-muted-foreground group-hover:text-accent-foreground transition-colors">
                                                {item.icon}
                                            </span>
                                            <span className="font-medium">{item.name}</span>
                                        </Link>
                                    ))}

                                    {/* Services Section */}
                                    <div className="pt-4">
                                        <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                            Services
                                        </div>
                                        {services.map((service, index) => (
                                            <a
                                                key={index}
                                                href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                                className="flex items-start space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors duration-200 group"
                                                onClick={() => setIsDrawerOpen(false)}
                                            >
                                                <span className="text-muted-foreground group-hover:text-accent-foreground transition-colors mt-0.5">
                                                    {service.icon}
                                                </span>
                                                <div>
                                                    <div className="font-medium text-sm">{service.title}</div>
                                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
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