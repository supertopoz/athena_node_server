# athena_node_server for MAC

### Prerequisites
* Install AWS CLI https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html
* Confige AWS CLI https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

## Setup 
* Clone this repro. 
* In root folder run.
``npm install``
* In index.js change ``aws.config.update({region:'ap-south-1'});``
* In index.js change query object as needed. 
* Open terminal in root folder.
* run ``npm start:dev``.
* open browser ``localhost:3000``.
