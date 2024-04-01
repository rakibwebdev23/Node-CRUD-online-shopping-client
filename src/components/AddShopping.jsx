import Swal from "sweetalert2";

const AddShopping = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const allProducts = { name, quantity, supplier, category, details, photo };
        console.log(allProducts);

        Swal.fire({
            title: "Are you sure?",
            text: "You want to Add this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(allProducts)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Added",
                            text: "Your product has been Added.",
                            icon: "success"
                        })
                        form.reset();
                    })

            }

        });
    }

    return (
        <div className="bg-sky-100">
            <h1 className="text-4xl font-bold text-center text-cyan-600 p-6">Add Product!!</h1>
            <form onSubmit={handleAddProduct} className="p-10">
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder=" Enter product name" type="text" name="name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Product Quantity</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder=" Enter product quantity" type="number" name="quantity" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Product Supplier</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Enter supplier name" type="text" name="supplier" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Product Category</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder=" Enter product category" type="text" name="category" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Product Details</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Enter product details" type="text" name="details" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder=" Enter photo url" type="text" name="photo" />
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="btn btn-block font-bold bg-yellow-600 text-white hover:bg-blue-500 hover:text-black">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddShopping;