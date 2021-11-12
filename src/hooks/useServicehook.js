import { useState } from "react";
import { useEffect } from "react";
// creating custom hooks and custom parameter
const useServicehook = (option) => {
    // declare state
    const [services, setServices] = useState([]);
    // loading fake data 
    useEffect(() => {
        fetch('./iiucServiceData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // return parameter value conditionally
    return option ? [services.slice(0, 4)] : [services];
}
export default useServicehook;