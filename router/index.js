import { graphqlKoa } from 'apollo-server-koa';
import { graphiqlKoa } from 'apollo-server-koa';
import { saveInfo, fetchInfo } from '../controllers/info';
import { saveStudent, fetchStudent, fetchStudentDetail } from  '../controllers/student';

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail);

module.exports = router;