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
                    "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTYxODk3LCJpYXQiOjE3MjQxNjE1OTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIxM2VlNTM2LTBhZGItNGMyZS04YzA5LTY5MjM3NjYzYzgzMiIsInN1YiI6ImVyLnZpbmF5Y2hhdXJhc2l5YTIwMDNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiIyMTNlZTUzNi0wYWRiLTRjMmUtOGMwOS02OTIzNzY2M2M4MzIiLCJjbGllbnRTZWNyZXQiOiJQamNJd0dwTW9PY21oVFB6Iiwib3duZXJOYW1lIjoiVmluYXkgS3VtYXIiLCJvd25lckVtYWlsIjoiZXIudmluYXljaGF1cmFzaXlhMjAwM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIxMjEwNDMyMzY0In0.lo8Vp0XujS_1l-TrFO-L_nyHHO2O0MgaZL7ILp-bChc`,
                }
              });
            this.agent = instance;
    }
}

export default Axios;