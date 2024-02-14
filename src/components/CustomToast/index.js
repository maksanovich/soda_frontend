import { Toaster } from 'react-hot-toast';

const CustomToast = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={true}
            gutter={2}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                    background: '#363636',
                    borderRadius: '4px',
                    color: '#fff',
                },

                // Default options for specific types
                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }} />

    )
}

export default CustomToast