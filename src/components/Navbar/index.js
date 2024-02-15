import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    ArrowRightOnRectangleIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'
import { IoSearch } from "react-icons/io5";


import { dispatch, useSelector } from '../../store';
import { removeAuth } from '../../store/reducers/auth';

import Logo from './../../assets/img/logo-soda.svg';
import Avatar from '../../assets/img/user_avatar.jpg'
import userAvatar from '../../assets/img/user.png'

import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Features', href: '/', current: false },
    { name: 'Online Tools', href: '/onlineTools', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Support', href: '/support', current: false },
]

const userNavigation = [
    { name: 'Profile', href: '/profile', icon: UserCircleIcon },
    { name: 'Admin', href: '/admin', icon: ShieldCheckIcon },
    { name: 'Info', href: '/info', icon: InformationCircleIcon },
    { name: 'Logout', href: '#', icon: ArrowRightOnRectangleIcon, function: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const location = useLocation();
    const { isLoggedIn, user } = useSelector((state) => state.auth);

    useEffect(() => {
        switch (location?.pathname) {
            case '/features':
                navigation[0].current = true;
                break;
            case '/pricing':
                navigation[2].current = true;
                break;
            case '/support':
                navigation[3].current = true;
                break;
            default:
                break;
        }
    }, [])

    const onClickLogout = () => {
        dispatch(removeAuth());
    }

    return (
        <Disclosure as="nav" className="bg-white w-full fixed z-50 shadow-md">
            {({ open }) => (
                <>
                    <div className={`mx-auto bxl:max-w-[1600px] max-w-full px-3`}>
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center cursor-pointer">
                                    <a href='/'>
                                        <img
                                            className="h-8 w-auto"
                                            src={Logo}
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:ml-6 sm:block w-full lg:flex lg:justify-center">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-[#ff6166]' : 'text-gray-800',
                                                    'px-3 py-2 text-md font-medium w-[125px] text-center'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <img src={Avatar} alt='avatar' className={`${isLoggedIn ? 'hidden' : 'block'} w-8 rounded-full mr-3 cursor-pointer`} />
                                <Link to='signin' className={`${isLoggedIn ? 'hidden' : 'block'} text-gray-800`}>Sign In</Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className={`${!isLoggedIn ? 'hidden' : 'block'} relative ml-3`}>
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={userAvatar}
                                                alt="User Avatar"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (

                                                        <a
                                                            onClick={item.function ? onClickLogout : null}
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'px-4 py-2 text-sm text-gray-700 flex items-center'
                                                            )}
                                                        >
                                                            <item.icon className='w-5 h-5 mr-3' />
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
