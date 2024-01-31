"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import useMedia from "@/hooks/useMedia"
import { MenuIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"

const Actions = ({ session }: { 
    session: Session | null 
}) => {
    const width = useMedia(500)
    console.log(width)
    return (
        <>
            {width.isMobile ? (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <MenuIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-1">
                            <DropdownMenuLabel>
                                {session && session.user 
                                    ? `${session.user.name} ${session.user.surname}`
                                    : "Войдите, чтобы продолжить"
                                }
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {session && session.user ? (
                                <>
                                    <Link href="/dashboard">
                                        <DropdownMenuItem>
                                            Войти в приложение
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem onClick={() => signOut()}>
                                        Выйти
                                    </DropdownMenuItem> 
                                </>
                            ) : (
                                <>
                                    <Link href="/signin">
                                        <DropdownMenuItem>
                                            Войти
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/signup">
                                        <DropdownMenuItem>
                                            Зарегистрироваться
                                        </DropdownMenuItem>
                                    </Link>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <div className="flex gap-2">
                    {session && session.user ? (
                        <>
                            <Link href="/dashboard">
                                <Button variant="default">Войти в приложение</Button>
                            </Link>
                            <Button variant="outline" onClick={() => signOut()}>Выйти</Button>
                        </>
                    ) : (
                        <>
                            <Link href="/signin">
                                <Button variant="default">Войти</Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="outline">Зарегистрироваться</Button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Actions