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
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Loader2 as Spinner } from "lucide-react"

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

    const signUpSchema = z.object({
        name: z.string().min(2, {
            message: "Имя должно быть длиннее 2 символов"
        }).max(20, {
            message: "Имя не должно превышать 20 символов"
        }),
        surname: z.string().min(2, {
            message: "Фамилия должна быть длиннее 2 символов"
        }).max(30, {
            message: "Фамилия не должна превышать 30 символов"
        }),
        patronymic: z.string().optional(),
        email: z.string().min(5, {
            message: "Почта должна быть длиннее 5 символов"
        }).max(50, {
            message: "Почта не должна превышать 50 символов"
        }),
        password: z.string().min(8, {
            message: "Пароль должна быть длиннее 8 символов"
        }).max(20, {
            message: "Пароль не должен превышать 20 символов"
        }),
        role: z.array(z.string()).min(1, {
            message: "Нужно выбрать хотя бы 1 роль"
        }).refine(value => value.some(item => item))
    })

    const form = useForm<z.infer<typeof signUpSchema>>({
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

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
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
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                        Имя
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Имя"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                        Фамилия
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Фамилия"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="patronymic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                        Отчество
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Отчество"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                        Почта
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Почта"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                        Пароль
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Пароль"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
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