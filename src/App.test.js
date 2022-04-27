import {getByText, render, screen} from "@testing-library/react"
import App from "./App"

import {createMemoryHistory} from 'history'
import React from 'react'
import {MemoryRouter, Router} from 'react-router-dom'


export const localStorageMock = (function() {
  let store = {};
  return {
    getItem: jest.fn(function(key) {
      return store[key]
    }),
    setItem: jest.fn(function(key, value) {
      store[key] = value.toString()
    }),
    clear: function() {
      store = {}
    },
    removeItem: function(key) {
      delete store[key]
    }
  }
})()

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  window.localStorage.setItem('employees', JSON.stringify(
    [{"firstname":"a","lastname":"a","birthDate":"0001-01-01","startDate":"0001-01-01","street":"a","city":"a","state":"Alabama","zipCode":"1","department":"sales"},{"firstname":"A","lastname":"A","birthDate":"0002-02-02","startDate":"0002-02-02","street":"A","city":"A","state":"Alabama","zipCode":"2","department":"sales"},{"firstname":"b","lastname":"b","birthDate":"0003-03-03","startDate":"0003-03-03","street":"b","city":"b","state":"Alabama","zipCode":"3","department":"sales"},{"firstname":"B","lastname":"B","birthDate":"0004-04-04","startDate":"0004-04-04","street":"B","city":"B","state":"Alabama","zipCode":"4","department":"sales"},{"firstname":"extra","lastname":"field","birthDate":"2027-01-03","startDate":"2022-01-02","street":"12 rue leon","city":"madrid","state":"Alabama","zipCode":"54342","department":"engineering"},{"firstname":"another one","lastname":"zinedine","birthDate":"2017-01-01","startDate":"2023-01-01","street":"la street","city":"los angeles","state":"Alabama","zipCode":"5643","department":"human resources"},{"firstname":"zalke","lastname":"azlkejazlkej","birthDate":"2023-01-01","startDate":"2022-02-01","street":"azmle","city":"AZelke","state":"Alabama","zipCode":"23","department":"legal"},{"firstname":"azlke","lastname":"lkazje","birthDate":"2022-01-02","startDate":"2022-01-02","street":"azmlej","city":"azemlj","state":"Alabama","zipCode":"13123213","department":"marketing"},{"firstname":"azlke","lastname":"lkazje","birthDate":"2022-01-02","startDate":"2022-01-02","street":"azmlej","city":"azemlj","state":"Alabama","zipCode":"13123213","department":"marketing"},{"firstname":"aze","lastname":"aze","birthDate":"2022-01-01","startDate":"2022-01-01","street":"azeazea","city":"aze","state":"state.name","zipCode":"12","department":"sales"},{"firstname":"another","lastname":"one","birthDate":"2001-05-01","startDate":"2022-05-03","street":"garde du nord","city":"paris","state":"Alabama","zipCode":"12","department":"marketing"},{"firstname":"amlzke","lastname":"azmlek","birthDate":"2022-01-01","startDate":"2022-01-01","street":"aùmlke","city":"azem","state":"Alabama","zipCode":"12","department":"sales"},{"firstname":"john","lastname":"lenon","birthDate":"1943-03-12","startDate":"1945-05-12","street":"32 Austin Street","city":"Miami","state":"Alabama","zipCode":"1231","department":"marketing"},{"firstname":"john","lastname":"lenon","birthDate":"1943-03-12","startDate":"1945-05-12","street":"32 Austin Street","city":"Miami","state":"Alabama","zipCode":"1231","department":"marketing"}]
  ))
})

afterAll(() => {

})

test('get employees from local  storage', () => {
  render(<App />)
  expect(screen.getByText(/create employee/i)).toBeInTheDocument()
})
