// import axios from "axios"
// import { PostType } from "../_types/PostType"

// // create an axios instance with base url and bearer token from env
// export const endpoint = process.env.NEXT_PUBLIC_BASE_API_URL + "/posts"
// export const headers = {
//   Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
//   "Content-Type": "application/json",
//   "Cache-Control": "no-cache",
// }

// const api = axios.create({
//   baseURL: endpoint,
//   headers: headers,
// })

// export const createOne = async (data: PostType) => {
//   // create new post
//   const body = {
//     title: data.title,
//     jsonBody: data.jsonBody,
//   }

//   const response = await api.post("/", body)

//   // cast response to PostType if not null
//   if (response.data) {
//     return response.data as PostType
//   }
//   return null
// }

// export const updateOne = async (id: number, data: PostType) => {
//   const response = await api.put(`${endpoint}/${id}`, data)
//   // cast response to PostType if not null
//   if (response.data) {
//     return response.data as PostType
//   }
//   return null
// }

// export const deleteOne = async (id: number) => {
//   const response = await api.delete(`${endpoint}/${id}`)
//   // boolean response
//   return response.data
// }
