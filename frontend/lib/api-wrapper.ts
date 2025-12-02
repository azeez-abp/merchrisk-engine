export class API {
  constructor(private base = process.env.NEXT_PUBLIC_API_URL) {}

  async get(path: string) {
    const res = await fetch(`${this.base}${path}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }

  async post(path: string, data: any) {
    const res = await fetch(`${this.base}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
}

export const api = new API();
