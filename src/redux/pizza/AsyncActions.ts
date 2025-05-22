import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FetchPizzasArgs, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://681f0008c1c291fa6635adfa.mockapi.io/items?page=${currentPage}&limit=4${category}${search}&sortBy=${sortBy}&order=${order}`,
    );
    return data;
  },
);
