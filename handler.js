"use strict";

module.exports.createChatMessage = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "createChatMessage",
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body,
    }),
  };
  return response;
};

module.exports.getMessage = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "getMessage",
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body,
    }),
  };
  return response;
};

module.exports.getRoomMessages = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "getRoomMessages",
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body,
    }),
  };
  return response;
};

module.exports.getUserMessages = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "getUserMessages",
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body,
    }),
  };
  return response;
};
