import axios from "axios"

export function request(config){        
        const instand = axios.create({
            baseURL: "http://123.207.32.32:8000",
            timeout: 5000,
            //headers: headers
        })

        //拦截器
        instand.interceptors.request.use(
            res => {
                //console.log("requset OK");
                return res;
            },
            err => {
                console.log("request Fail");
            }
        )
        
        instand.interceptors.response.use(
            res=>{
                return res.data
            },
            err=>{
                console.log("respone Fail")
            }
        )

        return instand(config)
}