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
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

    }, []);

    if (loading)
        return <Loader />;

    return (

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <div className="bg-yellow-400 py-8">
                <h1 className="text-5xl font-bold px-10">
                    Farmer Dashboard
                </h1>
            </div>

            <div className="py-8">

                <h2 className="text-3xl font-semibold text-center">
                    Smart Tools for Smarter Farming 🌱
                </h2>

                <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10">

                {users.map((user, index) => (

                    <Card
                        key={index}
                        img={user.image}
                        title={user.title}
                        description={user.description}
                    />

                ))}

            </div>

            <Footer />

        </div>

    );
};

export default Dashboard;