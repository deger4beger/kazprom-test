import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type Record = {
	id: string;
	text: string;
}
type InitialStateType = {
	data: Record[]
}

const initialState: InitialStateType = {
	data: [],
}

const getUid = function(){
    return Date.now().toString(36) + Math.random().toString(36);
}

export const recordSlice = createSlice({
	name: "record",
	initialState,
	reducers: {
		createRecord(state, action: PayloadAction<{ text: string }>) {
			state.data.push({
				id: getUid(),
				text: action.payload.text
			});
		},
		deleteRecord(state, action: PayloadAction<{ id: string }>) {
			state.data.filter(record => record.id !== action.payload.id);
		}
	}
})

export const { createRecord, deleteRecord } = recordSlice.actions;

export default recordSlice.reducer;