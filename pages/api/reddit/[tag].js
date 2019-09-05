export default async (req, res) => {
  
  const response = await fetch(`https://www.reddit.com/r/${req.query.tag}.json`)
  const reddit = await response.json()
  
  res.status(200).json(reddit)
}
