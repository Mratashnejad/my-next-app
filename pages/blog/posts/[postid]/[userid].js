import {useRouter} from 'next/router'

export default function userPost(){
    const router = useRouter()

    console.log(router.query)
    
    return(
        <div>
            <h2>user Post  </h2>
        </div>
    )
}