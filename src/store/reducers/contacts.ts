import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IContact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  isEditing?: boolean;
}

const initialState: IContact[] = [
  {
    id: "0",
    email: "teste@mail.com",
    name: "Eric",
    phone: "99123456789",
    isEditing: false,
  },
];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IContact>) => {
      const lastIndex = state.length - 1;

      if (action.payload) {
        if (lastIndex >= 0) {
          const newContact = {
            ...action.payload,
            isEditing: false,
            id: String(Number(state[lastIndex].id) + 1),
          };
          state.push(newContact);
        } else {
          const newContact = {
            ...action.payload,
            id: "0",
          };
          state.push(newContact);
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const newContactsArr = state.findIndex((c) => c.id === idToRemove);
      if (newContactsArr !== -1) {
        state.splice(newContactsArr, 1);
      }
    },
    edit: (state, action: PayloadAction<IContact>) => {
      const contactToEdit = state.find((c) => c.id === action.payload.id);
      const contactToEditIndex = state.findIndex(
        (c) => c.id === action.payload.id
      );

      if (contactToEdit) {
        if (contactToEdit.isEditing) {
          contactToEdit.isEditing = false;
          state[contactToEditIndex] = action.payload;
        } else {
          contactToEdit.isEditing = true;
        }
      }
    },
  },
});

export const { add, remove, edit } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
