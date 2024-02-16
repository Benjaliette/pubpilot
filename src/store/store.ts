import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

interface SearchState {
  term: string;
  publications: Array<string>;
}

const initialState: SearchState = {
  term: "",
  publications: [],
};

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const res = await axios.get(
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=cancer&retmode=json"
    );

    const data = await res.data;
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    search: (state: any) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchContent.fulfilled, (_state, action) => {
      console.log(action.payload);
    })
    builder.addCase(fetchContent.rejected, (_state, action) => {
      console.log(action.error.message);
    })
  },
});

export const { search } = searchSlice.actions;
export const selectPublications = (state: SearchState) => state.publications;

const store = configureStore({
  reducer: searchSlice.reducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
