
// @ts-nocheck
Deno.serve(async (req) => {
  // ... rest of your code
})



Deno.serve(async (req) => {
  try {
    const lead = await req.json();

    const slackWebhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");

    if (!slackWebhookUrl) {
      return new Response(
        JSON.stringify({
          error: "SLACK_WEBHOOK_URL is not configured",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const message = [
      "🔥 *NEW LEAD — Book More Leads*",
      "",
      `👤 *Name:* ${lead.name || "N/A"}`,
      `📧 *Email:* ${lead.email || "N/A"}`,
      `📱 *Phone:* ${lead.phone || "N/A"}`,
      `🏢 *Company:* ${lead.company || "N/A"}`,
      `📍 *Source:* ${lead.source || "N/A"}`,
      `📊 *Status:* ${lead.status || "N/A"}`,
    ].join("\n");

    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      return new Response(
        JSON.stringify({
          error: "Slack notification failed",
          details: errorText,
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead sent to Slack!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Invalid request",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});