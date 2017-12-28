
export default class SLWebAPI {
    constructor(baseUrl = '', { headers = {}, devMode = false, simulatedDelay = 0 } = {}) {
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

    fetch(route, method, body, isQuery = false) {
        if (!route) throw new Error('Route is undefined');
        var fullRoute = this.getFullURL(route);
        if (isQuery && body) {
            var qs = require('qs');
            const query = qs.stringify(body);
            fullRoute = `${fullRoute}?${query}`;
            body = undefined;
        }
        let opts = {
            method,
            headers: this.headers
        };
        if (body) {
            Object.assign(opts, { body: JSON.stringify(body) });
        }
        const fetchPromise = () => fetch(fullRoute, opts);
        
        return fetchPromise()
            .then(response => response.json());        
    }

    GET(route, query) { return this.fetch(route, 'GET', query, true); }
    POST(route, body) { return this.fetch(route, 'POST', body); }
    PUT(route, body) { return this.fetch(route, 'PUT', body); }
    DELETE(route, query) { return this.fetch(route, 'DELETE', query, true); }
}