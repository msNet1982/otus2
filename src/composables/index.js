import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/vue-query'

const url = "https://fakestoreapi.com/products"
const urlEchoServer = "https://httpbin.org/anything"

const getProducts = () => {
    return axios.get(url)
}

export const useGetProducts = () => {
    const { data, isPending } = useQuery({
        queryKey: ['allProducts'],
        queryFn: getProducts,
        select: data => data.data
    })

    return { data, isPending }
}

export const useChangeDataServer = () => {
    const { isPending, isError, isSuccess, mutate } = useMutation({
        mutationFn: (data) => axios.post(urlEchoServer, data)
    })

    return { isPending, isError, isSuccess, mutate }
}