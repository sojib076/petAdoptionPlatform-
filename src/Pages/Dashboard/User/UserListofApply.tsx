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


const UserListofApply = () => {
    const token = localStorage.getItem('token');
    const [allPets, setAllPets] = useState([]);
   
        console.log(allPets);
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/requestpet/getallmypet', {
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


    return (
        <div className="p-10  font-['Fredoka'] ">
            <h1> All Users</h1>
            <Table>
                <TableCaption>  </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead> Pet Name</TableHead>
                      
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {allPets ? allPets.map((pet: any) => (
                        <TableRow key={pet.petName}>
                           
                            <TableCell>{pet.petName}</TableCell>
                        
                            <TableCell className="text-right">
                                <Button variant="secondary" color="secondary" className="mt-2 ml-2">
                                    Delete
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                
                            </TableCell>
                        </TableRow>
                    ))
                        : <TableRow>
                            <TableCell colSpan={4}>No Pets Found</TableCell>
                        </TableRow>
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default UserListofApply;
