const AVAILABLE_PARAMS_KEYS = {
    abv_gt: 'number',
    abv_lt: 'number',
    ibu_gt: 'number',
    ibu_lt: 'number',
    ebc_gt: 'number',
    ebc_lt: 'number',
    beer_name: 'string',
    yeast: 'string',
    brewed_before: 'mm-yyyy',
    brewed_after: 'mm-yyyy',
    hops: 'string',
    malt: 'string',
    food: 'food',
    ids: 'string',
    page: 'number',
    per_page: 'number'
};

export class BeerAPI {
    constructor() {
        this.serverName = 'https://api.punkapi.com/v2/beers';
        this.cash = {};
    }

    createURL(params = {}) {
        const searchPairs = [];

        for (const key in params) {
            const keyType = AVAILABLE_PARAMS_KEYS[key];

            if (keyType) {
                const value = params[key];
                const pair = `${key}=${value}`;

                searchPairs.push(pair);
            }
        }

        return `${this.serverName}?${searchPairs.join('&')}`;
    }

    get(params = {}) {
        const url = this.createURL(params);

        if (this.cash[url]) {
            return Promise.resolve(this.cash[url]);
        }

        return fetch(url)
            .then(response => {
                return response.json()
                    .then(data => {
                        const result = {
                            data,
                            status: response.status,
                            url: response.url
                        };

                        this.cash[result.url] = result;

                        return result;
                    });
            });
    }
}

export default new BeerAPI();