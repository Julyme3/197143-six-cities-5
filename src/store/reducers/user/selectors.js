import {NameSpace} from "../root-reducer";

export const getAuthorizationStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;
