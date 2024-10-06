"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex, "Неверный номер телефона"),
  text: z.string(),
});

export const FeedBackForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[42px] items-center"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white text-2xl">Ваше ФИО</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-[70px] text-[32px] text-center bg-white"
                  placeholder="ФИО"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white text-2xl">Ваш телефон</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-[70px] text-[32px] text-left bg-white"
                  placeholder="(999) 999-99-99"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white text-2xl">Ваш вопрос</FormLabel>
              <FormControl>
                <Input
                  className="w-full h-[70px] text-[32px] text-left bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-[300px] bg-white text-[#000000] text-[32px] h-[70px] rounded-[22px] border border-[#000000] shadow-none hover:bg-white/90"
          type="submit"
        >
          Отправить вопрос
        </Button>
      </form>
    </Form>
  );
};
