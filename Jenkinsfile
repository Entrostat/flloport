pipeline {
  agent any
  stages {
    stage('Backend Tests') {
      steps {
        sh '''echo "Running backend tests"

./devops/test.sh'''
      }
    }
  }
}