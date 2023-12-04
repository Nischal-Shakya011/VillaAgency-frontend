import {CreateListenerMiddlewareOptions, fetchBaseQuert} from '@reduxjs/toolkit'
import { buildCustomRoute } from 'next/dist/build'

export const propertyApi = createApi({
    reducerPath: "propertyPath",
    baseQuery: fetchBaseQuery({baseUrl: "https://villa-agency-backend.vercel.app"}),
    endpoints: () =>({
        getAllProperty: buildCustomRoute.query({
            query: () => "property"
        }),
    }),
});
export const {useGetAllPropertyQuery} = propertyApi