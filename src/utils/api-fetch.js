export const apiFetch = async (
    uri,
    method = "GET",
    body = null,
    headers = { "Content-type": "application/json" },
) => {
    try {
        const result = await fetch(uri, {
            body,
            method,
            headers,
        });

        if (!result.ok) return result.text();

        const payload = result.json();

        return payload;
    } catch (err) {
        throw new Error("Error in ", uri, err);
    }
};
