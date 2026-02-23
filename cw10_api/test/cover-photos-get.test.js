import axios from "axios";
import { Validator } from "jsonschema";

describe("GET /cover-photos", () => {
  let response;
  beforeAll(async () => {
    response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos');
  });
  it('[GET api/v1/CoverPhoto] should return status code 200 vith valid endpoint', async () => {
    expect(response.status).toBe(200);
  });

  it('[GET api/v1/CoverPhoto] should return list of cover photos', async () => {
    const validationResult = Validator.validate(response.data, getCoverPhotosSchema);
    expect(validationResult.valid).toEqual(true);
  });

  it('[GET api/v1/CoverPhoto] should return status code 200 with valid endpoint', async () => {
    let errorResponse;
    try {
      errorResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos111');
    } catch (responseError) {
      errorResponse = responseError.response;
    }
    expect(errorResponse.status).toBe(404);
  });
});
