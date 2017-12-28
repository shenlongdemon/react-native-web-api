
export default class SLWebAPI {
    constructor(baseUrl = '', { headers = {}} = {}) {
        if (!baseUrl) throw new Error('missing baseUrl');
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        Object.assign(this.headers, headers);
        this.baseUrl = baseUrl;       
    }
    getFullURL(url) {
        return `${this.baseUrl}${url}`;
    }
    
    GET(route) { 
        var fullRoute = this.getFullURL(route);
        let opts = {
            method :'GET',
            headers: this.headers
        };
        const fetchPromise = () => fetch(fullRoute, opts);        
        return fetchPromise()
            .then(response => response.json());        
    }
    POST(route, body) { 
        var fullRoute = this.getFullURL(route);
        let opts = {
            method :'POST',
            headers: this.headers
        };
        Object.assign(opts, { body: JSON.stringify(body) });
        const fetchPromise = () => fetch(fullRoute, opts);        
        return fetchPromise()
            .then(response => response.json());        
    }
    PUT(route, body) { 
        var fullRoute = this.getFullURL(route);
        let opts = {
            method :'PUT',
            headers: this.headers
        };
        Object.assign(opts, { body: JSON.stringify(body) });
        const fetchPromise = () => fetch(fullRoute, opts);        
        return fetchPromise()
            .then(response => response.json());        
    }
    DELETE(route) { 
        var fullRoute = this.getFullURL(route);
        let opts = {
            method :'DELETE',
            headers: this.headers
        };
        const fetchPromise = () => fetch(fullRoute, opts);        
        return fetchPromise()
            .then(response => response.json());        
    }

}