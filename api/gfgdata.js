// Vercel Serverless Function — fetches GeeksforGeeks profile stats.
// Uses GFG's own profile-info API (the new gfg profile pages are client-rendered,
// so the old cheerio HTML-scraping approach returned nothing).
const GFG_HANDLE = "sarthakkhetarpal22";
const GFG_API = `https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${GFG_HANDLE}`;

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const response = await fetch(GFG_API, {
      headers: { "User-Agent": "Mozilla/5.0 (portfolio-stats-fetcher)" },
    });
    const json = await response.json();
    const stats = json?.data || {};

    // Cache at the edge for 1 hour.
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      total_problem_solved: stats.total_problems_solved ?? null, // number, e.g. 553
      coding_score: stats.score ?? null,
      institute_rank: stats.institute_rank ?? null,
    });
  } catch (error) {
    console.error("GFG fetch failed:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
