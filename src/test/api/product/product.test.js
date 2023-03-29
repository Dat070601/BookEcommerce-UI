import { describe, test, it, expect, vi } from 'vitest'
import { getProductById } from '../../../api/product'
import axios from 'axios'
import { URL } from '../../../constant'

vi.mock("axios")

describe("test product service", () => {
  it("it should called from granted API url", async () => {
    const result = await getProductById(URL, "45f7a4a8-d859-4433-c339-08db18899e0f")
    expect(axios.get).toHaveBeenCalledWith(`${URL}/api/product/45f7a4a8-d859-4433-c339-08db18899e0f`)
  })

  it("it should return product", async () => {
    const result = {
      "productId": "45f7a4a8-d859-4433-c339-08db18899e0f",
      "productName": "Naruto",
      "vendorId": "00000000-0000-0000-0000-000000000000",
      "productDescription": "string",
      "sold": 73,
      "quantity": 0,
      "vendorName": null,
      "created": "2023-02-10T00:00:00",
      "images": [
          {
              "imageId": "37d116e4-5d54-4eca-fbbe-08db18899e17",
              "imageURL": "https://product.hstatic.net/200000343865/product/5_95cade826ed745f58186ffc2de34453e.jpg"
          }
      ],
      "productVariants": [
          {
              "productVariantId": "6e7d3726-8e1f-4b80-7c4a-08db1889a5ea",
              "vendorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "quantity": 997,
              "productVariantName": "Naruto Part 1",
              "productNowPrice": 50.0,
              "productDefaultPrice": 500.0,
              "productSalePrice": 50.0
          }
      ],
      "isSuccess": true,
      "message": null
  }
    axios.get.mockResolvedValue({
      data: result
    })
  })
})