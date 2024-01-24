const { createClient } = require("@supabase/supabase-js");
exports.handler = async (event) => {
    try {
      const requestedLogo = event.queryStringParameters.logo;
      const supabase = createClient(
        process.env.PROJECT_URL,
        process.env.SUPABASE_KEY
      );
      const { data } = supabase.storage
        .from("pw_assets_main")
        .getPublicUrl(`logos/${requestedLogo}`);
      return { statusCode: 200, body: JSON.stringify({ data }) };
    } catch (e) {
      return { statusCode: 500, body: e.toString() };
    }
  };