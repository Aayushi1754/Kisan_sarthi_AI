import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/ui/Loader";

const Dashboard = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("http://127.0.0.1:8000/api/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setProfile(data))
            .catch((err) => console.log(err));

        fetch("http://127.0.0.1:8000/api/features")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

    }, []);

    // ADD FEATURE
    const addFeature = async () => {

        if (!title || !description || !image) {
            alert("Please fill all fields");
            return;
        }

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/features",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        image
                    })
                }
            );

            const data = await response.json();

            setUsers([...users, data]);

            setTitle("");
            setDescription("");
            setImage("");
            setShowForm(false);

            alert("Feature added successfully!");

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }

    };

    // DELETE FEATURE
    const deleteFeature = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this feature?"
        );

        if (!confirmDelete) return;

        try {

            await fetch(
                `http://127.0.0.1:8000/api/features/${id}`,
                {
                    method: "DELETE"
                }
            );

            setUsers(users.filter((user) => user.id !== id));

            alert("Feature deleted successfully!");

        } catch (error) {

            console.log(error);
            alert("Delete failed");

        }

    };

    if (loading) return <Loader />;

    return (

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <div className="bg-yellow-400 py-8">

                <h1 className="text-5xl font-bold px-10">
                    Farmer Dashboard
                </h1>

                {profile.user && (
                    <p className="px-10 mt-2 text-lg">
                        Welcome,
                        <strong> {profile.user.sub}</strong>
                    </p>
                )}

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-green-600 text-white px-4 py-2 rounded mt-4 ml-10"
                >
                    + Add Feature
                </button>

                {showForm && (

                    <div className="bg-white shadow-md rounded-lg p-6 mx-10 mt-4">

                        <h2 className="text-2xl font-bold mb-4">
                            Add New Feature
                        </h2>

                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-2 w-full mb-3 rounded"
                        />

                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border p-2 w-full mb-3 rounded"
                        />

                        <input
                            type="text"
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="border p-2 w-full mb-4 rounded"
                        />

                        <button
                            onClick={addFeature}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Add Feature
                        </button>

                    </div>

                )}

            </div>

            <div className="py-8">

                <h2 className="text-3xl font-semibold text-center">
                    Smart Tools for Smarter Farming 🌱
                </h2>

                <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10">

                {users.map((user) => (

                    <Card
                        key={user.id}
                        id={user.id}
                        img={user.image}
                        title={user.title}
                        description={user.description}
                        onEdit={() => {}}
                        onDelete={deleteFeature}
                    />

                ))}

            </div>

        </div>

    );

};

export default Dashboard;