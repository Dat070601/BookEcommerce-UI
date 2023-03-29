import { vi, describe, it, test, expect } from 'vitest'
import { login } from '../../../api/auth'
import { URL } from '../../../constant'
import axios from 'axios'

vi.mock("axios")

const email = "huy2002109@mailnesia.com"
const password = "huy2002109"

describe("Test login", () => {
  it("it should return true when validating both inputs", async () => {
    expect(email).toBeDefined()
    expect(email).not.toBeNull()
    expect(email).match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    expect(email).toEqual(email)    

    expect(password).length >= 8
    expect(password).match(/^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/mg)
  })

  it("it should return success response after login", async () => {
    const mockResult = {
      isSuccess: true,
      message: "login successfully",
      accessToken: "",
      refreshToken: ""
    }
    axios.post.mockResolvedValue({
      data: mockResult
    })
    const result = await login(`${URL}`, {
      email: email,
      password: password
    })
    expect(axios.post).toHaveBeenCalled(`${URL}/verify`)
    expect(result).toEqual(mockResult)
  })
})