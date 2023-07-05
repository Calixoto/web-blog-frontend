"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
export const NavCategories = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="hover:text-blue-600 font-medium text-lg group flex">
            Categorias
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion-from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-[calc(100%+0.5rem)] left-0 sm:w-auto rounded-md ring-1 ring-gray-900">
            <ul className="one grid list-none  rounded-md ring-1 ring-gray-900 overflow-hidden">
              <li className="row-span-3 grid transition-colors hover:bg-gray-900 p-3 hover:text-blue-600 font-medium text-lg">
                <Link href="/prompts">Prompts</Link>
              </li>
              <li className="row-span-3 grid transition-colors hover:bg-gray-900 p-3 hover:text-blue-600 font-medium text-lg">
                <Link href="/tools">IA Tools</Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
