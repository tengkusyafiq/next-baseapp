"use client"
import { GlobeIcon } from "@radix-ui/react-icons"
import i18n from "i18n"
import { useParams, usePathname, useSearchParams } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu/navigation-menu"
import { cn, getHrefLanguageAction } from "@/utils/utils"

export const LanguageControl = ({ className }: { className?: string }) => {
  const { lang } = useParams()
  const pathname = usePathname()
  const langList = i18n.locales.filter((x) => x !== "default")
  const langLabel = i18n.localesLabel.filter((x) => x !== "Default")
  // get current language from cookies
  const currentLang = useSearchParams().get("lang") || lang || "en"

  return (
    <div className={className}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:invert-0" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                {langList.map((res) => (
                  <li key={res}>
                    <NavigationMenuLink
                      className={cn(
                        "flex items-center justify-between rounded-md p-3",
                        res === lang ? "bg-gray-100 dark:bg-gray-900" : "hover:bg-gray-100 dark:hover:bg-gray-900"
                      )}
                      href={getHrefLanguageAction(pathname, res)}
                      // use this if you want to use routing-based translation
                      // href={pathname.replace(`/${lang}/`, `/${res}/`)}
                    >
                      <span>{langLabel[langList.indexOf(res)]}</span>
                      {res === currentLang && (
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Current</span>
                      )}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
