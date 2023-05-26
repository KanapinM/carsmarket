export class AutoApi {
    #onResponse(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(console.error(`Возникла ошибка, код - ${response.status}`));
    }

    constructor(config) {
        this._autoUrl = config.autoUrl;
        this._headers = config.headers;
    }

    getInitial() {
        return fetch(`${'https://maximum.expert/api/stock-test?brand=Chery'}`, {
            mode: 'no-cors',
            method: 'GET',
            headers: this._headers,
        })
            .then(this.#onResponse)
            .then((res) => {
                return res;
            });
    };

}

const autoApi = new AutoApi({

    autoUrl: 'https://maximum.expert/api/stock-test?brand=Chery',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
    },
    // credentials: "include",
});

export default autoApi;
