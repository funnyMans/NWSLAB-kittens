import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface Categories {
    id: string;
    name: string;
}
export interface Kitten {
    id: string;
    url: string;
    categories: Categories[]
}

export interface KittyParams {
    limit?: string;
    page?: string;
    id: string | undefined;
}

export const kittiesApi = createApi({
    reducerPath: "kittiesApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1/'}),
    endpoints: (builder) => ({
        getKittyCategories: builder.query<Categories[], string>({
            query: (path)=> `/${path}`,
        }),
        getKitten: builder.query<Kitten[], string>({
            query: (id)=> ({
                url: '/images/search',
                params: {
                    image_id: id
                }
            })
        }),
        getKittiesById: builder.query<Kitten[], KittyParams>({
            query:({id, limit, page})=> ({
                url: '/images/search',
                params: {
                    limit,
                    page,
                    category_ids: id
                }
            })
        }),
    })
    
});

export const {useGetKittyCategoriesQuery,useGetKittenQuery, useGetKittiesByIdQuery} = kittiesApi;

export default kittiesApi.reducer;