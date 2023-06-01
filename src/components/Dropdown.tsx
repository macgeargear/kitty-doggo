import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function Dropdown() {
  return (
    <Menu as="div" className="z-999 relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Options
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        // as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute right-0 mt-2 w-[100px] origin-top-right   rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" p-2">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-pink-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  Cats
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-pink-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  Dogs
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
