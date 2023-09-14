import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'


const Signup = () => {

    const [ values, setValues ] = React.useState({
        name:"",
        email:"",
        password:""
    })

    const nav = useNavigate()

    const [ error, setError ]= React.useState({})

    function handleSubmit(e){
        e.preventDefault()
        console.log(values)
        setError(Validation(values))
        axios.post('http://localhost:5000/signup', values)
        .then( (msg) => {
            console.log(msg)
            nav('/')
        })
        .catch((err) => {
            console.log(err)
        })

    }

    function handleChange(e){
        const {name, value} = e.target
        setValues(function(item){
            return{
                ...item,
                [name]: value
            }
        })
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign up</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='name' name="name" value={values.name} onChange={handleChange}  placeholder='Enter Name' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name="email" value={values.email} onChange={handleChange} placeholder='Enter Email' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' name="password" value={values.password}  onChange={handleChange} placeholder='enter Password' className='form-control rounded-0'/>
                </div>

                <button className='btn btn-success w-100'>Sign Up</button>

                <p>Must agree to our terms and policies</p>
                <Link to="/" className='btn btn-default border w-100 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup