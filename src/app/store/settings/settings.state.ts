export interface IAllState<T>
{
    loading: boolean;
    all: T[],
    error: string;
}

export interface IOneState<T>
{
    loading: boolean;
    one: T,
    error: string;
}