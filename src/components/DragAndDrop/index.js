import { useRef, useState } from "react";
import toast from "react-hot-toast";

import { MdOutlineCloudUpload } from "react-icons/md";

import ConvertLoading from "../Loading/ConvertLoading.js";

import { apiTools } from "../../utils/action";

export default function DragAndDrop() {

    const [dragActive, setDragActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);

    const inputRef = useRef(null);

    function handleChange(e) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files);
            for (let i = 0; i < e.target.files["length"]; i++) {
                setFiles((prevState) => [...prevState, e.target.files[i]]);
            }
        }
    }

    async function handleSubmitFile() {
        if (files.length === 0) {
            toast.error('There is file no exist to submit!');
            return;
        } else {

            const formData = new FormData();
            formData.append('document', files[0]);

            setLoading(true);
            let response = await apiTools(formData);
            console.log(response);
            if (response.success) {
                removeFile(0);
                toast.success(response.data.message);
                setLoading(false);

                const downloadURL = process.env.REACT_APP_ENDPOINT_URL + '/download/' + response.data.download;
                window.location.href = downloadURL;
            } else {
                toast.error(response.data.message);
                setLoading(false);
            }
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile(fileName, idx) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles([]);
        setFiles(newArr);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (
        <>
            {
                loading ? <ConvertLoading text='Converting' /> :
                    <div className="flex items-center justify-center rounded-lg p-1 m-5 bg-white">
                        <form
                            className={`${dragActive ? "bg-white" : "bg-white"
                                }  p-4 w-full border-dotted border-2 rounded-lg  min-h-[14rem] text-center flex flex-col items-center justify-center`}
                            onDragEnter={handleDragEnter}
                            onSubmit={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                        >
                            <input
                                placeholder="fileInput"
                                className="hidden"
                                ref={inputRef}
                                type="file"
                                multiple={true}
                                onChange={handleChange}
                                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                            />

                            <div className="text-center">
                                <div className="flex justify-center">
                                    <MdOutlineCloudUpload
                                        className="text-3xl cursor-pointer hover:opacity-85"
                                        onClick={openFileExplorer}
                                    />
                                </div>
                                <p className="text-sm">
                                    Choose a File or Drag it here
                                </p>
                            </div>

                            <div className="flex flex-col items-center p-3">
                                {files.map((file, idx) => (
                                    <div key={idx} className="flex flex-row space-x-5">
                                        <span>{file.name}</span>
                                        <span
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => removeFile(file.name, idx)}
                                        >
                                            remove
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="bg-black rounded-lg p-2 mt-3 w-auto hover:opacity-85"
                                onClick={handleSubmitFile}
                            >
                                <span className="p-2 text-white">Submit</span>
                            </button>
                        </form>
                    </div>
            }
        </>
    );
}
