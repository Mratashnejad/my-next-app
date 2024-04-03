import {useRouter} from 'next/router'

export default function userId(){
    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)
    
    return(
        <div>
            <h2>user Id  </h2>
        </div>
    )
}