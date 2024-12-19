import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import React from 'react'

const services = [
  {
    category: "Exam Assistance Services",
    href: "/exam-assistance",
    subcategories: [
      { name: "Timed Test Support", href: "/exam-assistance/timed-test-support" },
      { name: "Live Exam Support", href: "/exam-assistance/online-exam-help" },
      { name: "Mock Exams & Practice Tests", href: "/exam-assistance/practice-test-preparation" },
    ],
  },
  {
    category: "Subject-Specific Services",
    href: "/subject-specific",
    subcategories: [
      { name: "Math Exam Help", href: "/subject-specific/math-exam-help" },
      { name: "Science Exam Help", href: "/subject-specific/science-exam-help" },
      { name: "Engineering Exam Help", href: "/subject-specific/engineering-exam-help" },
      { name: "Law Exam Help", href: "/subject-specific/law-exam-help" },
      { name: "Business & Finance Exam Help", href: "/subject-specific/business-finance-exam-help" },
      { name: "Humanities Exam Help", href: "/subject-specific/humanities-exam-help" },
    ],
  },
  {
    category: "Assignment Help Services",
    href: "/assignment-help",
    subcategories: [
      { name: "Essay & Paper Writing Help", href: "/assignment-help/essay-paper-writing" },
      { name: "Project Support", href: "/assignment-help/project-support" },
    ],
  },
  {
    category: "Test Preparation Packages",
    href: "/test-preparation",
    subcategories: [
      { name: "Personalized Study Plans", href: "/test-preparation/personalized-study-plans" },
      { name: "One-on-One Tutoring", href: "/test-preparation/one-on-one-tutoring" },
    ],
  },
  {
    category: "Emergency Exam Support",
    href: "/emergency-exam-support",
    subcategories: [
      { name: "Last-Minute Exam Help", href: "/emergency-exam-support/last-minute-help" },
      { name: "Overnight Preparation Assistance", href: "/emergency-exam-support/overnight-preparation" },
    ],
  },
]

function ServicesMegaMenu() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Services 
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex justify-center p-4 lg:w-[800px]">
              <div className="w-1/3 border-r pr-4">
                {services.map((service) => (
                  <NavigationMenuLink
                    key={service.category}
                    asChild
                  >
                    <Link
                      href={service.href}
                      onMouseEnter={() => setActiveCategory(service.category)}
                      className={cn(
                        "flex items-center w-full text-left px-4 py-2 text-sm rounded-md transition-colors",
                        activeCategory === service.category
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {service.category}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
              <div className="w-2/3 pl-4">
                {activeCategory && (
                  <div>
                    <h3 className="font-medium mb-2">{activeCategory}</h3>
                    <ul className="space-y-1">
                      {services
                        .find((s) => s.category === activeCategory)
                        ?.subcategories.map((subcat) => (
                          <li key={subcat.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subcat.href}
                                className="block rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                              >
                                {subcat.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default ServicesMegaMenu