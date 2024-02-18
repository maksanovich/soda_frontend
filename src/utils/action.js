import axios from "axios";

export const apiSignIn = async (userdata) => {
    try {
        const response = await axios.post(process.env.REACT_APP_ENDPOINT_URL + "/auth/signin", { userdata });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            msg: error?.message
        }
    }
}

export const apiSignUp = async (userdata) => {
    try {
        const response = await axios.post(process.env.REACT_APP_ENDPOINT_URL + "/auth/signup", { userdata });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            msg: error?.message
        }
    }
}

export const apiTools = async (userdata) => {
    try {
        const response = await axios.post(process.env.REACT_APP_ENDPOINT_URL + "/convert/fromOfficeToPdf", userdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            msg: error?.message
        }
    }
}