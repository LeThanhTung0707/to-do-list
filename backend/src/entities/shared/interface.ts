export interface Pageable {
    page: number;
    limit: number;
}

export interface Query {
    filters?: any;
    pageable: Pageable;
}

export interface ResultWithMeta<T, M> {
    values: T
    pagination?: {
        limit: number,
        page: number,
        totalPage: number,
    }
    meta?: M
}
export interface Modal {
    open: boolean
    started?: boolean
    type?: string
    title?: string
    data?: any
}