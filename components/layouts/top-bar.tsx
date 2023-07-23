"use client"

import * as React from "react"
import { LanguageControl } from "@/components/language-control/language-control"
import Link from "@/components/link-control/link"
import { ThemeButton } from "@/components/theme-control/theme-button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu/navigation-menu"

export function TopBar() {
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList className="flex-none">
        <NavigationMenuItem>
          <Link href="/documentation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/articles" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Example</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/materials" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Stacks</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <LanguageControl className="flex-auto justify-end" />
        <ThemeButton className="flex-auto justify-end" />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
