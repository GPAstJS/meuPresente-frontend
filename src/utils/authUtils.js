export async function checkTokenExpiration() {
    const token = sessionStorage.getItem("authToken");

    if (!token) {
        window.location.href = "/login";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8083/auth/check-token", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Token expirado");
        }

        console.log("Token ainda válido.");
    } catch (error) {
        console.warn("Token expirado! Redirecionando para login...");
        sessionStorage.removeItem("authToken");
        window.location.href = "/";
    }
}
export function startTokenExpirationCheck() {
    setInterval(checkTokenExpiration, 10000);
    checkTokenExpiration();
}
