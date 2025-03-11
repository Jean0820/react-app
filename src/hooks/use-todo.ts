import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"

const useTodo = () => {
    const fetchData = () => apiClient.get('/todos').then((res) => (res.data))
    const {data, isLoading, error} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchData
    })
    return {data, isLoading, error}
}
export default useTodo