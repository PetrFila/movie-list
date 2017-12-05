

* Usage

  * Send a POST request to save a movie in the MongoDB database
  ```
  curl -d "title=avatar&yearReleased=2017&star=ewok" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:7000/movies
  ```

* Troubleshooting
  * If you can't access the form parameters in `req.body` that were sent through as a POST request to the endpoint, then ensure that you have setup `body-parser` correctly.
