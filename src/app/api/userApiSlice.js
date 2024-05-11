import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

// Define the API service
export const userApiSlice = createApi({
	reducerPath: "userApiSlice",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api"}),
	endpoints: (builder) => ({
		getAllUser: builder.query({query: () => "/user", providesTags: ["userApi"]}),
	}),
})

export const {useGetAllUserQuery} = userApiSlice
