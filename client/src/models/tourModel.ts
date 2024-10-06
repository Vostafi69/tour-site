export interface TourModel {
  name: string;
  desc: string;
  tag: string;
  link: string;
  price: string;
  thumb: string;
  in_and_out: string;
  days: string[];
  category: string[];
  gallery: string[];
}

export interface TourResponseModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: TourModel[];
}
