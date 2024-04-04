import {useRouter} from 'next/router'

export default function userId(){
    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)

    function showUserIdHandler(){
       router.push({
        pathname:'/users/[id]',
        query: { id:'xashi'},
       })
    }
    
    return(
        <div>
            <h2>user Id  </h2>
            <button onClick={showUserIdHandler}>show User id</button>
        </div>
    )
}