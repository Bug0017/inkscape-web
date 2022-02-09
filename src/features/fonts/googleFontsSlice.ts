import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GOOGLE_FONTS_URL } from "../../consts";

export const fontsApiSlice = createApi({
  reducerPath: "googleFontsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GOOGLE_FONTS_URL,
  }),

  endpoints(builder) {
    return {
      fetchGoogleFonts: builder.query<void, void>({
        query() {
          return "";
        },
      }),
    };
  },
});

export const { useFetchGoogleFontsQuery } = fontsApiSlice;
