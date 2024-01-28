import AxiosHelper from "../helpers/AxiosHelper"

export async function GetUsers() {
    return await AxiosHelper.get(`https://dummyjson.com/users`, false)
}