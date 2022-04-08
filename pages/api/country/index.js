export default function hanlder(req, res) {
  res.status(200).json([
    {
      country: 'India',
    },
    {
      country: 'Russia',
    },
    {
      country: 'Ukraine',
    },
  ]);
}
