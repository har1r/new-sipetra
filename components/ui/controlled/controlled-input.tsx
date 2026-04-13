"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  containerClassName?: string;
} & ComponentProps<"input">;

const ControlledInput = <T extends FieldValues>({
  className,
  type,
  name,
  label,
  containerClassName,
  ...props
}: InputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <div className={cn("w-full", containerClassName)}>
      {!!label && (
        <Label
          className="mb-2 text-sm font-medium text-black"
          htmlFor={name}
        >
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              type={type}
              id={name}
              data-slot="input"
              aria-invalid={!!error}
              className={cn(
                "h-12 rounded-xl border border-[#f0c96a] bg-white text-black placeholder:text-black/60 focus-visible:ring-[#2EA7D7]/40 focus-visible:border-[#2EA7D7]",
                className
              )}
              {...field}
              {...props}
            />
            {!!error && (
              <p className="mt-1 text-sm text-red-500">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export { ControlledInput };