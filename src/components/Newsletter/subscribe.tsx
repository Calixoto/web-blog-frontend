"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SubscribeFormData, subscribeSchema } from "@/lib/schemas";
import { Button } from "../Button";
export const Subscribe = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });
  const onSubmit = () => {};
  return (
    <div className="flex flex-col items-start justify-start space-y-1 w-full">
      <form
        className="w-full flex items-center justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="E-mail"
          className="w-72 py-3 px-4 ring-1 ring-gray-900 bg-gray-900 font-medium rounded-md focus-within:ring-blue-600 placeholder:text-gray-500"
          {...register("email")}
        />
        <Button type="submit">Registrar</Button>
      </form>
      {errors.email ? (
        <p className="font-medium text-sm text-red-600">
          {errors.email.message}
        </p>
      ) : null}
    </div>
  );
};
