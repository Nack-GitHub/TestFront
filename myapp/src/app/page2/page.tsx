"use client"
import { useEffect, useState } from 'react'

export default function Page2() {

    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const grouped = await require('../../services/groupedData')
            setData([grouped])
        } catch (error) {
            console.log("error >>", error)
        }
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}