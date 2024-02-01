"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignInResponse, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 as Spinner } from "lucide-react"
import { useState } from "react"
import { SignInSchema, signInSchema } from "@/types/zod"
import Field from "@/components/Field"

const SignInPage = () => {
    const [isSubmited, setIsSubmited] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async ({ email, password }: SignInSchema) => {
        setIsSubmited(true)
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        }) as SignInResponse
        console.log(res.ok)

        if (res.ok) {
            setIsSubmited(false)
            router.push("/dashboard")
            return
        }

        setIsSubmited(false)
        toast({
            variant: "destructive",
            title: "Ошибка",
            description: "Неверный логин или пароль.",
        })
    }

    console.log(Object.keys(signInSchema.shape))

    return (
        <div className="w-[300px] sm:w-[400px] md:w-[500px] mx-auto relative">
            <h1 className="pt-7">Добро пожаловать!</h1>
            <p className="text-muted-foreground mt-2">Войдите в ваш аккаунт:</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-3">
                    <Field 
                        form={form}
                        name="email"
                        label="Почта"
                    />
                    <Field
                        form={form}
                        name="password"
                        label="Пароль"
                        input="password"
                    />
                    <div className="flex gap-4 items-center">
                        <Button type="submit" variant="default" className="rounded-sm" disabled={isSubmited} size="lg">
                            Войти
                        </Button>
                        {isSubmited ? <Spinner className="ml-1 h-4 w-4 animate-spin" /> : null}
                    </div>
                </form>
            </Form>
            <p className="text-center pt-6 text-muted-foreground">
                Нет аккаунта?
                <Link href="/signup" className="ml-1">
                    <Button variant="link" className="p-0 text-md">
                        Регистрация
                    </Button>
                </Link>
            </p>
        </div>
    )
}

export default SignInPage