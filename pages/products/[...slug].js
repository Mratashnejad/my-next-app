import { useRouter } from 'next/router'
export default function Products(){

    const router = useRouter()
    console.log(router.query)
    
    return(
        <div>
            <h2>Products</h2>
        </div>
    )
}