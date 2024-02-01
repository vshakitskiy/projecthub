"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { createUser } from "@/lib/actions/user"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Loader2 as Spinner } from "lucide-react"
import { SignUpSchema, signUpSchema } from "@/types/zod"
import Field from "@/components/Field"

const SignUpPage = () => {
    const [isSubmited, setIsSubmited] = useState(false)
    const router = useRouter()
    const { toast } = useToast()
    
    const roles = [
        {
            id: "customer",
            label: "Я клиент"
        },
        {
            id: "agent",
            label: "Я исполнитель"
        }
    ]

    const form = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            surname: "",
            patronymic: "",
            email: "",
            password: "",
            role: []
        }
    })

    const onSubmit = async (data: SignUpSchema) => {
        setIsSubmited(true)
        const res = await createUser(data)
        console.log(res.ok)
        if (res.ok) {
            setIsSubmited(false)
            router.push("/dashboard")
            return
        }

        console.log(res.error)

        setIsSubmited(false)
        toast({
            variant: "destructive",
            title: "Ошибка",
            description: res.error === "EmailInUse" 
                ? "Почта уже используется."
                : "Попробуйте позже."
        })
    }

    return (
        <div className="w-[300px] sm:w-[400px] md:w-[500px] mx-auto relative">
            <h1 className="pt-7">Добро пожаловать!</h1>
            <p className="text-muted-foreground mt-2">Войдите в ваш аккаунт:</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-3">
                    <Field 
                        form={form}
                        name="name"
                        label="Имя"
                    />
                    <Field 
                        form={form}
                        name="surname"
                        label="Фамилия"
                    />
                    <Field 
                        form={form}
                        name="patronymic"
                        label="Отчество"
                    />
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
                    <FormField
                        control={form.control}
                        name="role"
                        render={() => <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-xl">Роль</FormLabel>
                            </div>
                            <div className="flex gap-10">
                                {roles.map(item => <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value.includes(item.id)}
                                                onCheckedChange={checked => checked
                                                    ? field.onChange([...field.value, item.id])
                                                    : field.onChange(
                                                        field.value.filter(
                                                            (value) => value !== item.id
                                                        )
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                    }
                                />
                                )}
                            </div>
                            <FormMessage />
                        </FormItem>}
                    />
                    <div className="flex gap-4 items-center">
                        <Button type="submit" variant="default" className="rounded-sm" size="lg">
                            Зарегистрироваться
                        </Button>       
                        {isSubmited ? <Spinner className="ml-1 h-4 w-4 animate-spin" /> : null}
                    </div>                 
                </form>
            </Form>
            <p className="text-center pt-6 pb-24 sm:pb-32 text-muted-foreground">
                Есть аккаунт?
                <Link href="/signin" className="ml-1">
                    <Button variant="link" className="p-0 text-md">
                        Вход
                    </Button>
                </Link>
            </p>
        </div>
    )
}

export default SignUpPage