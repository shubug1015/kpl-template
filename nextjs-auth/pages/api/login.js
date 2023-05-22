import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
  const userData = req.body;

  const {
    data: { token },
  } = await axios.post('http://127.0.0.1:8000/users/login/', userData);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
    })
  );

  res.statusCode = 200;
  res.json({ success: true });
};
