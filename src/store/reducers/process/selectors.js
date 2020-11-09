import {NameSpace} from "../root-reducer";

export const getActiveCitySelector = (state) => state[NameSpace.PROCESS].activeCity;
