


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"



const handleSubmit = (e:any) => {
    e.preventDefault();
    const { petname, description, imageone, imagetwo } = e.target.elements;
    const newFormData = {
        petname: petname.value,
        description: description.value,
        imageone: imageone.value,
        imagetwo: imagetwo.value,
    };
  
console.log(newFormData);

};


const UserAddPet = () => {
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

            <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md">
                <div className="grid gap-2 mb-4">
                    <label htmlFor="petname" className="block">Pet Name</label>
                    <input id="petname" type="text" placeholder="Bonny" className="p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div className="grid gap-2 mb-4">
                    <label htmlFor="description" className="block">Description</label>
                    <input id="description" type="text" placeholder="Description" className="p-2 w-full border border-gray-300 rounded-md"required />
                </div>
                <div className="grid gap-2 mb-4">
                    <label htmlFor="imageone" className="block">Image 1</label>
                    <input id="imageone" type="text" placeholder="Pet image link" className="p-2 w-full border border-gray-300 rounded-md"  required/>
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