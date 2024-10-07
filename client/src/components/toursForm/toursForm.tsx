"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Slider } from "../ui/slider";
import { formSchema } from "./schema";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const ToursForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      minCost: 0,
      maxCost: 4000,
      adults: false,
      family: false,
      forKids: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl text-black">
              Стоимость
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
                />
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 transition-transform duration-200"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-[42px] p-1 pb-4">
              <div className="flex flex-row justify-between">
                <FormField
                  control={form.control}
                  name="minCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="10000" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Slider max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl text-black">
              Категории
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
                />
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 transition-transform duration-200"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-[42px] p-1 pb-4">
              Тут что то
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl text-black">
              Начало тура
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
                />
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 transition-transform duration-200"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-[42px] p-1 pb-4">
              Тут что то
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl text-black">
              Конец тура
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
                />
                <Minus
                  size={50}
                  strokeWidth={4}
                  absoluteStrokeWidth
                  stroke="#6FD0D2"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 transition-transform duration-200"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-[42px] p-1 pb-4">
              Тут что то
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <FormField
          control={form.control}
          name="forKids"
          render={({ field }) => (
            <FormItem className="flex flex-row space-x-[36px] space-y-0 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-2xl">Для детей</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <FormItem className="flex flex-row space-x-[36px] space-y-0 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-2xl">Для взрослых</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="family"
          render={({ field }) => (
            <FormItem className="flex flex-row space-x-[36px] space-y-0 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-2xl">Для семьи</FormLabel>
            </FormItem>
          )}
        /> */}
        <div className="flex w-full justify-center">
          <Button type="submit">Показать</Button>
        </div>
      </form>
    </Form>
  );
};
