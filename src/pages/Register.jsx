import { useState } from "react"
import { useForm } from 'react-hook-form'
import { registerSchema } from "../lib/schemas/authSchemas"
import { zodResolver } from '@hookform/resolvers/zod'
import { FiChevronLeft } from "react-icons/fi"
import { useAuth } from "../context/authContext.jsx"

function Register() {

    const [formStep, setFormStep] = useState(0)
    const { register: signUp } = useAuth()

    const { 
        register, 
        handleSubmit, 
        setError,
        trigger,
        reset,
        formState: { errors, isSubmitting, isValid } 
    } = useForm({ 
        resolver: zodResolver(registerSchema), 
        mode: 'all',
        shouldUnregister: false
    })

    const nextStep = async (e) => {
        e.preventDefault()

        const isStepValid = await trigger([
            "name",
            "email",
            "password"
        ])

        if (!isStepValid) return

        setFormStep(1)
    }

    const previusStep = (e) => {
        e.preventDefault()
        if (formStep === 0) return
        setFormStep(cur => cur - 1)
    }

    const submitForm = async (data) => {
        try {
            await signUp(data) 
            reset()
        } catch (error) {
            setError("root", error)
        }
    }


  return (
    <main className="flex flex-col items-center justify-center bg-[linear-gradient(170deg,#0f5238_50%,#2d6a4f_50%)] h-screen px-10">
        <header className="flex flex-col items-center mb-10">
            <h2 className="text-headline-sm uppercase  text-white font-bold">Bienvenido a <span className="text-secondary-fixed">LocalMarket</span></h2>
            <p className="text-white text-label-md tracking-label">Registra tu negocio en 2 simples pasos</p>
        </header>
        <form className="relative w-full max-w-xl flex flex-col gap-4 row justify-center items-center -start px-2 py-10 bg-surface rounded-xl shadow-ambient-form"
        onSubmit={handleSubmit(submitForm)}
        >
            {formStep === 0 && (
                <section className="flex flex-col gap-6 w-full px-10   bg-surface">
                    <header className="flex flex-col items-center gap-1">
                        <h3 className="text-lg text-on-surface text-center">Administrador(a)</h3>
                        <p className="text-label-md text-neutral-500 text-center">Esta informacion sera utilizada para que puedas iniciar secion</p>
                    </header>
                    <div className="flex flex-col gap-1">
                        <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="name">Nombre</label>
                        <input {...register('name')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="text" id='name' placeholder='Gillermo Ruíz'/>
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p> }
                    </div>
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
                    <button type="button" onClick={nextStep} className="rounded-xl mt-4 bg-primary-container mx-auto text-white py-2 px-4 w-7/16 cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed disabled:bg-secondary-fixed">Siguiente</button>
                </section>
            )}
            { formStep === 1 && (
                <section className="flex flex-col gap-6 w-full px-10 bg-surface">
                    <header className="flex flex-col items-center gap-1">
                        <h3 className="text-lg text-on-surface text-center">Negocio</h3>
                        <p className="text-label-md text-neutral-500 text-center">Esta informacion sera utilizada para que registrar su negocio</p>
                        <div onClick={previusStep} className="absolute top-4 left-4 flex items-center text-on-surface cursor-pointer">
                            <FiChevronLeft/>
                            <p>Paso anterior</p>
                        </div>
                    </header>
                    <section className="grid gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="businessName">Nombre</label>
                            <input {...register('businessName')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="text" id='businessName' placeholder='Ruíz Artezanal'/>
                            {errors.businessName && <p className="text-red-500 text-sm mt-2">{errors.businessName.message}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="location">Ubicación</label>
                            <input {...register('location')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="text" id='location'/>
                            {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location.message}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="slogan">Slogan</label>
                            <textarea {...register('slogan')} className="bg-surface-high rounded-xl px-4 py-2" name="slogan" id="slogan"></textarea>
                            {errors.slogan && <p className="text-red-500 text-sm mt-2">{errors.slogan.message}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="description">descripción</label>
                            <textarea {...register('description')} className="bg-surface-high rounded-xl h-24 px-4 py-2" name="description" id="description"></textarea>
                            {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>}
                        </div>
                    </section>
                    {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}
                </section>
            )}

            {
                formStep === 1 && (
                    <button type="submit" disabled={!isValid} className="rounded-xl mt-4 bg-primary-container text-white py-2 px-4 w-7/16 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-fixed">
                    {isSubmitting ? 'Registrando...' : 'Registrar'}
                    </button>
                )
            }
        </form>
    </main>
  )
}

export default Register