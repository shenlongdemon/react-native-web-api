
export default class SLWebAPI {
    static request(method, url, body, headers){
        var optHeader = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'',
            'Accept-Language': 'en-US'
        };
        Object.assign(optHeader, headers);
        let opts = {
            method : method,
            headers: optHeader
        };
        if (method === "POST" || method === "PUT"){
            Object.assign(opts, { body: JSON.stringify(body) });
        }
        const fetchPromise = () => fetch(url, opts);        
        return fetchPromise()
            .then(response => response.json());  
    }
}