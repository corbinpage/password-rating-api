Password Rating API
===================
Simple and secure Web API to check the quality of a proposed password.

Try it out or call the service from your own app.

How it Works
--------------
Make a GET request to /api/v1/passwords/{password} to receive a rating and details about your password's strength.

```sh
curl https://password-rating.herokuapp.com/api/v1/passwords/123456
```

License
-------

MIT