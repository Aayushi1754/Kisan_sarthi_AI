import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://kisan-sarthi-ai.onrender.com/api/features")
            .then((res) => res.json())
            .then((data) => {
                setUsers(Object.values(data));
                setLoading(false);
            });

    }, []);

    if (loading)
        return <Loader />

    return (

        <div>

            <h1 className="text-6xl font-bold bg-amber-400 py-8">
                Farmer Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 dark:bg-gray-700 dark:text-white">

                {
                    users.map((user, index) => (

                        <Card
                            key={index}
                            img="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500"
                            title={user.title}
                            description={user.description}
                        />

                    ))
                }

            </div>

        </div>

    );

}

export default Dashboard;