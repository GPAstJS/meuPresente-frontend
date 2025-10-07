export const useLogin = () => {

    const getEvents = async () => {
        const url = "http://127.0.0.1:8083/events/getEvents"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${sessionStorage.getItem('authToken')}`
            }
        })

        const result = await response.json();
       sessionStorage.setItem("userEvents", result.result.length)
        return result
    }

    const login = async (data) => {
        try {
            const url = "http://127.0.0.1:8083/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log(result)

            if (!response.ok) {
                throw new Error(result.message || "Erro ao fazer login");
            }


            if (result.response?.token) {
                sessionStorage.setItem("authToken", result.response.token);
                getEvents()
                
            } else {
                throw new Error("Token não encontrado na resposta.");
            }
        } catch (err) {
            console.error("Erro ao fazer login:", err.message);
        }
    };

    return { login };
};
