const GAS_URL = "https://script.google.com/macros/s/AKfycbxGY3UN2FMF7mUPn14ILhCa5PcfmsU0zQbZDmk8-9R5eRcHH1VYxyVQsqgLmWn-i7WMGg/exec";

exports.handler = async function(event) {
  try {
    let url = GAS_URL;
    const qs = event.rawQuery || "";

    if (event.httpMethod === "GET" && qs) {
      url += "?" + qs;
    }

    const options = {
      method: event.httpMethod === "GET" ? "GET" : "POST",
      redirect: "follow"
    };

    if (options.method === "POST") {
      options.headers = {
        "Content-Type": "text/plain;charset=utf-8"
      };
      options.body = event.body || "{}";
    }

    const response = await fetch(url, options);
    const text = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      },
      body: text
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        ok: false,
        error: "Proxy error: " + err.message
      })
    };
  }
};
