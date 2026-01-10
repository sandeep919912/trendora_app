import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AdminProtectedRoute = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("adminToken")
        if(!token){
            navigate("/admin/login")
        }
    })

    return <Outlet/>
}

export default AdminProtectedRoute