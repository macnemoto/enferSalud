import React, { useState } from "react";
import { useEffect } from 'react';
import './App.css'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import axios from 'axios';

interface LoginFormInputs {
    usuario: string;
    password: string
}
interface ApiResponse {
    message: string;
}

const Register: React.FC = () => {


    const [mensaje, setMensaje] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMensaje = async (): Promise<void> => {
            try {
                const response = await axios.get<ApiResponse>('http://localhost:8000');
                setMensaje(response.data.message);
            } catch (err: any) {
                console.error('❌ Error:', err.message);
                setError(err.message || 'Error desconocido');
            }
        };

        fetchMensaje();
    }, []);
    console.log(`${mensaje || error}`)



    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()

    const myFuncionTheSumit: SubmitHandler<LoginFormInputs> = (data) => {
        console.log("Datos del formulario:", data)
        alert(`Bienvenido, ${data.usuario}`)
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center mb-12'>
                <img src="/resources/logo.png" alt="logoEmpresa" />
                <p className='text-[#f1be23] text-center mb-28'>Seguimiento, Control y Análisis asistencial de pacientes</p>
                <p className='text-[#dbdbdb] text-2xl text-center'>Introduzca sus datos de acceso a Enfersalud</p>
            </div>
            <form className='flex flex-col text-[#f1be23] mb-15' onSubmit={handleSubmit(myFuncionTheSumit)}>
                <label className='mb-2' htmlFor="">Usuario</label>
                <input className='bg-amber-50 rounded-xl mb-2 text-black py-2 pl-4' type="text" {...register('usuario')} />
                <label className='mb-2' htmlFor="">Password</label>
                <input className='bg-amber-50 rounded-xl text-black py-2 pl-4 mb-2' type="password" {...register('password', { required: 'La contraseña es obligatoria' })} />
                {/* <p className='text-right'>Olvidaste la contraseña ?</p> */}
                <a className='text-right' href="#">Olvidaste la contraseña ?</a>
                {errors.password && <p className='my-5' style={{ color: 'red' }}>{errors.password.message}</p>}
                <button className='mt-10 text-white bg-amber-500 rounded-xl p-4' type='submit'>Iniciar Sesión</button>
            </form>
            <p className='text-center text-[#dbdbdb] font-light'>Al iniciar sesión, acepta nuestros términos de uso y política
                de privacidad.</p>
        </>
    )
};

export default Register;