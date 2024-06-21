import React, { useEffect, useState } from 'react'

 function Hoc(Warped) {
   
        return function Loading(props){
            const [isLoading , setIsLoading] = useState(true)

            useEffect(()=>{
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
            },[])
            return isLoading ? <div>...Loading</div> : <Warped {...props} />
        }
    }


function App(){
    return <>I am developer Krunal</>
}
export default Hoc(App);