import {NameSpace} from "../root-reducer";

export const getActiveCitySelector = (state) => state[NameSpace.PROCESS].activeCity;
export const getIsLoading = (state) => state[NameSpace.PROCESS].isLoading;
export const getPostCommentStatus = (state) => state[NameSpace.PROCESS].commentStatus;

