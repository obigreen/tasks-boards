import type {RootState} from "../store.ts";
import {useSelector} from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>()