import { GlobalState } from "@/app/utils/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

export const globalActions = {
  setWallet: (state: GlobalState, action: PayloadAction<string>) => {
    state.wallet = action.payload;
  },
  setOwner: (state: GlobalState, action: PayloadAction<string>) => {
    state.owner = action.payload;
  },
  // setQuestions: (state: GlobalState, action: PayloadAction<QuestionProp[]>) => {
  //   state.questions = action.payload;
  // },
};
