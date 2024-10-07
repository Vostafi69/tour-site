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
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
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
        className="flex flex-col items-center gap-[42px]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl text-white">Ваше ФИО</FormLabel>
              <FormControl>
                <Input
                  className="h-[70px] w-full bg-white text-center text-[32px]"
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
              <FormLabel className="text-2xl text-white">Ваш телефон</FormLabel>
              <FormControl>
                <Input
                  className="h-[70px] w-full bg-white text-left text-[32px]"
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
              <FormLabel className="text-2xl text-white">Ваш вопрос</FormLabel>
              <FormControl>
                <Input
                  className="h-[70px] w-full bg-white text-left text-[32px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="h-[70px] w-[300px] rounded-[22px] border border-[#000000] bg-white text-[32px] text-[#000000] shadow-none hover:bg-white/90"
          type="submit"
        >
          Отправить вопрос
        </Button>
      </form>
    </Form>
  );
};
