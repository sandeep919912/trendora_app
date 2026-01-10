import React, { useEffect, useState } from 'react'
import axios from "axios"
import API from '../../Apis/axios'

const AllQueries = () => {

  const [query , setQuery] = useState(null)
  
  useEffect(()=>{
    const fetchAllQueries = async()=>{
      const res = await API.get("/api/query")
      // console.log(res)
      setQuery(res.data.queries)
    }
    fetchAllQueries()
  },[])


  if(!query){
    return <h1>Loading...</h1>
  }

  return (
    <div className="p-6 text-white w-full">
  <h1 className="text-2xl font-semibold mb-6">All Queries</h1>

  <div className="overflow-x-auto rounded-lg border border-slate-700">
    <table className="w-full text-sm text-left">
      <thead className="bg-slate-800 text-slate-300">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Query</th>
          <th className="px-6 py-3">Date</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-700">
        {query.map((i, index) => (
          <tr
            key={i._id}
            className="hover:bg-slate-800 transition"
          >
            <td className="px-6 py-4">{index + 1}</td>

            <td className="px-6 py-4 font-medium">{i.name}</td>

            <td className="px-6 py-4 text-slate-300">{i.email}</td>

            <td className="px-6 py-4 max-w-xs truncate">
              {i.query}
            </td>

            <td className="px-6 py-4 text-slate-400">
              {new Date(i.createdAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Empty State */}
  {query.length === 0 && (
    <p className="text-center text-slate-400 mt-6">
      No queries found.
    </p>
  )}
</div>

  )
}

export default AllQueries