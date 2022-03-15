import { jest, describe, test, beforeEach, expect } from '@jest/globals'
import config from '../../../server/config.js'
import { Controller } from '../../../server/controller.js'
import { handler } from '../../../server/routes.js'
import TestUtil from '../_util/testUtil.js'
const { pages, location, constants } = config

describe('#Routes - test site for api response', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('GET / - should redirect to home page', async () => {
    const params = TestUtil.defaultHandleParams()
    params.request.method = 'GET'
    params.request.url = '/'

    await handler(...params.values())
    expect(params.response.writeHead).toHaveBeenCalledWith(302, { Location: location.home })
  })
  test(`GET /home - should response with ${pages.homeHTML} file stream`, async () => {
    const params = TestUtil.defaultHandleParams()
    params.request.method = 'GET'
    params.request.url = '/home'
    const mockFileStream = TestUtil.generateReadableStream(['data'])

    const getFileStreamSpy = jest
      .spyOn(Controller.prototype, 'getFileStream')
      .mockResolvedValue({ stream: mockFileStream })
    const pipeSpy = jest.spyOn(mockFileStream, 'pipe').mockReturnValue()

    await handler(...params.values())
    expect(getFileStreamSpy).toHaveBeenCalledWith(pages.homeHTML)
    expect(pipeSpy).toHaveBeenCalledWith(params.response)
  })
  test(`GET /controller - should response with ${pages.controllerHTML} file stream`, async () => {
    const params = TestUtil.defaultHandleParams()
    params.request.method = 'GET'
    params.request.url = '/controller'
    const mockFileStream = TestUtil.generateReadableStream(['data'])

    const getFileStreamSpy = jest
      .spyOn(Controller.prototype, 'getFileStream')
      .mockResolvedValue({ stream: mockFileStream })
    const pipeSpy = jest.spyOn(mockFileStream, 'pipe').mockReturnValue()

    await handler(...params.values())
    expect(getFileStreamSpy).toHaveBeenCalledWith(pages.controllerHTML)
    expect(pipeSpy).toHaveBeenCalledWith(params.response)
  })
  test(`GET /file.ext - should response with file stream`, async () => {
    const params = TestUtil.defaultHandleParams()
    const filename = '/file.ext'
    params.request.method = 'GET'
    params.request.url = filename
    const expectedType = '.ext'
    const mockFileStream = TestUtil.generateReadableStream(['data'])

    const getFileStreamSpy = jest
      .spyOn(Controller.prototype, 'getFileStream')
      .mockResolvedValue({ stream: mockFileStream, type: expectedType })
    const pipeSpy = jest.spyOn(mockFileStream, 'pipe').mockReturnValue()

    await handler(...params.values())
    expect(getFileStreamSpy).toHaveBeenCalledWith(filename)
    expect(pipeSpy).toHaveBeenCalledWith(params.response)
    expect(params.response.writeHead).not.toHaveBeenCalledWith(200, {
      'Content-Type': constants.CONTENT_TYPE[expectedType],
    })
  })
  test(`POST /unknown - given an inexistent route, it should response with 404`, async () => {
    const params = TestUtil.defaultHandleParams()
    params.request.method = 'POST'
    params.request.url = '/unknown'

    await handler(...params.values())

    expect(params.response.writeHead).toHaveBeenCalledWith(404)
    expect(params.response.end).toHaveBeenCalled()
  })

  describe('exceptions', () => {
    test('given inexistent file it should responde with 404', async () => {
      const params = TestUtil.defaultHandleParams()
      params.request.method = 'GET'
      params.request.url = '/index.png'

      jest
        .spyOn(Controller.prototype, 'getFileStream')
        .mockRejectedValue(new Error('Error: ENOENT: no such file or directory'))

      await handler(...params.values())

      expect(params.response.writeHead).toHaveBeenCalledWith(404)
      expect(params.response.end).toHaveBeenCalled()
    })
    test('given an error it should respond with 500', async () => {
      const params = TestUtil.defaultHandleParams()
      params.request.method = 'GET'
      params.request.url = '/index.png'

      jest.spyOn(Controller.prototype, 'getFileStream').mockRejectedValue(new Error('Error:'))

      await handler(...params.values())

      expect(params.response.writeHead).toHaveBeenCalledWith(500)
      expect(params.response.end).toHaveBeenCalled()
    })
  })
})
