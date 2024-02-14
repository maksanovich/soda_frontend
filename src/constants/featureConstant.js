
import {
    MdPreview,
    MdCreateNewFolder,
    MdOutlineCallSplit,
    MdEditNote,
    MdOutlineCompress,
    MdOutlinePictureAsPdf,
    MdOutlineBatchPrediction,
    MdAssignmentInd, 
    MdRMobiledata
} from "react-icons/md";

import { IoGitMerge } from "react-icons/io5";
import { SiConvertio,SiGoogleforms ,SiBookmeter, SiGnuemacs   } from "react-icons/si";
import { BiSolidCommentEdit,BiSupport  } from "react-icons/bi";
import { RiSecurePaymentLine, RiToolsFill, RiHandbagLine   } from "react-icons/ri";
import { GrResources } from "react-icons/gr";


export const buttonGroupData = [
    {
        text: 'Merge',
        color: '#3fbfb0',
    },
    {
        text: 'Split',
        color: '#52b173',
    },
    {
        text: 'Edit',
        color: '#49bde2',
    },
    {
        text: 'Compress',
        color: '#ff9b50',
    },
    {
        text: 'Convert',
        color: '#ff6166',
    },
    {
        text: 'OCR',
        color: '#3fbfb0',
    },
    {
        text: 'E-Sign',
        color: '#9567e3',
    }
]


export const toolsGroupData = [
    {
        title: 'Free Tools',
        subTitle: 'Included with all Soda PDF plans',
        data: [
            {
                icon: MdPreview,
                tool: 'View',
                content: 'View & read PDFs or EPUBs using our 3D page-flipping technology.',
                color: '#ff6166'
            },
            {
                icon: MdCreateNewFolder,
                tool: 'Create',
                content: 'Create PDFs from blank, from any file, or directly from your scanner.',
                color: '#ff9b50'
            },
            {
                icon: IoGitMerge,
                tool: 'Merge',
                content: 'Combine multiple, various file formats into one single PDF.',
                color: '#3fbfb0'
            },
            {
                icon: MdOutlineCallSplit,
                tool: 'Split',
                content: 'Create new PDF documents from a single page or a page range.',
                color: '#52b173'
            },

        ]
    },
    {
        title: 'Most Popular Tools',
        subTitle: 'Included with Soda PDF Standard, Pro & Business plans',
        data: [
            {
                icon: MdEditNote,
                tool: 'Edit',
                content: 'Gain full editing control over any PDF document.',
                color: '#49bde2'
            },
            {
                icon: MdOutlineCompress,
                tool: 'Compress',
                content: 'Reduce the size of any PDF without affecting file quality.',
                color: '#ff9b50'
            },
            {
                icon: SiGoogleforms,
                tool: 'Page',
                content: 'Rotate, reorder, add or remove pages from any PDF document.',
                color: '#9567e3'
            },
            {
                icon: SiConvertio,
                tool: 'Convert',
                content: 'Convert PDFs to or from MS Office files, images & more!',
                color: '#ff6166'
            },

        ]
    },
    {
        title: 'Essential Tools',
        subTitle: 'Included with Soda PDF Pro & Business plans',
        data: [
            {
                icon: BiSolidCommentEdit,
                tool: 'Comment',
                content: 'Annotate directly on PDF using sticker notes, comments & more!',
                color: '#ff9b50'
            },
            {
                icon: MdOutlineBatchPrediction,
                tool: 'Batch',
                content: 'Create & convert a batch of files or folders in one click.',
                color: '#ff6166'
            },
            {
                icon: RiSecurePaymentLine,
                tool: 'Secure',
                content: 'Protect PDF documents by adding 256-AES password encryption.',
                color: '#49bde2'
            },
            {
                icon: MdOutlinePictureAsPdf,
                tool: 'Forms',
                content: 'Create fillable PDF forms, or fill any existing form with ease.',
                color: '#9567e3'
            },

        ]
    },
    {
        title: 'Advanced Tools & Services',
        subTitle: 'Included with Soda PDF Pro & Business plans',
        data: [
            {
                icon: SiBookmeter,
                tool: 'OCR',
                content: 'Recognize & edit text within any scanned document or image.',
                color: '#3fbfb0'
            },
            {
                icon: MdAssignmentInd,
                tool: 'E-Sign',
                content: 'Electronically sign PDFs and track & manage e-signatures in real-time.',
                color: '#9567e3'
            },
            {
                icon: RiToolsFill,
                tool: 'Online Tools',
                content: 'Get access to all of our Online PDF tools & services.',
                color: '#52b173'
            },
        ]
    },
]

export const soultionData = [
    {
        icon: GrResources,
        color:'#3fbfb0',
        title: 'Resource Center',
        content: 'Make the most of your Soda PDF experience with these useful resources.',
    },
    {
        icon: SiGnuemacs,
        color:'#ff6166',
        title: 'E-Sign Advantage',
        content: 'Learn all about our powerful E-Sign feature and how to apply e-signatures.',
    },
    {
        icon: RiHandbagLine,
        color:'#9567e3',
        title: 'Business Solution',
        content: 'Discover how our PDF software can help your business simplify workflows.',
    },
    {
        icon: BiSupport ,
        color:'#49bde2',
        title: 'Dedicated Support',
        content: 'Got questions? Search our Knowledge Base or Contact Support for help.',
    },
]