import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPetList = () => {
    const token = localStorage.getItem('token');
    const [allPets, setAllPets] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/allpets/mypets', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAllPets(response.data.data);
            } catch (error: any) {
                console.error('Error fetching pets:', error.response ? error.response.data : error.message);
            }
        }

        if (token) {
            fetchPets();
        } else {
            navigate('/login')
        }

    }, [token]);

const handelDelete = async (id: string) => {

    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/requestpet/deletepet/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setAllPets(allPets.filter((pet: any) => pet._id !== id));
    } catch (error: any) {
        console.error('Error deleting pets:', error.response ? error.response.data : error.message);
    }
}
    return (
        <div className="p-10  font-['Fredoka'] ">
            <h1> All Users</h1>
            <Table>
                <TableCaption>  </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Location</TableHead>
                        <TableHead> Pet Name</TableHead>
                        <TableHead> Added Date</TableHead>
                        <TableHead>Available </TableHead>

                        <TableHead className="text-right"> Status</TableHead>
                        <TableHead className="text-right"> Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {allPets ? allPets.map((pet: any) => (
                        <TableRow key={pet.petname}>
                            <TableCell className="font-medium">{pet.location.join(', ')}</TableCell>
                            <TableCell>{pet.petname}</TableCell>
                            <TableCell>{pet.addedDate}</TableCell>
                            <TableCell>{pet.available ? 'yes' : 'NO'}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" color="secondary" className="mt-2 ml-2" 
                                onClick={() => handelDelete(pet._id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" color="primary" className="mt-2">
                                    Update Data
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                        : 'no thing found'
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default UserPetList;
