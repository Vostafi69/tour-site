import { api } from "@/lib/api";
import { CategoryModel } from "@/models/categoryModel";
import { useQuery } from "@tanstack/react-query";

export const useFetchCategories = () => {
  return useQuery<CategoryModel, Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("categories/");
      return data;
    },
  });
};
