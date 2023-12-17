import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const propertyApi = createApi({
    reducerPath: "propertyApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://villa-agency-backend.vercel.app"}),
    endpoints: (builder) =>({
        getAllProperty: builder.query({
            // query: (property) => `/api/properties/?search_term=${property}`,
            query: ({category, pg}) => `/api/properties/?search_term=${category}&page=${pg}`,
        }),
        getBanner: builder.query({
            query: () => "/api/banner",
        }),
        getFeatured: builder.query({
            query: () =>"/api/featured"

        }),
        getBestProperty: builder.query({
            query: (property) =>`/api/best/?search_term=${property}`

        }),
        getSingleProperty: builder.query({
            query: ({property_id}) =>`/api/properties/${property_id}`

        }),
    }),
});
export const {useGetAllPropertyQuery, useGetBannerQuery, useGetFeaturedQuery, useGetBestPropertyQuery, useGetSinglePropertyQuery} = propertyApi