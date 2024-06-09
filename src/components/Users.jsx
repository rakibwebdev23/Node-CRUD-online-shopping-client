import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        console.log(id);
        fetch(`https://online-shop-server-7pj1otv7q-rakibwebdev23s-projects.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('User deleted successfully')

                    // remove the user from UI
                    const remaining = users.filter(use => use._id !== id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Create At</th>
                        <th>Last Logged At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id} className="bg-base-200">
                            <th>{user._id}</th>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button className="btn" onClick={() => handleDelete(user._id)}>X</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;