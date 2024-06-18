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

const AdopitionRequest = () => {
    const token = localStorage.getItem('token');
    const [allPets, setAllPets] = useState([]);

    console.log(allPets);
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/requestpet/getrequestpet', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAllPets(response.data.data);
            } catch (error: any) {
                console.error('Error fetching pets:', error.response ? error.response.data : error.message);
            }
        }

        if (token) {
            fetchPets();
        }

    }, [token]);

    console.log(allPets);

    return (
        <div className="p-10  font-['Fredoka'] ">
            <h1> All Users</h1>
            <Table>
                <TableCaption>All Users </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Location</TableHead>
                        <TableHead> Pet Name </TableHead>
                        <TableHead> Apply By </TableHead>
                        <TableHead>Email  </TableHead>

                        <TableHead className="text-right"> Aprrove</TableHead>
                        <TableHead className="text-right"> Delote</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {allPets ? allPets.map((pet: any) => (
                        <TableRow key={pet.petName}>
                            <TableCell className="font-medium">{pet.location}</TableCell>
                            <TableCell>{pet.petName}</TableCell>
                            <TableCell>{pet.userName}</TableCell>
                            <TableCell>{pet.userEmail }</TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" color="secondary" className="mt-2 ml-2">
                                 Approve
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" color="primary" className="mt-2">
                                   Delete
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
}


export default AdopitionRequest;