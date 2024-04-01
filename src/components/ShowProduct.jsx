import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'

const ShowProduct = ({ product, products, setProducts }) => {

    const { _id, name, category, supplier, details, quantity, photo } = product;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You want delete this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            })
                        }
                        const remaining = products.filter(pro => pro._id !== _id);
                        setProducts(remaining);
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-full">
                <figure><img className="w-36 h-40 rounded-md items-center" src={photo} alt="Movie" /></figure>
                <div className='flex justify-between items-center w-full'>
                    <div className="card-body ml-0 pl-0">
                        <h2 className="font-bold">Name: {name}</h2>
                        <p>Category: {category}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Details: {details}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2 pr-2'>
                        <button className='btn hover:bg-black text-white btn-primary'>View</button>
                        <Link to={`/updateShopping/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className='btn bg-white text-red-600 hover:bg-red-600 hover:text-white '><FaTrash className=' font-bold'></FaTrash></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;