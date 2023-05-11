import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: 'ListSlice',
    initialState: {
        list: []
    },
    reducers: {
      addList: (state, action) => {
        state.list.push(action.payload)
        // console.log("action is", action);
    },
}
})

export const {addList} = ListSlice.actions;
export default ListSlice.reducer