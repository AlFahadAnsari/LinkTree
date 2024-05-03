import React from 'react'
import { useForm } from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';


const Login = () => {
  let navi = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let userInfo = {
      email: data.email,
      password: data.password
    };
  
    try {
      const response = await axios.post('http://localhost:2000/user/login', userInfo);
      if (response.data) {
        if (response.data.success) {
          toast.success('Login Successful!');
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
          }, 1000);
          setTimeout(() => {
            navi('/');
          }, 2000);
        } else {
        
          toast.error("Invalid email or password");
        }
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error:" + err.response.data.message);
      }
    }
  };
  
  return (
    <div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>


            <h3 className="font-bold text-lg">login</h3>

            <div className='mt-4 space-y-2'>
              <span className='mx-2'>Email</span> <br />
              <input type="email" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your email'  {...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-md text-red-600'>This field is required</span>}
            </div>



            <div className='mt-4 space-y-2'>
              <span className='mx-2'>Password</span> <br />
              <input type="password" className=' outline-none px-3 py-3 w-80 justify-center border rounded-md  ' placeholder='type your password'  {...register("password", { required: true })} />
              <br />
              {errors.password && <span className='text-md text-red-600'>This field is required</span>}

            </div>



            <div className='flex mt-6 justify-around'>
              <button className="btn btn-secondary btn-sm ">Login</button>
              <p>No registererd <Link to={'/signup'} className=' underline text-blue-700 cursor-pointer '>Signup</Link></p>
            </div>


          </form>

        </div>
      </dialog>


    </div>
  )
}

export default Login