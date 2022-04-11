import { ratingValue } from '../../../components/data/rating';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(ratingValue);
    // check if submitted method is POST
    // and if it is extract the body from the request object
    // You make to store you data in the database
    // or in temperary arrays like in this example
    // finally make sure to send back the response
  } else if (req.method === 'POST') {
    const score = req.body.score;
    const newRating = {
      id: Date.now(),
      score,
    };
    ratingValue.push(newRating);
    res.status(201).json(newRating);
  }
}
