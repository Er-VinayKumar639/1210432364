import axios from "axios";

class Axios{
    agent;
    url = "http://20.244.56.144/test";

    constructor() {
            const instance = axios.create({
                baseURL: this.url,
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTYwMzAzLCJpYXQiOjE3MjQxNjAwMDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZmNTk0MjcwLWQwZDItNGM2OS1hYTE5LTVlODNlYWExZDg1ZSIsInN1YiI6InNodWJoYW1jaGF1aGFuOTQ1MkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJBZmZvcmRNZWQiLCJjbGllbnRJRCI6ImZmNTk0MjcwLWQwZDItNGM2OS1hYTE5LTVlODNlYWExZDg1ZSIsImNsaWVudFNlY3JldCI6InlhZ0dhSEtUQlJjaENOTmoiLCJvd25lck5hbWUiOiJTaHViaGFtIENoYXVoYW4iLCJvd25lckVtYWlsIjoic2h1YmhhbWNoYXVoYW45NDUyQGdtYWlsLmNvbSIsInJvbGxObyI6IjEyMTA0MzIzMTIifQ.os6XVyQXD88wgiq6HMO4dZ1oUHzYvNd0duN5rD1wjQA`,
                }
              });
            this.agent = instance;
    }
}

export default Axios;