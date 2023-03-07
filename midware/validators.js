const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const yup = require('yup');

// Define a schema for validating the task data
const taskSchema = yup.object().shape({
  name: yup.string().required(),
  matricule: yup.string().required(),
  score: yup.number().required(),
  status: yup.boolean().required(),
  email_User: yup.string().email().required()
});