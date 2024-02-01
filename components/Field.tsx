import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { HTMLInputTypeAttribute } from "react"

const Field = <T extends FieldValues>({ 
    form, 
    name, 
    label, 
    input 
}: {
    form: UseFormReturn<T>,
    name: Path<T>,
    label: string,
    input?: HTMLInputTypeAttribute
}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-xl">
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={input}
                            placeholder={label}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default Field