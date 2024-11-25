pipeline {
    agent { label 'firstnode' }
    stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force"

            }
        }
        stage("Deploy") {

            steps {
                    dir('/home/liberty-nest-js') {
                        sh "sudo cp -r /${WORKSPACE}/** ./"
                        sh "sudo pm2 restart liberty-api"
                        
                    }
               
                }
            }
        }
    }
