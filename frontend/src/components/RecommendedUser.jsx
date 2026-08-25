import { useQuery } from "@tanstack/react-query"

const RecommendedUser = ({user}) => {

  const {data:connectionStatus,isLoading}=useQuery({
    queryKey:["connectionStatus",user._id],
    queryFn:()=>axiosInstance.get(`/connect`)
  })
  return (
    <div>RecommendedUser</div>
  )
}

export default RecommendedUser