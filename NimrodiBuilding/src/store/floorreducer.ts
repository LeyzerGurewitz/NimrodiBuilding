//FILL HERE 3.1
import {createSlice ,PayloadAction} from '@reduxjs/toolkit'

interface FloorState{
    floorAccess: boolean[]
}

const initialState:FloorState ={ floorAccess: [false, false, false, false, false],}


const floorSlice = createSlice({
    name: 'floor',
    initialState,
    reducers: {
      changeAccess: (state, action: PayloadAction<number>) => {
        const floorIndex = action.payload;
        state.floorAccess[floorIndex] = !state.floorAccess[floorIndex];
      },
    },
  });
  
  export const { changeAccess } = floorSlice.actions;
  export default floorSlice.reducer;