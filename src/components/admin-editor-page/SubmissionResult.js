import React from 'react'

const submitResult = {
    "Leeching":{
        "lab1":{
            "submission": [

                    { "details": "question1",
                        "result": {
                            "score": 10,
                            "score_max": 15,
                            "timestamp": '06/20/2021 @ 6:27am'
                        }

                    },
                    { "details": "question2",
                        "result": {
                            "score": 20,
                            "score_max": 30,
                            "timestamp": '06/20/2021 @ 6:27am'
                        }

                    },
                    { "details": "question3",
                        "result": {
                            "score": 25,
                            "score_max": 30,
                            "timestamp": '06/20/2021 @ 6:27am'
                        }

                    }

            ]
        }
    }

}
/* 
var usersWithName = Object.keys(users).map(function(key) {
    var user = users[key];
    user.name = key;
    return user;
});
 */
class SubmissionResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            json: submitResult
        }
    };


    render() {
        return (
            <React.Fragment>
                <p>{JSON.stringify(this.state.json)}</p>
            </React.Fragment>
        )
    }
}

export default SubmissionResult;