import {NameSpace} from "../root-reducer";

export const getFavorites = (state) => state[NameSpace.FAVORITES].favoritesList;
