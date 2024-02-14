import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/img/logo-soda.svg';
import PDFAssociation from '../../assets/img/PDFAssociationLogo.webp';
import WinterBlack from '../../assets/img/leader-winter-black.svg';

import {
    Resources,
    SocialIcons,
    ConvertTools
} from '../../constants/footerConstant';

const SubTool = ({ item }) => {
    return (
        <div className='p-3'>
            <h2 className='font-bold text-lg my-3'>{item.title}</h2>
            <div>
                {
                    item?.data &&
                    item.data.map((data, index) => (
                        <h5 key={index} className='cursor-pointer hover:text-[#ff6166] text-gray-600'> {data} </h5>
                    ))
                }
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className='mt-5 p-5'>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        {
                            SocialIcons.map((Item, index) => (
                                <Item key={index} className='text-black mx-3 text-3xl cursor-pointer' />
                            ))
                        }
                    </div>
                    <div className='flex items-center'>
                        <img src={PDFAssociation} alt='pdf' className='w-[70px]' />
                        <img src={WinterBlack} alt='winterBlack' className='w-[50px] ml-3' />
                    </div>
                </div>

                <hr className='mt-5' />

                <div className='grid grid-cols-3 gap-3'>
                    {
                        ConvertTools.map((item, index) => (
                            <SubTool key={index} item={item} />
                        ))
                    }
                </div>

                <hr className='mt-5' />

                <div className='grid grid-cols-3 gap-3'>
                    {
                        Resources.map((item, index) => (
                            <SubTool key={index} item={item} />
                        ))
                    }
                </div>
            </div>

            <div className='bg-gray-100 p-5 text-xs text-gray-600'>
                <p className='my-1'>Soda™ is a registered trademark of Avanquest Software</p>
                <p className='my-1'>Copyright © 2024 All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
