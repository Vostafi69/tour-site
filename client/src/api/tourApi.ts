import { api } from "@/lib/api";
import { TourResponseModel } from "@/models/tourModel";
import { useQuery } from "@tanstack/react-query";

export const useFetchTours = () => {
  return useQuery<TourResponseModel, Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("tours/");
      return data;
    },
  });
};
