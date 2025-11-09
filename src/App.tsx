import './App.css'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

interface LoginFormInputs {
  usuario: string;
  password: string
}

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()

  const myFuncionTheSumit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Datos del formulario:", data)
    alert(`Bienvenido, ${data.usuario}`)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mb-28'>
        <img src="/resources/logo.png" alt="logoEmpresa" />
        <p className='text-[#f1be23] text-center mb-28'>Seguimiento, Control y Análisis asistencial de pacientes</p>
        <p className='text-[#dbdbdb] text-2xl text-center'>Introduzca sus datos de acceso a Enfersalud</p>
      </div>
      <form className='flex flex-col text-[#f1be23]' onSubmit={handleSubmit(myFuncionTheSumit)}>
        <label className='mb-2' htmlFor="">Usuario</label>
        <input className='bg-amber-50 rounded-xl mb-2 text-black py-2 pl-4' type="text" {...register('usuario')} />
        <label className='mb-2' htmlFor="">Password</label>
        <input className='bg-amber-50 rounded-xl text-black py-2 pl-4' type="password" {...register('password', { required: 'La contraseña es obligatoria' })} />
        {errors.password && <p className='my-5' style={{ color: 'red' }}>{errors.password.message}</p>}
        <button className='mt-10 text-white bg-amber-500 rounded-xl p-4' type='submit'>Iniciar Sesión</button>
      </form>
    </>
  )
}

export default App
