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

export const subNavData = [
    {
        title: 'AI Tools',
        data: [
            {
                icon: MdPreview,
                text: 'Chat with PDF'
            }
        ]
    },
    {
        title: 'Organize & Manage',
        data: [
            {
                icon: MdPreview,
                text: 'Merge PDF',
                url: 'merge-pdf',
            },
            {
                icon: MdPreview,
                text: 'Compress PDF',
                url: 'compress-pdf',
            },
            {
                icon: MdPreview,
                text: 'PDF Converter',
                url: 'pdf-converter'
            },
            {
                icon: MdPreview,
                text: 'Split PDF',
                url: 'split-pdf'
            },
        ]
    },
    {
        title: 'View & Edit',
        data: [
            {
                icon: MdPreview,
                text: 'PDF Editor'
            },
            {
                icon: MdPreview,
                text: 'Resize PDF'
            },
            {
                icon: MdPreview,
                text: 'PDF Reader'
            },
            {
                icon: MdPreview,
                text: 'E-Sign PDF'
            },
        ]
    },
    {
        title: 'Convert from PDF',
        data: [
            {
                icon: MdPreview,
                text: 'PDF to Word'
            },
            {
                icon: MdPreview,
                text: 'PDF to Excel'
            },
            {
                icon: MdPreview,
                text: 'PDF to PPT'
            }
        ]
    },
    {
        title: 'Convert to PDF',
        data: [
            {
                icon: MdPreview,
                text: 'Word to PDF'
            },
            {
                icon: MdPreview,
                text: 'Excel to PDF'
            },
            {
                icon: MdPreview,
                text: 'PPT to PDF'
            },
            {
                icon: MdPreview,
                text: 'TXT to PDF'
            }
        ]
    },
    {
        title: 'Convert Image',
        data: [
            {
                icon: MdPreview,
                text: 'PNG to PDF'
            },
            {
                icon: MdPreview,
                text: 'JPG to PDF'
            },
            {
                icon: MdPreview,
                text: 'PDF to JPG'
            }
        ]
    },
]