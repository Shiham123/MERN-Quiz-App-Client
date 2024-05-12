import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
	reducerPath: "user",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api"}),
	endpoints: (builder) => ({
		getAllUser: builder.query({query: () => "/user"}),
		createUser: builder.mutation({
			query: (username) => ({url: "/user", method: "POST", body: {username}}),
		}),
	}),
})

export const {useGetAllUserQuery, useCreateUserMutation} = userApi
