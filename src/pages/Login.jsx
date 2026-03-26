import { useForm } from 'react-hook-form'
import { loginSchema } from "../lib/schemas/authSchemas"
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from "../context/authContext.jsx"

function Login() {
    const { login } = useAuth()

    const { 
      register, 
      handleSubmit, 
      setError,
      reset,
      formState: { errors, isSubmitting, isValid } 
    } = useForm({ 
        resolver: zodResolver(loginSchema), 
        mode: 'all',
      })

      const submitForm = async (data) => {
        try {
            await login(data) 
            reset()
        } catch (error) {
          if (error.message === "Invalid login credentials") {
            setError("root", {message: 'Email o contraseña invalidos'})
          }
        }
    }

  return (
    <main className="flex flex-col items-center justify-center bg-[linear-gradient(170deg,#0f5238_50%,#2d6a4f_50%)] h-screen px-10">
        <header className="flex flex-col items-center mb-10">
            <h2 className="text-headline-sm uppercase text-wrap text-center text-white font-bold">Bienvenido de vuelta a <span className="text-secondary-fixed">LocalMarket</span></h2>
            <p className="text-white text-label-md tracking-label">Inicia sesión para seguir gestionando y vendiendo en tu negocio.</p>
        </header>
        <form className="relative w-full max-w-xl flex flex-col gap-4 row justify-center items-center -start px-2 py-10 bg-surface rounded-xl shadow-ambient-form"
        onSubmit={handleSubmit(submitForm)}
        >
                <section className="flex flex-col gap-6 w-full px-10   bg-surface">
                    <header className="flex flex-col items-center gap-1">
                        <h3 className="text-xl text-on-surface text-center ">Iniciar Sesión</h3>
                    </header>

                    <div className="flex flex-col gap-1">
                        <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="email">Email</label>
                        <input {...register('email')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="email" id='email' placeholder='gille@ruiz.com'/>
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="password">Contraseña</label>
                        <input {...register('password')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="password" id='password'/>
                        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                    </div>
                    {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
                    <button type="submit" disabled={!isValid} className="rounded-xl mt-4 bg-primary-container mx-auto text-white py-2 px-4 w-7/16 cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed disabled:bg-secondary-fixed">
                    {isSubmitting ? 'Iniciando...' : 'Entrar a mi negocio'}
                    </button>
                </section>
      </form>
    </main>
  )
}

export default Login