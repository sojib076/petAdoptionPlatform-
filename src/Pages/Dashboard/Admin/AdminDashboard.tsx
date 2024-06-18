

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Petlists from "./Petlists";

const AdminDashboard = () => {
    const allusers = [{
        id: 1,
        CardTitle: "All Users",
        CardContent: "++201 since last hour",
    },
    {
        id: 2,
        CardTitle: "All Pets",
        CardContent: "++201 since last hour",
    },
    {
        id: 3,
        CardTitle: "All donations",
        CardContent: "++201 since last hour",
    },
    {
        id: 4,
        CardTitle: "All adoptions",
        CardContent: "++201 since last hour",
    }

    ]

  
    
    return (
       
        <div className="lg:p-10 p-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 ">
                {
                    allusers.map((user) => (
                        <Card key={user.id} className=" shadow-2xl hover:scale-110  hover:rounded-lg transition-all hover:bg-yellow-500 ">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium"> {user.CardTitle} </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    {user.CardContent}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <div className=" lg:mt-20 mt-10 font-['Fredoka'] rounded-xl shadow-2xl lg:p-5 p-2 bg-[#E5EEFF] ">
                <h1 className="text-2xl font-bold">Pet List</h1>
                <Petlists />
            </div>
        </div>
    );
};

export default AdminDashboard;
