
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Policy from '../../types/policy';
import policies from '../../data/policy';

interface PoliciesState {
  allPolicies: Policy[];
}

const initialState: PoliciesState = {
  allPolicies: policies,
};

const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    setAllPolicies(state, action: PayloadAction<Policy[]>) {
      state.allPolicies = action.payload;
    },
    addPolicy(state, action: PayloadAction<Policy>) {
      state.allPolicies.push(action.payload);
    },
    updatePolicy(state, action: PayloadAction<Policy>) {
      const index = state.allPolicies.findIndex(policy => policy.id === action.payload.id);
      if (index !== -1) {
        state.allPolicies[index] = action.payload;
      }
    },
    deletePolicy(state, action: PayloadAction<number>) {
      state.allPolicies = state.allPolicies.filter(policy => policy.id !== action.payload);
    },
  },
});

export const { setAllPolicies, addPolicy, updatePolicy, deletePolicy } = policiesSlice.actions;
export default policiesSlice.reducer;
