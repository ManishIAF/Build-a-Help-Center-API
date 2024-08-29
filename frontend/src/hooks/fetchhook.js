import { useState, useEffect } from 'react';

import axios from 'axios';

const useFetch = (path,options={}) => {
    const {skip} = options;
    const [getData, setData] = useState({isLoading:false,apiData:undefined,status:null,serverError:null});
    const [Params,setParams] = useState('')

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    if(skip){
        return;
      }

    const fetchData = async () => {
      try {

        const {data,status} = await axios.get(`http://localhost:8000/${path}`,{
                    signal: controller.signal,
                    params: Params,
                    
                });
        
            if (isMounted) {

                setData(prev => ({...prev,isLoading:false,apiData:data,status:status}));
      
            }
      
        } catch (error) {
            console.log(error)
            setData(prev => ({...prev,isLoading:false,serverError:error?.response?.data}))      
        } finally {
       
            setData(prev => ({...prev,isLoading:false}))
      
        }
    };

    fetchData();

    return () => {
        controller.abort();
        isMounted = false;
    };
  }, [path,Params,skip]);

  return [getData,setData,setParams,Params];
};

export default useFetch;