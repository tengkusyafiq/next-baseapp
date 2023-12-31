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
    <NavigationMenu>
      <NavigationMenuList className="flex">
        <div className="left-0 flex">
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
        </div>
        <div className="right-0 flex justify-end">
          <LanguageControl />
          <ThemeButton />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
