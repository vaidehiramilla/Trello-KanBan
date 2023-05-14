import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: 'ListSlice',
    initialState: {
        list:[],
        // task: [],
    },
    reducers: {
      addList (state, action) {
        state.list.push(action.payload)
        // console.log("action is", action);
    },
    deleteList: (state,action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
        // console.log("delete",action.payload);
    },
    addTask (state, action) {
        console.log('action=> ', action);
        state.list.forEach((item) => {
            if(item.id === action.payload.listId){
                if(Object.hasOwn(item, 'task')){
                    item.task.push(action.payload)
                }else{
                    item.task =[];
                    item.task.push(action.payload)
                }
            }
        })
    }

}

})

export const {addList,deleteList,addTask} = ListSlice.actions;
export default ListSlice.reducer