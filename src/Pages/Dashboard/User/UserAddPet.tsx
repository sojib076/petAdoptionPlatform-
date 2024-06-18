
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import axios from 'axios';



const UserAddPet = () => {
    const [editorValue, setEditorValue] = useState<string>('');
    const token = localStorage.getItem('token')
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { petname, imageone, imagetwo, petType } = e.target.elements;
        const newFormData = {
            petname: petname.value,
            description: editorValue,
            petType: petType.value,
            imageOne: imageone.value,
            imageTwo: imagetwo.value,
            location: ["dhaka"]
        };
        try {
            axios.post('http://localhost:5000/api/v1/allpets/', newFormData,{
                
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  
            })
        } catch (error) {
            console.log(error.response)
        }

    }

    const handleChange = (value: string) => {
        setEditorValue(value);
    };
    return <Card className="font-['Fredoka']">
        <CardHeader className="space-y-1 ml-10 ">
            <CardTitle className="text-2xl">Please Fill Your Pet Details</CardTitle>

            <CardDescription>
                Site Under Development , Please upload the image somewhere and share the link
            </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
            </div>


            <div dangerouslySetInnerHTML={{ __html: editorValue }} />
            <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md">
                <div className="grid gap-2 mb-4">
                    <label htmlFor="petname" className="block">Pet Name</label>
                    <input id="petname" type="text" placeholder="Bonny" className="p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="petType" className="block">Pet Type</label>
                    <select
                        id="petType"
                        className="p-2 w-full border border-gray-300 rounded-md mb-5 "
                        required
                    >
                        <option value="">Select Pet Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            

                <ReactQuill

                    value={editorValue}
                    onChange={handleChange}
                    theme="snow"
                    className='h-72 bmy-10 w-full'
                />

                <div className="grid gap-2 mt-14">
                    <label htmlFor="imageone" className="block">Image 1</label>
                    <input id="imageone" type="text" placeholder="Pet image link" className="p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div className="grid gap-2 mb-4">
                    <label htmlFor="imagetwo" className="block">Image 2</label>
                    <input id="imagetwo" type="text" placeholder="Pet image link" className="p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div className="grid gap-2 mb-4">
                    <label htmlFor="imagethree" className="block">Image 3</label>
                    <input id="imagethree" type="text" placeholder="Pet image link" className="p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <button type="submit" className="px-4 py-2 w-full bg-yellow-400 text-black  rounded-md hover:scale-90 transition-all ">Submit</button>
            </form>

        </CardContent>

    </Card>
};

export default UserAddPet;