import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

// Define the API service
export const addUserApi = createApi({
	reducerPath: "addUserApi",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
	endpoints: (builder) => ({
		addUser: builder.mutation({
			query: (payload) => ({
				url: "/user",
				method: "POST",
				body: payload,
			}),
		}),
	}),
})

export const {useAddUsrMutation} = addUserApi
