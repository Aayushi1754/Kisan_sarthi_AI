import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";


const Dashboard = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});
    const[editingId,setEditingId] = useState(null);
    const[isEditing,setIsEditing] = useState(false);
    const[toastMessage,setToastMessage] = useState("");const[showtoast,setShowToast] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch("https://kisan-sarthi-ai.onrender.com/api/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => setProfile(data))
            .catch((err) => console.log(err));

        fetch("https://kisan-sarthi-ai.onrender.com/api/features")
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
    const showToastMessage = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);

    }

    // ADD FEATURE
    const addFeature = async () => {

        if (!title || !description || !image) {
            showToastMessage("Please fill all fields");
            return;
        }

        try {

            const response = await fetch(
                "https://kisan-sarthi-ai.onrender.com/api/features",
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

            showToastMessage("Feature added successfully!");

        } catch (error) {
            console.log(error);
            showToastMessage("Something went wrong");
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
                `https://kisan-sarthi-ai.onrender.com/api/features/${id}`,
                {
                    method: "DELETE"
                }
            );

            setUsers(users.filter((user) => user.id !== id));

            showToastMessage("Feature deleted successfully!");

        } catch (error) {

            console.log(error);
            showToastMessage("Delete failed");

        }

    };
    const editFeature = (id) => {

        const feature = users.find((user) => user.id === id);
        setTitle(feature.title);
        setDescription(feature.description);
        setImage(feature.image);
        setEditingId(id);
        setIsEditing(true);
        setShowForm(true);

    };
    const updateFeature = async () => {

    if (!title || !description || !image) {
        showToastMessage("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(
            `https://kisan-sarthi-ai.onrender.com/api/features/${editingId}`,
            {
                method: "PUT",
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

        const updatedFeature = await response.json();

        setUsers(
            users.map((user) =>
                user.id === editingId ? updatedFeature : user
            )
        );

        setTitle("");
        setDescription("");
        setImage("");
        setShowForm(false);
        setEditingId(null);
        setIsEditing(false);

        showToastMessage("Feature updated successfully!");

    } catch (error) {

        console.log(error);
        showToastMessage("Update failed");

    }

};

    if (loading) return <Loader />;

    return (

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Toast 
            message={toastMessage} 
            type="success" show={showtoast} />

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
                            {isEditing ? "Update Feature" : "Add New Feature"}
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
                            onClick={isEditing ? updateFeature : addFeature}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            {isEditing ? "Update Feature" : "Add Feature"}
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

            {users.length === 0 ? (

    <div className="text-center py-16">

        <h2 className="text-3xl font-bold">
            No farming tools available 🌱
        </h2>

        <p className="mt-3 text-gray-600">
            Click "Add Feature" to create your first farming tool.
        </p>

    </div>

) : (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10">

        {users.map((user) => (

            <Card
                key={user.id}
                id={user.id}
                img={user.image}
                title={user.title}
                description={user.description}
                onEdit={editFeature}
                onDelete={deleteFeature}
            />

        ))}

    </div>

)}

        </div>

    );

};

export default Dashboard;