import { z } from "zod";

export const formSchema = z.object({
  minCost: z.number(),
  maxCost: z.number(),
  forKids: z.boolean(),
  family: z.boolean(),
  adults: z.boolean(),
});
