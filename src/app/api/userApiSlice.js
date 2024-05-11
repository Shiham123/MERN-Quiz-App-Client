// userApiSlice.js

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

export const userApiSlice = createApi({
	reducerPath: "userApiSlice",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => "/api/user",
		}),
	}),
})

export const {useGetUserQuery} = userApiSlice
