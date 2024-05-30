import Loadingcom from '@/components/Loading/Loading';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { startLoading } from '@/context/features/loading/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Petlists = () => {
    const allpets = [{
        id: 1,
        Location: "Dhaka",
        AddedByName: "Sojib",
        Email: "sojib.gmail.com",
        Reported: "10 Reports",
    },
    {
        id: 2,
        Location: "khulna",
        AddedByName: "jibon",
        Email: "jibon.gmail.com",
        Reported: "0 Reports",
    },
    {
        id: 3,
        Location: "Dhaka",
        AddedByName: "Sojib",
        Email: "sojib.gmail.com",
        Reported: "10 Reports",
    },


    ]
    const Loading = useSelector(
        (state: any) => state.loading.isLoading,
      ) as boolean;
      const dispatch = useDispatch();
      const handelLoadMore = () => {
        dispatch(startLoading());
      };

    return (
        Loading ? (
            <Loadingcom />
          ) :
         <div className='p-10'>
               <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Location</TableHead>
                            <TableHead>Added By Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Reported</TableHead>
                            <TableHead className="text-right"> Fake Products</TableHead>
                            <TableHead className="text-right"> Detail</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            allpets.map((pet) => (
                                <TableRow key={pet.id} className="hover:scale-95 transition-all "  >
                                    <TableCell className="font-medium">{pet.Location}</TableCell>
                                    <TableCell>{pet.AddedByName}</TableCell>
                                    <TableCell>{pet.Email}</TableCell>
                                    <TableCell className="">{pet.Reported}</TableCell>
                                    <TableCell className="text-right">

                                        <Button variant="destructive" className="mt-2 ml-2 ">
                                            Block
                                        </Button>
                                    </TableCell>

                                    <TableCell className="text-right">
                                    <Link to={`/dashboard/petdetails/${pet.id}`} onClick={handelLoadMore}>
                                        <Button variant="secondary" className="mt-2 ">
                                            Check
                                        </Button>
                                    </Link>
                                     
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

                <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </div>
    );
};

export default Petlists;