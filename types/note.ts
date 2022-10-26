export interface MetaType {
    title: string;
    description: string;
    date: string;
}

export type Props = {
    content: string,
    meta: MetaType,
}

export type ParamsType = {
    params: {
        slug: string,
    },
}