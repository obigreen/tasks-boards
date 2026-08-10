import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faTableColumns, faUsers} from "@fortawesome/free-solid-svg-icons";

export type NavigationDataType = {
    id: string;
    title: string;
    path: string;
    icon: IconDefinition;
    end?: boolean;
}


export const navigationData: NavigationDataType[] = [
    {
        id: "boards",
        title: "Boards",
        path: "/boards",
        icon: faTableColumns,
        end: true
    },
    {
        id: "members",
        title: "Members",
        path: "/members",
        icon: faUsers,
        end: true
    }
]