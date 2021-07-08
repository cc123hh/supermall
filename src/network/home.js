import { request } from "./request"

export function getAllHomeNews(){
    return request({
        url:"/home/multidata"
    })
}