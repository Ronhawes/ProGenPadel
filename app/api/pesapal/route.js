export async function POST(request) {
  const url = "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken";

  const credentials = {
    consumer_key: process.env.PesaPal_Consumer_Key,
    consumer_secret: process.env.PesaPal_Consumer_Secret,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Token request failed" }), {
      status: 500,
    });
  }
}
