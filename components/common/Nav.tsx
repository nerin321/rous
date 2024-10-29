import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "FAQs", href: "#", current: false },
  { name: "Services", href: "#", current: false },
];

export default function Nav() {
  return (
    <Disclosure as="nav">
      <div>
        <div className="relative flex items-center justify-between h-16">
          <div className="sm:hidden absolute inset-y-0 left-0 flex items-center">
            {/* Mobile menu button*/}
            <DisclosureButton className="group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="sm:items-stretch sm:justify-between sm:w-1/2 flex items-center justify-center w-full">
            <div className="sm:ml-6 sm:block hidden">
              <div className="flex gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`
                      rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-shrink-0">
              <h3 className="text-3xl italic font-medium">
                <a href="">Rous</a>
              </h3>
            </div>
          </div>
          <div>
            <div className="sm:flex hidden gap-4">
              <button className="hover:border rounded-xl px-8 py-2 border-white">
                Sign Up
              </button>
              <button className="hover:border rounded-xl px-8 py-2 border-white">
                Sign in
              </button>
            </div>
            <Menu as="div" className="sm:hidden relative ml-3">
              <div>
                <MenuButton className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative flex text-sm bg-gray-800 rounded-full">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-8 h-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign In
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`
                    
                    block rounded-md px-3 py-2 text-base font-medium`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}