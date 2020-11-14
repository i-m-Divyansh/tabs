import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Buttons from './Components/Buttons'
import InfoDivs from './Components/InfoDivs'
import './Tabs.css'

const url = 'https://course-api.com/react-tabs-project'

const TabsApp = () => {
    // Hooks
    const [Load, setLoad] = useState(true)
    const [Jobs, setJobs] = useState([])
    const [Value, setValue] = useState(0)
    // Data Fetching from API
    const DataFetch = async () => {
        const Response = await fetch(url)
        const data = await Response.json()
        setJobs(data)
        setLoad(false)
    }
    console.log(Jobs);
    // UseEffect to Fetch Data after Loading
    useEffect(() => {
        DataFetch()
    }, [])
    // Condional Rendering
    if (Load) {
        return <div className="loading">
            <Loading />
        </div>
    }
    // Return
    return (
        <div className="Body">
            <div className="mx-auto Appheading">
                <h1>Experience</h1>
            </div>
            <div className="bottomline"></div>
            <div className=" tabs mt-5">
                <Buttons
                    Jobs={Jobs}
                    Value={Value}
                    setValue={setValue}
                />
                <InfoDivs
                    Value={Value}
                    Jobs={Jobs}
                />
            </div>
        </div>
    )
}


export default TabsApp;