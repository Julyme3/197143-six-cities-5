import {NameSpace} from "../root-reducer";

export const getIsError = (state) => state[NameSpace.NOTIFICATION].showError;
export const getContent = (state) => state[NameSpace.NOTIFICATION].content;
