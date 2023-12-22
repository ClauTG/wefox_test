# wefox
As part of Technical Test For QA Backend Automation Candidates

## Part 1 - Exploratory testing
Test scenarios are included in `p1-exploratory-testing/booking-room-test.md`

## Part 2 - Automated testing

### Run the API petstore 

[Swagger Pet Store Sample](https://github.com/swagger-api/swagger-petstore) project has a public imaged stored in [dockerHub](https://hub.docker.com/) site so, to run locally only need pull the image and expose port _8080_ from the image and access petstore via the exposed port. 

Example:

``docker pull swaggerapi/petstore3:unstable``

``docker run  --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable``

### Run test suite

The framework choosen for writing API tests was [Jest](https://jestjs.io/). To make API requests in our Jest tests, we require a module that will query our endpoints and return the responses to our tests. That module is [SuperTest](https://www.npmjs.com/package/supertest). Finally,  [Joi](https://joi.dev/) validation module was used to validate data at the request level. _Node_ version required `lts/hydrogen -> v18.18.2`


Once in `wefox_test/p2-api-testing` folder, you should install all development dependency, run this command.

``npm install``

Now when you run `npm test` on your terminal, you will get a successfully executing test. When the test runs and passes, the test results on the terminal should be green.

## Part 3 - Reflection on the automation exercise

It is well know, the integration and API testing is a fundamental part of any Test Automation Strategy. The API testing technique produces fast and great output. API testing helps to validate the business logic to a great extent. The framework choosen for test automation reflects my latest experience, but in real world open discussions about the daily challenges faced are necessary to select the technology stack to helps us solve our customer’s problems with a higgh quality software product.

I would like to include this image that reflects the position of API testing suite in the pipeline
![pipeline structure](/images/pipeline.png)

source: [New Challenges in Continuous Delivery](https://medium.com/test-automation-university/new-challenges-in-continuous-delivery-7bf7893fa370)

Lastly, I am aware that test automation must have a control on the test data to have a predictable starting point, so having harcoded data is not a good practice (as can be seen in the test deleting a record) but I think for a POC it is understandable. The creation of request and response bodies would be advisable to use templates.
