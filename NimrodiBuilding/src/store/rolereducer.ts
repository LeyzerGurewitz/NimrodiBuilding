//FILL HERE 3.2
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import rolesData from '../data/roles.json'



interface RoleState{
    role:string
}

const initialState: RoleState = {
    role: rolesData[0],
};

const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers:{
        setRole: (state, action:PayloadAction<number>) => {
            const roleNum = rolesData[action.payload]
            if (roleNum) {
                state.role = roleNum ;
              }
        }
    }
})

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;