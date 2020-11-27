import {NameSpace} from "../root-reducer";

export const getFavorites = (state) => state[NameSpace.FAVORITES].favoritesList;

export const getIsLoading = (state) => state[NameSpace.FAVORITES].isLoading;
