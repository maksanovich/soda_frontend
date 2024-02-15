import { Fragment, useEffect, useState } from 'react'
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

import { subNavData } from '../../constants/navbarConstant';

import { dispatch, useSelector } from '../../store';
import { removeAuth } from '../../store/reducers/auth';

import Logo from './../../assets/img/logo-soda.svg';
import Avatar from '../../assets/img/user_avatar.jpg'
import userAvatar from '../../assets/img/user.png'

import { Link, useLocation } from 'react-router-dom';

const navigation = [
    {
        name: 'Features',
        href: '/',
        current: false
    },
    {
        name: 'Online Tools',
        href: '',
        current: false,
        subNav: true
    },
    {
        name: 'Pricing',
        href: '/pricing',
        current: false
    },
    {
        name: 'Support',
        href: '/support',
        current: false
    },
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

    const [isShowSubNav, setShowSubNav] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            const subNavDiv = Array.from(document.getElementsByClassName('subNavDiv'));
            const isClickInsideSubDiv = subNavDiv.some((div) => div.contains(event.target));

            if (!isClickInsideSubDiv) {
                setShowSubNav(false)
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        switch (location?.pathname) {
            case '/features':
                navigation[0].current = true;
                break;
            case '/tools':
                navigation[1].current = true;
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
        <>
            <Disclosure as="nav" className="bg-white w-full fixed z-50 shadow-md">
                {({ open }) => (
                    <>
                        <div className={`mx-auto bxl:max-w-[1600px] max-w-full px-3`}>
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                    <div className="flex flex-shrink-0 items-center cursor-pointer">
                                        <a href='/'>
                                            <img
                                                className="h-8 w-auto"
                                                src={Logo}
                                                alt="Logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="hidden md:ml-6 md:block w-full lg:flex lg:justify-center">
                                        <div className="flex space-x-1">
                                            {navigation.map((item) => (
                                                item?.subNav
                                                    ? < div
                                                        key={item.name}
                                                        className={
                                                            classNames(
                                                                item.current ? 'text-[#ff6166]' : 'text-gray-800',
                                                                isShowSubNav && 'text-[#ff6166]',
                                                                'px-1 py-2 text-md font-medium w-[125px] text-center hover:text-[#ff6166] cursor-pointer subNavDiv'
                                                            )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                        onClick={() => setShowSubNav(!isShowSubNav)}
                                                    >
                                                        {item.name}
                                                    </div>
                                                    :
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'text-[#ff6166]' : 'text-gray-800',
                                                            'px-1 py-2 text-md font-medium w-[100px] text-center hover:text-[#ff6166]'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                                        <div className='flex items-center justify-center sm:w-[110px]'>
                                            <img src={Avatar} alt='avatar' className={`${isLoggedIn ? 'hidden' : 'block'} hidden sm:block w-8 rounded-full mr-3 cursor-pointer`} />
                                            <Link to='signin' className={`${isLoggedIn ? 'hidden' : 'block'} text-gray-800`}>Sign In</Link>
                                        </div>

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
                        </div>

                        <Disclosure.Panel className="md:hidden">
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
                )
                }

            </Disclosure >

            <div id='subNavDiv' className={`${isShowSubNav ? 'block' : 'hidden'} z-10 w-full fixed top-[60px] text-black bg-gray-50 p-10 shadow-md subNavDiv`}>
                <div className='grid grid-flow-col'>
                    {
                        subNavData.map((item, index) => (
                            <div key={index}>
                                <h4 className='text-sm font-bold my-3'>{item.title}</h4>
                                <div>
                                    {
                                        item.data.map((data, index) => (
                                            <div key={index} className='flex items-center'>
                                                <a href={'/tools/' + data.url} className='my-1 text-sm ml-1 cursor-pointer hover:text-[#ff6166]'>{data.text}</a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
